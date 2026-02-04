// src/app/api/qstash/route.js
import { NextResponse } from "next/server";
import { verifyQstashRequest } from "../../lib/qstash";
import { markCell } from "../../lib/googleSheet";
import { send1DayReminder, send10MinReminder, sendLiveNow } from "../../lib/aisensy";

export async function POST(req) {
  try {
    const body = await req.text();
    const signature = req.headers.get("upstash-signature") || "";

    const isValid = await verifyQstashRequest({ body, signature, reqUrl: req.url });
    if (!isValid) {
      return NextResponse.json({ ok: false, message: "Invalid signature" }, { status: 401 });
    }

    const data = JSON.parse(body || "{}");
    const {
      type,
      rowNumber,
      name,
      phone10,
      webinarDate,
      webinarDay,
      webinarTime,
    } = data;

    if (!rowNumber || !type) {
      return NextResponse.json({ ok: false, message: "Missing payload fields" }, { status: 400 });
    }

    console.log("QSTASH RECEIVED", { type, rowNumber, phone10, webinarDate, webinarDay, webinarTime });

    if (type === "1day") {
      await send1DayReminder({ name, phone10, webinarDate, webinarDay, webinarTime });
      await markCell(rowNumber, "K", "yes");
      console.log("QSTASH SENT 1DAY", { rowNumber });
    } else if (type === "10min") {
      await send10MinReminder({ name, phone10, webinarDate, webinarDay, webinarTime });
      await markCell(rowNumber, "L", "yes");
      console.log("QSTASH SENT 10MIN", { rowNumber });
    } else if (type === "live") {
      await sendLiveNow({ name, phone10, webinarDate, webinarDay, webinarTime });
      await markCell(rowNumber, "M", "yes");
      console.log("QSTASH SENT LIVE", { rowNumber });
    } else {
      return NextResponse.json({ ok: false, message: "Unknown job type" }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("QStash Error:", error);
    return NextResponse.json({ ok: false, message: error.message }, { status: 500 });
  }
}
