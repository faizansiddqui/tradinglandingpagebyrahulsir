// src/app/lib/googleSheet.js
import { google } from "googleapis";

function getAuthClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return auth.getClient();
}

async function getSheets() {
  const client = await getAuthClient();
  return google.sheets({ version: "v4", auth: client });
}

// ✅ Append full row A:M and return inserted row number
export async function saveToSheet({
  name,
  email,
  phone,
  source,
  webinarDay,
  webinarDate,
  webinarTime,
  webinarISO,
}) {
  const sheets = await getSheets();

  const values = [[
    new Date().toLocaleString("en-IN"), // A Timestamp
    name,                               // B
    email,                              // C
    phone,                              // D (10 digit only)
    source,                             // E
    webinarDay || "",                   // F
    webinarDate || "",                  // G
    webinarTime || "",                  // H
    webinarISO || "",                   // I
    "no",                               // J sentConfirmation
    "no",                               // K sent1Day
    "no",                               // L sent10Min
    "no",                               // M sentLive
  ]];

  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:M",
    valueInputOption: "RAW",
    requestBody: { values },
  });

  // Example updatedRange: "Sheet1!A12:M12"
  const updatedRange = res.data?.updates?.updatedRange || "";
  const match = updatedRange.match(/!A(\d+):/);
  const rowNumber = match ? Number(match[1]) : null;

  return { success: true, rowNumber };
}

// ✅ Mark a single cell (e.g. J12 = "yes")
export async function markCell(rowNumber, columnLetter, value) {
  const sheets = await getSheets();

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `Sheet1!${columnLetter}${rowNumber}`,
    valueInputOption: "RAW",
    requestBody: { values: [[value]] },
  });

  return { success: true };
}

// ✅ Read all leads (rows after header)
export async function readAllLeads() {
  const sheets = await getSheets();

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:M",
  });

  const rows = res.data.values || [];
  return rows.slice(1); // remove header row
}
