import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sharon Physiotherapy & Rehabilitation Center";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #134e4a 60%, #0d9488 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(13,148,136,0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "rgba(13,148,136,0.10)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 80px",
            gap: 0,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              background: "rgba(13,148,136,0.30)",
              border: "1px solid rgba(13,148,136,0.6)",
              borderRadius: 999,
              padding: "8px 24px",
              marginBottom: 28,
            }}
          >
            <span style={{ color: "#5eead4", fontSize: 18, fontWeight: 600, letterSpacing: 1 }}>
              {"Madurai's Trusted Physiotherapy Clinic"}
            </span>
          </div>

          {/* Clinic name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: -1,
            }}
          >
            Sharon Physiotherapy
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#5eead4",
              marginBottom: 32,
            }}
          >
            & Rehabilitation Center
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              color: "#94a3b8",
              maxWidth: 700,
              lineHeight: 1.5,
              marginBottom: 48,
            }}
          >
            Expert neurological & orthopedic physiotherapy with 14+ years of clinical excellence
          </div>

          {/* Pills */}
          <div style={{ display: "flex", gap: 16 }}>
            {["Stroke Rehab", "Sports Injury", "Back & Neck Pain", "Women's Health"].map((label) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 999,
                  padding: "10px 20px",
                  color: "#e2e8f0",
                  fontSize: 16,
                  fontWeight: 500,
                  display: "flex",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            color: "#475569",
            fontSize: 18,
            display: "flex",
          }}
        >
          sharonphysio.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
