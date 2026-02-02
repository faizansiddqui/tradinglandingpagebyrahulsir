// src/app/lib/googleSheet.js
import { google } from "googleapis";

function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

// A:M (we use until M = 13 columns)
const SHEET_NAME = "Sheet1";
const RANGE_APPEND = `${SHEET_NAME}!A:M`;
const RANGE_READ = `${SHEET_NAME}!A2:M`; // rows after headers

export async function appendLeadRow(rowValues) {
  const sheets = getSheetsClient();

  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: RANGE_APPEND,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [rowValues] },
  });

  // Try to extract appended row number from updatedRange: "Sheet1!A12:M12"
  const updatedRange = res?.data?.updates?.updatedRange || "";
  const match = updatedRange.match(/![A-Z]+(\d+):/);
  const rowNumber = match ? parseInt(match[1], 10) : null;

  return { success: true, rowNumber, updatedRange };
}

export async function readAllLeads() {
  const sheets = getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: RANGE_READ,
  });
  return res.data.values || [];
}

// Update single cell like K12, L12 etc
export async function markCell(rowNumber, columnLetter, value) {
  const sheets = getSheetsClient();
  const range = `${SHEET_NAME}!${columnLetter}${rowNumber}`;

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [[value]] },
  });

  return { success: true };
}
