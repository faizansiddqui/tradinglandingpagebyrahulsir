// src/app/lib/aisensy.js
import { getNextWebinarDate } from "./webinar";

const API_URL = "https://backend.aisensy.com/campaign/t1/api";

function to10Digit(phone) {
  let p = String(phone || "").trim();
  if (p.startsWith("+91")) p = p.slice(3);
  if (p.startsWith("91")) p = p.slice(2);
  if (p.startsWith("0")) p = p.slice(1);
  return p;
}

function to91(phone10) {
  const p = to10Digit(phone10);
  return `91${p}`;
}

async function callAisensy(payload) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await response.text(); // ✅ Aisensy often returns "Success."
  if (text.toLowerCase().includes("success")) return { ok: true, raw: text };

  // try parse json error
  let msg = text;
  try {
    const j = JSON.parse(text);
    msg = j?.message || text;
  } catch {}
  throw new Error(`AiSensy failed: ${msg}`);
}

export function buildWebinarMeta() {
  const webinarDate = getNextWebinarDate();

  const webinarISO = webinarDate.toISOString();

  const webinarDay = webinarDate.toLocaleDateString("en-IN", { weekday: "long" });

  const webinarDateText = webinarDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const webinarTime = webinarDate.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return { webinarISO, webinarDay, webinarDateText, webinarTime };
}

// 1) Confirmation (template has {{1}} {{2}} {{3}} => name,email,phone)
export async function sendConfirmation({ name, phone, email, webinarMeta }) {
  const phone10 = to10Digit(phone);
  const destination = to91(phone10);

  const { webinarISO, webinarDay, webinarDateText, webinarTime } = webinarMeta;

  return callAisensy({
    apiKey: process.env.AISENSY_API_KEY,
    campaignName: process.env.AISENSY_CAMPAIGN_CONFIRM,
    destination,
    userName: name,

    templateParams: [name, email, phone10],

    // ✅ safe tag (avoid underscore)
    tags: [process.env.AISENSY_TAG_LEAD || "webinar_lead"],

    // ✅ these names must match your AiSensy user attributes
    attributes: {
      email,
      webinarDay,
      webinarDate: webinarDateText,
      webinarTime,
      webinarDatetime: webinarISO,
      webinarLink: process.env.WEBINAR_LINK,
    },

    source: process.env.NODE_ENV === "production" ? "website-prod" : "website-local",
  });
}

// 2) 1-day reminder (template: {{1}} {{2}} {{3}} {{4}} => name, webinarDate, webinarDay, webinarTime)
export async function send1DayReminder({ name, phone10, webinarDate, webinarDay, webinarTime }) {
  return callAisensy({
    apiKey: process.env.AISENSY_API_KEY,
    campaignName: process.env.AISENSY_CAMPAIGN_1DAY,
    destination: to91(phone10),
    userName: name,
    templateParams: [name, webinarDate, webinarDay, webinarTime],
    tags: [process.env.AISENSY_TAG_LEAD || "webinar_lead"],
    source: "cron",
  });
}

// 3) 10-min reminder (template: {{1}} {{2}} {{3}} {{4}} {{5}} => name,date,day,time,link)
export async function send10MinReminder({ name, phone10, webinarDate, webinarDay, webinarTime }) {
  return callAisensy({
    apiKey: process.env.AISENSY_API_KEY,
    campaignName: process.env.AISENSY_CAMPAIGN_10MIN,
    destination: to91(phone10),
    userName: name,
    templateParams: [name, webinarDate, webinarDay, webinarTime],
    tags: [process.env.AISENSY_TAG_LEAD || "webinar_lead"],
    source: "cron",
  });
}

// 4) Live now (template: {{1}} {{2}} {{3}} {{4}} {{5}} => name,date,day,time,link)
export async function sendLiveNow({ name, phone10, webinarDate, webinarDay, webinarTime }) {
  return callAisensy({
    apiKey: process.env.AISENSY_API_KEY,
    campaignName: process.env.AISENSY_CAMPAIGN_LIVE,
    destination: to91(phone10),
    userName: name,
    templateParams: [name, webinarDate, webinarDay, webinarTime],
    tags: [process.env.AISENSY_TAG_LEAD || "webinar_lead"],
    source: "cron",
  });
}
