const { Worker } = require("bullmq");
const IORedis = require("ioredis");
const { google } = require("googleapis");

const QUEUE_NAME = "webinar-reminders";

function cleanPhone10(input) {
  let p = String(input || "").trim();
  p = p.replace(/[^\d]/g, "");
  if (p.startsWith("91") && p.length > 10) p = p.slice(2);
  p = p.replace(/^0+/, "");
  if (p.length !== 10) {
    throw new Error("Invalid phone number. Must be 10 digits.");
  }
  return p;
}

function to91(input) {
  return `91${cleanPhone10(input)}`;
}

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

async function markCell(rowNumber, columnLetter, value) {
  const sheets = await getSheets();
  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `Sheet1!${columnLetter}${rowNumber}`,
    valueInputOption: "RAW",
    requestBody: { values: [[value]] },
  });
}

async function callAiSensy(payload) {
  const response = await fetch("https://backend.aisensy.com/campaign/t1/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  console.log("AiSensy RAW response:", text);

  let data = null;
  try {
    data = JSON.parse(text);
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(`AiSensy failed (${response.status}): ${text}`);
  }

  const status = data?.status ?? data?.success ?? data?.code;
  if (
    status === "success" ||
    status === true ||
    status === 200 ||
    String(text).toLowerCase().includes("success")
  ) {
    return { status: "success", data };
  }

  throw new Error("AiSensy failed: " + text);
}

async function sendReminder({ campaignName, name, phone10, webinarDate, webinarDay, webinarTime }) {
  const tag = process.env.AISENSY_TAG_LEAD;
  return callAiSensy({
    apiKey: process.env.AISENSY_API_KEY,
    campaignName,
    destination: to91(phone10),
    userName: name,
    templateParams: [name, webinarDate, webinarDay, webinarTime],
    tags: tag ? [tag] : [],
    source: process.env.NODE_ENV === "production" ? "website-prod" : "website-local",
  });
}

function requireEnv(name) {
  if (!process.env[name]) throw new Error(`${name} is required`);
}

async function handleJob(job) {
  const { name, phone10, webinarDate, webinarDay, webinarTime, rowNumber } = job.data || {};

  if (!rowNumber) throw new Error("rowNumber missing");
  if (!phone10) throw new Error("phone10 missing");

  if (job.name === "send-1day") {
    await sendReminder({
      campaignName: process.env.AISENSY_CAMPAIGN_1DAY,
      name,
      phone10,
      webinarDate,
      webinarDay,
      webinarTime,
    });
    await markCell(rowNumber, "K", "yes");
  } else if (job.name === "send-10min") {
    await sendReminder({
      campaignName: process.env.AISENSY_CAMPAIGN_10MIN,
      name,
      phone10,
      webinarDate,
      webinarDay,
      webinarTime,
    });
    await markCell(rowNumber, "L", "yes");
  } else if (job.name === "send-live") {
    await sendReminder({
      campaignName: process.env.AISENSY_CAMPAIGN_LIVE,
      name,
      phone10,
      webinarDate,
      webinarDay,
      webinarTime,
    });
    await markCell(rowNumber, "M", "yes");
  } else {
    throw new Error(`Unknown job type: ${job.name}`);
  }
}

async function start() {
  requireEnv("REDIS_URL");
  requireEnv("GOOGLE_SHEET_ID");
  requireEnv("GOOGLE_CLIENT_EMAIL");
  requireEnv("GOOGLE_PRIVATE_KEY");
  requireEnv("AISENSY_API_KEY");
  requireEnv("AISENSY_CAMPAIGN_1DAY");
  requireEnv("AISENSY_CAMPAIGN_10MIN");
  requireEnv("AISENSY_CAMPAIGN_LIVE");

  const connection = new IORedis(process.env.REDIS_URL, { maxRetriesPerRequest: null });

  const worker = new Worker(
    QUEUE_NAME,
    async (job) => {
      console.log("JOB START", job.id, job.name);
      await handleJob(job);
      console.log("JOB DONE", job.id, job.name);
    },
    { connection, concurrency: 5 }
  );

  worker.on("failed", (job, err) => {
    console.error("JOB FAILED", job?.id, job?.name, err?.message);
  });

  console.log("Worker started for queue:", QUEUE_NAME);
}

start().catch((err) => {
  console.error("Worker startup failed:", err);
  process.exit(1);
});
