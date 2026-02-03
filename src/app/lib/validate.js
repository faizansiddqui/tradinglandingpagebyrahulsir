// src/app/lib/validate.js
import { cleanPhone10 } from "./phone";

export function validateForm(body) {
  if (!body?.name || body.name.trim().length < 2) {
    throw new Error("Name is required (min 2 chars).");
  }

  if (!body?.email || !/^\S+@\S+\.\S+$/.test(body.email)) {
    throw new Error("Valid email is required.");
  }

  // ✅ Normalize phone here
  const phone10 = cleanPhone10(body.phone);

  // ✅ Return normalized values so route.js can use it directly
  return {
    ...body,
    name: body.name.trim(),
    email: body.email.trim().toLowerCase(),
    phone: phone10, // always 10 digit now
  };
}
