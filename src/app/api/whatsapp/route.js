// src/app/api/whatsapp/route.js
import { NextResponse } from "next/server";
import { cleanPhone10 } from "../../lib/phone";
import { validateForm } from "../../lib/validate";
import { saveToSheet, markCell } from "../../lib/googleSheet";
import { sendConfirmation } from "../../lib/aisensy";

// Column J = sentConfirmation
const COL_LETTER_SENT_CONFIRM = "J";
const IST_OFFSET_MIN = 5 * 60 + 30;

const MONTHS = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function parseWebinarDate(dateStr) {
  const clean = String(dateStr || "").trim().replace(/,/g, "");
  const match = clean.match(/^(\d{1,2})\s+([A-Za-z]{3,})\s+(\d{4})$/);
  if (!match) return null;
  const day = Number(match[1]);
  const monthKey = match[2].slice(0, 3).toLowerCase();
  const year = Number(match[3]);
  const monthIdx = MONTHS[monthKey];
  if (!Number.isFinite(day) || !Number.isFinite(year) || monthIdx === undefined) return null;
  return { year, monthIdx, day };
}

function parseWebinarTime(timeStr) {
  const clean = String(timeStr || "").trim().toUpperCase();
  const match = clean.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/);
  if (!match) return null;
  let hour = Number(match[1]);
  const minute = Number(match[2] || "0");
  const meridiem = match[3] || "";

  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return null;

  if (meridiem) {
    if (hour === 12) hour = 0;
    if (meridiem === "PM") hour += 12;
  }

  return { hour, minute };
}

function buildWebinarISO({ webinarDate, webinarTime }) {
  const dateParts = parseWebinarDate(webinarDate);
  const timeParts = parseWebinarTime(webinarTime);

  if (dateParts && timeParts) {
    const utcMs =
      Date.UTC(dateParts.year, dateParts.monthIdx, dateParts.day, timeParts.hour, timeParts.minute) -
      IST_OFFSET_MIN * 60 * 1000;
    return new Date(utcMs).toISOString();
  }

  // Fallback to native parsing if format is unexpected
  const dt = new Date(`${webinarDate} ${webinarTime} GMT+0530`);
  if (isNaN(dt.getTime())) return null;
  return dt.toISOString();
}

export async function POST(req) {
  try {
    const body = await req.json();

    // basic validations + normalization
    const normalized = validateForm(body);

    const phone10 = cleanPhone10(normalized.phone);

    const webinarDay = normalized.webinarDay || "";
    const webinarDate = normalized.webinarDate || "";
    const webinarTime = normalized.webinarTime || "";

    if (!webinarDate || !webinarTime) {
      return NextResponse.json(
        { success: false, message: "webinarDate and webinarTime are required" },
        { status: 400 }
      );
    }

    const webinarISO = buildWebinarISO({ webinarDate, webinarTime });

    if (!webinarISO) {
      return NextResponse.json(
        { success: false, message: "webinarISO missing / invalid webinar date-time" },
        { status: 400 }
      );
    }

    // save row first (A:M)
    const { rowNumber } = await saveToSheet({
      name: normalized.name,
      email: normalized.email,
      phone: phone10,
      source: process.env.NODE_ENV === "production" ? "website-prod" : "website-local",
      webinarDay,
      webinarDate,
      webinarTime,
      webinarISO,
    });

    // send confirmation
    await sendConfirmation({
      name: normalized.name,
      email: normalized.email,
      phone10,
      webinarMeta: { webinarDay, webinarDate, webinarTime, webinarISO },
    });

    // if success -> mark sentConfirmation = yes
    if (rowNumber) {
      await markCell(rowNumber, COL_LETTER_SENT_CONFIRM, "yes");
    }

    return NextResponse.json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to submit form" },
      { status: 400 }
    );
  }
}
