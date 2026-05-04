"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <Box
      component="button"
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      sx={{
        position: "fixed",
        bottom: { xs: "84px", md: "32px" }, // clear mobile sticky CTA
        right: { xs: "16px", md: "32px" },
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.9)",
        border: "1px solid var(--grey-2)",
        backdropFilter: "blur(12px) saturate(160%)",
        WebkitBackdropFilter: "blur(12px) saturate(160%)",
        color: "var(--ink)",
        fontSize: 18,
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        zIndex: 80,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 240ms ease-out, transform 240ms ease-out, background 240ms",
        "&:hover": { background: "#fff", color: "var(--accent)" },
      }}
    >
      ↑
    </Box>
  );
}
