export async function sendWhatsApp({ name, phone, email }) {
  const response = await fetch(
    "https://backend.aisensy.com/campaign/t1/api",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey: process.env.AISENSY_API_KEY,
        campaignName: "Form Submission Confirmation Campaign",
        destination: phone, // 91XXXXXXXXXX
        userName: name,
        templateParams: [
          name,
          email,
          phone
        ],
        source:
          process.env.NODE_ENV === "production"
            ? "website-prod"
            : "website-local",
      }),
    }
  );

  const text = await response.text(); // ✅ TEXT, not JSON

  if (!response.ok || !text.toLowerCase().includes("success")) {
    throw new Error(text || "AiSensy API failed");
  }

  return { success: true, raw: text };
}
