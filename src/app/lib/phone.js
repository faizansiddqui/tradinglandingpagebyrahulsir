// src/app/lib/phone.js
export function cleanPhone10(input) {
  let p = String(input || "").trim();
  p = p.replace(/[^\d]/g, ""); // remove + - spaces etc

  // remove country code if present
  if (p.startsWith("91") && p.length > 10) p = p.slice(2);

  // remove leading zeros (091xxxx / 0xxxx)
  p = p.replace(/^0+/, "");

  if (p.length !== 10) {
    throw new Error("Invalid phone number. Must be 10 digits.");
  }
  return p;
}

export function to91(input) {
  return `91${cleanPhone10(input)}`;
}