// Script to initialize Google Sheet with headers
// Run this once after setting up your environment variables

import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const auth = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheets = google.sheets({ version: "v4", auth });

async function initSheetHeaders() {
    try {

        await sheets.spreadsheets.values.update({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "Leads!A1:E1",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    ["Timestamp", "Name", "Email", "Phone", "Source"]
                ]
            }
        });

    } catch (error) {
        console.error("❌ Error initializing sheet:", error.message);
        if (error.message.includes("PERMISSION")) {
        }
    }
}

// Only run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    initSheetHeaders();
}

export { initSheetHeaders };