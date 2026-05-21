"use client";

import { useEffect } from "react";

export function TreatmentsRedirect() {
  useEffect(() => {
    window.location.replace("/services/");
  }, []);
  return null;
}
