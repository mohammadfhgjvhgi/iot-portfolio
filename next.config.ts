import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const baseConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: [
    "preview-chat-518fa825-5715-4686-99ba-06760c411d8a.space-z.ai",
  ],
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
  poweredByHeader: false,
  // Security headers for dev too
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https://*.githubusercontent.com; connect-src 'self' https://formspree.io https://integrate.api.nvidia.com https://plausible.io https://challenges.cloudflare.com https://esm.sh; frame-src https://challenges.cloudflare.com;",
          },
        ],
      },
    ];
  },
};

const nextConfig: NextConfig = isDev
  ? baseConfig
  : {
      ...baseConfig,
      output: "export" as const,
      basePath: "/iot-portfolio",
      distDir: "docs",
    };

export default nextConfig;
