// src/app/api/cron/route.js
import { NextResponse } from "next/server";
import { readAllLeads, markCell } from "../../lib/googleSheet";
import { send1DayReminder, send10MinReminder, sendLiveNow } from "../../lib/aisensy";

// 0-based indexes (A=0)
const COL_NAME = 1;
const COL_PHONE = 3;
const COL_WEBINAR_DAY = 5;
const COL_WEBINAR_DATE = 6;
const COL_WEBINAR_TIME = 7;
const COL_WEBINAR_ISO = 8;

const COL_SENT_CONFIRM = 9; // J
const COL_SENT_1DAY = 10;   // K
const COL_SENT_10MIN = 11;  // L
const COL_SENT_LIVE = 12;   // M

const LETTER_SENT_1DAY = "K";
const LETTER_SENT_10MIN = "L";
const LETTER_SENT_LIVE = "M";

function isAuthorized(req) {
  const header = req.headers.get("Authorization");
  return header === `Bearer ${process.env.CRON_SECRET}`;
}

export async function GET(req) {
  try {
    if (process.env.CRON_SECRET && !isAuthorized(req)) {
      return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
    }

    const leads = await readAllLeads();
    const now = new Date();

    const windowMins = parseInt(process.env.CRON_WINDOW_MINUTES || "5", 10);
    const MIN = 60 * 1000;

    const sentCount = { oneDay: 0, tenMin: 0, live: 0 };

    for (let i = 0; i < leads.length; i++) {
      const row = leads[i];
      const sheetRowNumber = i + 2; // because read starts A2

      const name = row[COL_NAME];
      const phone10 = String(row[COL_PHONE] || "").trim();

      const webinarDay = row[COL_WEBINAR_DAY];
      const webinarDate = row[COL_WEBINAR_DATE];
      const webinarTime = row[COL_WEBINAR_TIME];
      const webinarISO = row[COL_WEBINAR_ISO];

      const sentConfirm = String(row[COL_SENT_CONFIRM] || "no").toLowerCase();
      const sent1Day = String(row[COL_SENT_1DAY] || "no").toLowerCase();
      const sent10Min = String(row[COL_SENT_10MIN] || "no").toLowerCase();
      const sentLive = String(row[COL_SENT_LIVE] || "no").toLowerCase();

      if (!webinarISO) continue;
      if (!phone10 || phone10.length !== 10) continue;
      if (sentConfirm !== "yes") continue;

      const webinarDT = new Date(webinarISO);
      const diffMs = webinarDT.getTime() - now.getTime();

      // 1 day before window: 24h to (24h - window)
      const start1Day = 24 * 60 * MIN;
      const end1Day = (24 * 60 - windowMins) * MIN;

      if (sent1Day !== "yes" && diffMs <= start1Day && diffMs > end1Day) {
        await send1DayReminder({ name, phone10, webinarDate, webinarDay, webinarTime });
        await markCell(sheetRowNumber, LETTER_SENT_1DAY, "yes");
        sentCount.oneDay++;
        continue;
      }

      // 10 min window: 10m to (10m - window)
      const start10 = 10 * MIN;
      const end10 = (10 - windowMins) * MIN;

      if (sent10Min !== "yes" && diffMs <= start10 && diffMs > end10) {
        await send10MinReminder({ name, phone10, webinarDate, webinarDay, webinarTime });
        await markCell(sheetRowNumber, LETTER_SENT_10MIN, "yes");
        sentCount.tenMin++;
        continue;
      }

      // Live window: 0 to (-window)
      if (sentLive !== "yes" && diffMs <= 0 && diffMs > -windowMins * MIN) {
        await sendLiveNow({ name, phone10, webinarDate, webinarDay, webinarTime });
        await markCell(sheetRowNumber, LETTER_SENT_LIVE, "yes");
        sentCount.live++;
        continue;
      }
    }

    return NextResponse.json({ ok: true, now: now.toISOString(), windowMins, sentCount, totalLeads: leads.length });
  } catch (error) {
    console.error("❌ CRON Error:", error);
    return NextResponse.json({ ok: false, message: error.message }, { status: 500 });
  }
}
