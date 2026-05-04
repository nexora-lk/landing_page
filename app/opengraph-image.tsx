import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nextora Infotech — Engineering for what’s next";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: 80,
          background:
            "linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 70%, #FFFFFF 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Soft accent glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: 200,
            width: 800,
            height: 800,
            borderRadius: 9999,
            background:
              "radial-gradient(closest-side, rgba(0,113,227,0.30), transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 32,
            position: "relative",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 9999, background: "#0071E3" }} />
          <span style={{ fontSize: 28, fontWeight: 600, color: "#1D1D1F", letterSpacing: "-0.01em" }}>
            Nextora Infotech
          </span>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#1D1D1F",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            marginBottom: 24,
            position: "relative",
            maxWidth: 1000,
          }}
        >
          Engineering for{" "}
          <span style={{ color: "#0071E3" }}>what’s next.</span>
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#6E6E73",
            fontWeight: 400,
            maxWidth: 800,
            position: "relative",
          }}
        >
          The engineering partner ambitious founders trust to ship web, mobile
          and AI products — fast, fixed-price, built to scale.
        </div>
      </div>
    ),
    { ...size }
  );
}
