import { appointmentTreatments, normalizePhone } from "@/lib/appointment";

// Google Apps Script web app that stores each request in the clinic's own Google Sheet and emails the clinic.
// Set NEXT_PUBLIC_CALLBACK_URL at build time. When it is empty the callback form is not shown.
export const callbackEndpoint = process.env.NEXT_PUBLIC_CALLBACK_URL ?? "";

export const callbackTimes = [
  ["any", "Any time"],
  ["morning", "Morning"],
  ["afternoon", "Afternoon"],
  ["evening", "Evening"],
] as const;

export type CallbackRequest = { name: string; phone: string; bestTime: string; service: string };
export type CallbackErrors = Partial<Record<"name" | "phone", string>>;

export function validateCallback(state: CallbackRequest): CallbackErrors {
  const errors: CallbackErrors = {};
  if (!state.name.trim()) errors.name = "Please enter your name.";
  if (!/^[6-9]\d{9}$/.test(normalizePhone(state.phone))) errors.phone = "Enter a 10-digit Indian mobile number, with or without +91.";
  return errors;
}

function tag(value: string | null) {
  return (value ?? "").replace(/[^\w.\-]/g, "").slice(0, 60);
}

// Sends the request and resolves true only when the clinic's sheet confirms it stored the request.
export async function sendCallback(state: CallbackRequest, honeypot: string, elapsedMs: number): Promise<boolean> {
  if (!callbackEndpoint) return false;
  const params = new URLSearchParams(window.location.search);
  const payload = {
    name: state.name.trim(),
    phone: normalizePhone(state.phone),
    bestTime: state.bestTime || "any",
    service: appointmentTreatments.find(([key]) => key === state.service)?.[1] ?? "",
    page: window.location.pathname,
    source: tag(params.get("utm_source")),
    campaign: tag(params.get("utm_campaign")),
    website: honeypot,
    elapsedMs,
  };
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 15000);
  try {
    // No custom headers: text/plain keeps this a simple cross-origin request that Apps Script accepts.
    const response = await fetch(callbackEndpoint, { method: "POST", body: JSON.stringify(payload), signal: controller.signal });
    const result = (await response.json()) as { ok?: boolean };
    return result.ok === true;
  } catch {
    return false;
  } finally {
    window.clearTimeout(timer);
  }
}
