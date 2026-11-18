"use client";

import { useEffect } from "react";

type ContactEvent = "call_click" | "whatsapp_open" | "directions_click" | "appointment_click" | "appointment_form_start" | "callback_form_start" | "callback_request";
const sources = ["link", "appointment_form", "callback_form", "hero", "header", "footer", "mobile_bar", "floating", "service", "location"] as const;
type ContactSource = (typeof sources)[number];
type AnalyticsWindow = Window & { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };

// Only interaction metadata: never pass form values or destination URLs.
export function trackContactIntent(event: ContactEvent, source: ContactSource) {
  const analytics = window as AnalyticsWindow;
  analytics.dataLayer ??= [];
  // gtag.js requires the `arguments` object itself on the dataLayer; a rest-parameter array is ignored.
  // eslint-disable-next-line prefer-rest-params
  analytics.gtag ??= function () { analytics.dataLayer!.push(arguments); };
  analytics.gtag("event", event, {
    send_to: "G-T5F2QL12ZV",
    contact_source: source,
    page_location: window.location.origin + window.location.pathname,
  });
}

export function ContactAnalytics() {
  useEffect(() => {
    function trackLink(event: MouseEvent) {
      if (event.defaultPrevented || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const rawSource = link.closest<HTMLElement>("[data-contact-source]")?.dataset.contactSource;
      const source = sources.includes(rawSource as ContactSource) ? rawSource as ContactSource : "link";
      if (link.protocol === "tel:") trackContactIntent("call_click", source);
      else if (link.protocol === "https:" && link.hostname === "wa.me") trackContactIntent("whatsapp_open", source);
      else if (link.dataset.contactAction === "directions") trackContactIntent("directions_click", source);
      else if (link.origin === window.location.origin && /^\/contact\/?$/.test(link.pathname) && link.hash === "#book") trackContactIntent("appointment_click", source);
    }
    // Capture runs before Next Link prevents default browser navigation.
    document.addEventListener("click", trackLink, true);
    return () => document.removeEventListener("click", trackLink, true);
  }, []);
  return null;
}
