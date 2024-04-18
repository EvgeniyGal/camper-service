export function nameCheck(name) {
  if (!name) {
    return "Name is required";
  }
  if (name.length < 3) {
    return "Name must be at least 3 characters long";
  }
  return "";
}

export function emailCheck(email) {
  if (!email) {
    return "Email is required";
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return "Invalid email address";
  }
  return "";
}

export function bookingDateCheck(bookingDate) {
  if (!bookingDate) {
    return "Booking date is required";
  }
  return "";
}
