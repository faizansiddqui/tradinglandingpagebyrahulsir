export function validateForm({ name, phone, email }) {
  if (!name || name.trim().length < 2) {
    throw new Error("Invalid name");
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    throw new Error("Invalid email address");
  }

  if (!phone || !/^\d{10}$/.test(phone)) {
    throw new Error("Invalid phone number. Must be 10 digits");
  }
}
