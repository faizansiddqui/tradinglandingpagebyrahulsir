import { google } from "googleapis";

export async function saveToSheet({ name, email, phone, source, webinarDay, webinarDate, webinarTime, webinarType }) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // ❌ NO authorize() here

    const sheets = google.sheets({
      version: "v4",
      auth: await auth.getClient(), // ✅ THIS IS THE ONLY CORRECT WAY
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toLocaleString("en-IN"),
          name,
          email,
          phone,
          source,
          webinarDay,
          webinarDate,
          webinarTime,
          webinarType
        ]],
      },
    });

    return { success: true };

  } catch (error) {
    console.error("❌ Google Sheet Error:", error);
    throw error;
  }
}
