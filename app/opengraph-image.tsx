import { ImageResponse } from "next/og";
import { tokens } from "@/components/ui/ThemeRegistry";

export const runtime = "edge";
export const alt = "Nextora — We Build What's Next";
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
          padding: "80px",
          background: `linear-gradient(135deg, ${tokens.bg} 0%, ${tokens.bgPaper} 50%, ${tokens.bgDeep} 100%)`,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.accent2})` }} />
          <span style={{ fontSize: 32, fontWeight: 700, color: tokens.text, letterSpacing: "-0.02em" }}>Nextora</span>
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, color: tokens.text, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24 }}>
          We Build What&apos;s Next.
        </div>
        <div style={{ fontSize: 24, color: tokens.muted, fontWeight: 300, maxWidth: 720 }}>
          Engineering partner for cloud, AI, and custom software — built with relentless craft.
        </div>
      </div>
    ),
    { ...size }
  );
}
