// src/app/lib/aisensy.js

import { getNextWebinarDate } from "./webinar";

const webinarLink = "https://your-webinar-link.com"; // 🔴 PUT YOUR REAL LINK

export async function sendWhatsApp({ name, phone, email }) {
  const webinarDate = getNextWebinarDate();

  const webinarDateISO = webinarDate.toISOString();

  const webinarDay = webinarDate.toLocaleDateString("en-IN", {
    weekday: "long",
  });

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

  const response = await fetch(
    "https://backend.aisensy.com/campaign/t1/api",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiKey: process.env.AISENSY_API_KEY,
        campaignName: "Form Submission Confirmation Campaign",

        // Always send with 91
        destination: phone.startsWith("91") ? phone : `91${phone}`,
        userName: name,

        // For template placeholders ({{1}}, {{2}}, {{3}})
        templateParams: [
          name,
          email,
          phone
        ],

        // 🔥 TAG FOR FILTERING
        tags: ["webinar_lead"],

        // 🔥 CORRECT CUSTOM ATTRIBUTES (NO UNDERSCORES)
        attributes: {
          email: email,
          webinarDay: webinarDay,
          webinarDate: webinarDateText,
          webinarTime: webinarTime,
          webinarDatetime: webinarDateISO,
          webinarLink: webinarLink,
        },

        source:
          process.env.NODE_ENV === "production"
            ? "website-prod"
            : "website-local",
      }),
    }
  );

  const text = await response.text();

  if (text.toLowerCase().includes("success")) {
    return { status: "success" };
  }

  throw new Error("AiSensy failed: " + text);
}
