"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";

const KEY = "nextora-cookie-choice";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem(KEY);
      if (!choice) setVisible(true);
    } catch {
      // localStorage might be blocked; just show banner
      setVisible(true);
    }
  }, []);

  const decide = (choice: "accept" | "reject") => {
    try {
      localStorage.setItem(KEY, choice);
    } catch {
      /* noop */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Box
      role="dialog"
      aria-label="Cookie preferences"
      aria-live="polite"
      sx={{
        position: "fixed",
        left: { xs: "12px", md: "24px" },
        right: { xs: "12px", md: "24px" },
        bottom: { xs: "92px", md: "24px" }, // clear mobile sticky CTA
        zIndex: 95,
        maxWidth: 540,
        mx: "auto",
        p: { xs: "16px", md: "24px" },
        background: "rgba(255,255,255,0.92)",
        border: "1px solid var(--grey-2)",
        borderRadius: "20px",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { md: "center" },
        gap: { xs: "16px", md: "20px" },
      }}
    >
      <Box sx={{ flex: 1, fontSize: 14, color: "var(--ink)", lineHeight: 1.55 }}>
        We use a tiny amount of data to keep this site fast and useful. Optional
        analytics are off until you accept.{" "}
        <Box component={Link} href="/privacy" sx={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
          Learn more
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "8px", flexShrink: 0 }}>
        <Box
          component="button"
          type="button"
          onClick={() => decide("reject")}
          sx={{
            px: "16px",
            py: "10px",
            minHeight: 40,
            borderRadius: "999px",
            border: "1px solid var(--grey-2)",
            background: "transparent",
            color: "var(--ink)",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "background 200ms ease-out, border-color 200ms ease-out",
            "&:hover": { background: "var(--surface)", borderColor: "var(--ink)" },
          }}
        >
          Reject
        </Box>
        <Box
          component="button"
          type="button"
          onClick={() => decide("accept")}
          sx={{
            px: "16px",
            py: "10px",
            minHeight: 40,
            borderRadius: "999px",
            border: "none",
            background: "var(--accent)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "background 200ms ease-out",
            "&:hover": { background: "var(--accent-hi)" },
          }}
        >
          Accept
        </Box>
      </Box>
    </Box>
  );
}
