import { NextResponse } from "next/server";
import { sendWhatsApp } from "../../lib/aisensy";
import { validateForm } from "../../lib/validate";
import { saveToSheet } from "../../lib/googleSheet";

export async function POST(req) {
    try {
        const body = await req.json();

        validateForm(body);

        // Remove country code from phone number
        let cleanPhone = body.phone;
        if (cleanPhone.startsWith("91")) {
            cleanPhone = cleanPhone.substring(2);
        } else if (cleanPhone.startsWith("+91")) {
            cleanPhone = cleanPhone.substring(3);
        }

        await saveToSheet({
            name: body.name,
            email: body.email,
            phone: cleanPhone, // Save without country code
            source:
                process.env.NODE_ENV === "production"
                    ? "website-prod"
                    : "website-local",
        });

        // Send WhatsApp template message without country code
        await sendWhatsApp({
            name: body.name,
            phone: cleanPhone, // Send without country code
            email: body.email,
        });

        return NextResponse.json({
            success: true,
            message: "Form submitted successfully!",
        });
    } catch (error) {
        console.error("❌ API Error:", error);

        return NextResponse.json(
            {
                success: false,
                message:
                    error.message || "Failed to submit form. Please try again.",
            },
            { status: 400 }
        );
    }
}
