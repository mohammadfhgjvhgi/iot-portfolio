"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      // Detect basePath from current URL for production static export
      const basePath = window.location.pathname.startsWith("/iot-portfolio")
        ? "/iot-portfolio"
        : "";
      const swUrl = `${basePath}/sw.js`;

      navigator.serviceWorker
        .register(swUrl, { scope: basePath + "/" })
        .then((registration) => {
          console.log("SW registered:", registration.scope);
        })
        .catch((err) => {
          console.log("SW registration failed:", err);
        });
    }
  }, []);

  return null;
}
