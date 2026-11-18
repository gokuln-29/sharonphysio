export const appointmentTreatments = [
  ["back", "Back & Neck Pain Physiotherapy"],
  ["stroke", "Stroke Rehabilitation"],
  ["sports", "Sports Injury Rehabilitation"],
  ["knee", "Knee Pain Physiotherapy"],
  ["post-surgery", "Post Surgery Rehabilitation"],
  ["cp", "Cerebral Palsy Management"],
  ["arthritis", "Arthritis Treatment"],
  ["women", "Women’s Fitness Care"],
  ["manual", "Manual Therapy"],
  ["other", "Other / I’m not sure"],
] as const;

export type Appointment = { name: string; phone: string; treatment: string; preferredDate: string; preferredSlot: string; message: string };

export function clinicToday(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
  const get = (type: string) => parts.find(part => part.type === type)!.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

export function normalizePhone(value: string) {
  const digits = value.replace(/[\s()+-]/g, "");
  return digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
}

export function validateAppointment(state: Appointment, today = clinicToday()) {
  const errors: Partial<Record<keyof Appointment, string>> = {};
  if (!state.name.trim()) errors.name = "Please enter your name.";
  if (!/^[6-9]\d{9}$/.test(normalizePhone(state.phone))) errors.phone = "Enter a 10-digit Indian mobile number, with or without +91.";
  if (state.preferredDate) {
    const date = new Date(`${state.preferredDate}T12:00:00+05:30`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(state.preferredDate) || Number.isNaN(date.getTime()) || clinicToday(date) !== state.preferredDate || state.preferredDate < today) errors.preferredDate = "Choose today or a future date.";
    else if (date.getUTCDay() === 0) errors.preferredDate = "Please choose Monday to Saturday. Call for other availability.";
  }
  return errors;
}

export function appointmentMessage(state: Appointment) {
  const treatment = appointmentTreatments.find(([key]) => key === state.treatment)?.[1];
  return [
    "Hello Sharon Physiotherapy, I’d like to request an appointment.",
    `Name: ${state.name.trim()}`,
    `Phone: ${normalizePhone(state.phone)}`,
    treatment && `Service: ${treatment}`,
    state.preferredDate && `Preferred date: ${state.preferredDate}`,
    state.preferredSlot && `Preferred time: ${state.preferredSlot} (India time)`,
    state.message.trim() && `Scheduling note: ${state.message.trim()}`,
    "Please confirm availability.",
  ].filter(Boolean).join("\n");
}
