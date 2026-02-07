// src/app/lib/aisensy.js
import { to91 } from "./phone";

const TAG = process.env.AISENSY_TAG_LEAD;
const WEBINAR_LINK = process.env.WEBINAR_LINK;

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

function commonTags() {
  return TAG ? [TAG] : [];
}

export async function sendConfirmation({ name, email, phone10, webinarMeta }) {
  return callAiSensy({
    apiKey: process.env.AISENSY_API_KEY,
    campaignName: process.env.AISENSY_CAMPAIGN_CONFIRM,
    destination: to91(phone10),
    userName: name,

    // TEMPLATE: {{1}} name, {{2}} email, {{3}} phone
    templateParams: [name, email, phone10],

    tags: commonTags(),

    // save attributes in contact
    attributes: {
      email,
      webinarDay: webinarMeta.webinarDay,
      webinarDate: webinarMeta.webinarDate,
      webinarTime: webinarMeta.webinarTime,
      webinarISO: webinarMeta.webinarISO,
    },

    source: process.env.NODE_ENV === "production" ? "website-prod" : "website-local",
  });
}

// 1 Day
export async function send1DayReminder({ name, phone10, webinarDate, webinarDay, webinarTime }) {
  return callAiSensy({
    apiKey: process.env.AISENSY_API_KEY,
    campaignName: process.env.AISENSY_CAMPAIGN_1DAY,
    destination: to91(phone10),
    userName: name,
    templateParams: [name, webinarDate, webinarDay, webinarTime],
    tags: commonTags(),
    source: process.env.NODE_ENV === "production" ? "website-prod" : "website-local",
  });
}

// 10 Min
export async function send10MinReminder({ name, phone10, webinarDate, webinarDay, webinarTime }) {
  return callAiSensy({
    apiKey: process.env.AISENSY_API_KEY,
    campaignName: process.env.AISENSY_CAMPAIGN_10MIN,
    destination: to91(phone10),
    userName: name,
    templateParams: [name, webinarDate, webinarDay, webinarTime, WEBINAR_LINK],
    tags: commonTags(),
    source: process.env.NODE_ENV === "production" ? "website-prod" : "website-local",
  });
}

// Live
export async function sendLiveNow({ name, phone10, webinarDate, webinarDay, webinarTime }) {
  return callAiSensy({
    apiKey: process.env.AISENSY_API_KEY,
    campaignName: process.env.AISENSY_CAMPAIGN_LIVE,
    destination: to91(phone10),
    userName: name,
    templateParams: [name, webinarDate, webinarDay, webinarTime, WEBINAR_LINK],
    tags: commonTags(),
    source: process.env.NODE_ENV === "production" ? "website-prod" : "website-local",
  });
}
