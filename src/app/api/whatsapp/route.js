// src/app/api/whatsapp/route.js
import { NextResponse } from "next/server";
import { appendLeadRow, markCell } from "../../lib/googleSheet";
import { buildWebinarMeta, sendConfirmation } from "../../lib/aisensy";
import { validateForm } from "../../lib/validate";

export async function POST(req) {
  try {
    const body = await req.json();
    validateForm(body);

    const name = body.name;
    const email = body.email;
    const phone10 = String(body.phone || "").trim(); // client already sends 10 digit ideally

    const webinarMeta = buildWebinarMeta();

    // Sheet values (A:M)
    const row = [
      new Date().toLocaleString("en-IN"),
      name,
      email,
      phone10,
      process.env.NODE_ENV === "production" ? "website-prod" : "website-local",
      webinarMeta.webinarDay,
      webinarMeta.webinarDateText,
      webinarMeta.webinarTime,
      webinarMeta.webinarISO,
      "no", // sentConfirmation
      "no", // sent1Day
      "no", // sent10Min
      "no", // sentLive
    ];

    const { rowNumber } = await appendLeadRow(row);

    // Send confirmation
    await sendConfirmation({ name, phone: phone10, email, webinarMeta });

    // Mark confirmation = yes (Column J)
    if (rowNumber) await markCell(rowNumber, "J", "yes");

    return NextResponse.json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to submit form." },
      { status: 400 }
    );
  }
}
