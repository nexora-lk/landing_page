"use client";

import Link from "next/link";
import Box from "@mui/material/Box";

export default function MobileStickyCTA() {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 90,
        display: { xs: "block", md: "none" },
        px: "16px",
        pt: "12px",
        pb: "max(16px, env(safe-area-inset-bottom))",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.92) 30%)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
      }}
    >
      <Box
        component={Link}
        href="/contact"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
          minHeight: 48,
          px: "20px",
          py: "14px",
          borderRadius: "999px",
          background: "var(--accent)",
          color: "#fff",
          fontSize: 17,
          fontWeight: 500,
          textDecoration: "none",
          boxShadow: "0 4px 16px rgba(0,113,227,0.25)",
        }}
      >
        Book a free call →
      </Box>
    </Box>
  );
}
