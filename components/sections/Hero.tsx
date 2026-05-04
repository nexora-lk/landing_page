"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Subtle pointer parallax — desktop only, fine pointer, respects reduced-motion.
  useEffect(() => {
    const el = heroRef.current;
    const target = parallaxRef.current;
    if (!el || !target) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width - 0.5;   // -0.5 … 0.5
      const cy = (e.clientY - r.top)  / r.height - 0.5;
      tx = cx * 14;
      ty = cy * 10;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        target.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Box
      component="header"
      id="hero"
      ref={heroRef}
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "92vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        pt: { xs: "104px", md: "160px" },
        pb: { xs: "80px", md: "160px" },
        background:
          "linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 55%, #FFFFFF 100%)",
      }}
    >
      {/* ── Layered, soft glow stack ─────────────────────────────── */}
      <Box
        ref={parallaxRef}
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
        }}
      >
        {/* Primary breathing glow — centered top */}
        <Box
          sx={{
            position: "absolute",
            top: "-15%",
            left: "50%",
            width: { xs: "120vw", md: "1100px" },
            height: { xs: "120vw", md: "1100px" },
            maxWidth: "none",
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(0,113,227,0.40), rgba(0,113,227,0.12) 45%, transparent 72%)",
            filter: "blur(30px)",
            animation: "hero-breathe 9s ease-in-out infinite",
            willChange: "transform, opacity",
          }}
        />
        {/* Secondary cool tint — left */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "-10%",
            width: { xs: "80vw", md: "640px" },
            height: { xs: "80vw", md: "640px" },
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(82,148,255,0.32), transparent 70%)",
            filter: "blur(50px)",
            animation: "hero-drift-1 14s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        {/* Soft warm wash — bottom right (very subtle) */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-10%",
            right: "-8%",
            width: { xs: "70vw", md: "560px" },
            height: { xs: "70vw", md: "560px" },
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(122,176,255,0.28), transparent 70%)",
            filter: "blur(60px)",
            animation: "hero-drift-2 16s ease-in-out infinite",
            willChange: "transform",
          }}
        />
      </Box>

      {/* Hairline at the bottom of the section, very faint */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* ── Content ──────────────────────────────────────────────── */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: "24px", md: "48px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Eyebrow chip — frosted */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              px: "14px",
              py: "6px",
              mb: { xs: "28px", md: "36px" },
              borderRadius: "999px",
              background: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(0,0,0,0.08)",
              backdropFilter: "blur(12px) saturate(140%)",
              WebkitBackdropFilter: "blur(12px) saturate(140%)",
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
              fontSize: { xs: 12, md: 13 },
              fontWeight: 500,
              color: "var(--ink)",
              maxWidth: "calc(100vw - 48px)",
              whiteSpace: "nowrap",
              animation:
                "hero-fade-up 800ms cubic-bezier(0.22, 1, 0.36, 1) 80ms both",
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 10px rgba(0,113,227,0.55)",
                flexShrink: 0,
              }}
            />
            <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>IT startup · </Box>
            Building products globally
          </Box>

          {/* Headline */}
          <Box
            component="h1"
            sx={{
              fontFamily:
                "var(--font-inter), Inter, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
              fontSize: { xs: "40px", sm: "60px", md: "84px", lg: "96px" },
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.04,
              color: "var(--ink)",
              maxWidth: 980,
              margin: 0,
              mb: { xs: "20px", md: "28px" },
            }}
          >
            <Box
              component="span"
              sx={{
                display: "block",
                animation:
                  "hero-fade-up 1000ms cubic-bezier(0.22, 1, 0.36, 1) 220ms both",
              }}
            >
              Engineering for
            </Box>
            <Box
              component="span"
              sx={{
                display: "block",
                animation:
                  "hero-fade-up 1000ms cubic-bezier(0.22, 1, 0.36, 1) 360ms both",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "var(--accent)",
                  // Very subtle text glow — soft, not neon
                  textShadow:
                    "0 0 28px rgba(0,113,227,0.18), 0 0 1px rgba(0,113,227,0.25)",
                }}
              >
                what’s next.
              </Box>
            </Box>
          </Box>

          {/* Subhead */}
          <Box
            component="p"
            sx={{
              color: "var(--grey-1)",
              fontSize: { xs: 17, md: 19 },
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: 600,
              margin: 0,
              mb: { xs: "40px", md: "56px" },
              animation:
                "hero-fade-up 1000ms cubic-bezier(0.22, 1, 0.36, 1) 520ms both",
            }}
          >
            Nextora Infotech is the engineering partner ambitious founders
            trust to ship web, mobile and AI products — fast, fixed-price,
            built to scale.
          </Box>

          {/* CTAs */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "12px", md: "20px" },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: 320, sm: "none" },
              mx: { xs: "auto", sm: 0 },
              animation:
                "hero-fade-up 1000ms cubic-bezier(0.22, 1, 0.36, 1) 680ms both",
            }}
          >
            <Box
              component={Link}
              href="/contact"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                px: "28px",
                py: "14px",
                borderRadius: "999px",
                background: "var(--accent)",
                color: "#fff",
                fontSize: 17,
                fontWeight: 500,
                textDecoration: "none",
                minHeight: 48,
                width: { xs: "100%", sm: "auto" },
                position: "relative",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.4) inset, 0 6px 20px rgba(0,113,227,0.30), 0 2px 6px rgba(0,113,227,0.18)",
                transition:
                  "transform 240ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 240ms ease-out, background 240ms ease-out",
                "&:hover": {
                  background: "var(--accent-hi)",
                  transform: "translateY(-1px) scale(1.015)",
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.4) inset, 0 10px 30px rgba(0,113,227,0.36), 0 4px 10px rgba(0,113,227,0.22)",
                },
                "&:active": { transform: "translateY(0) scale(0.99)" },
              }}
            >
              Book a free call
              <Box component="span" sx={{ fontSize: 17, lineHeight: 1 }}>→</Box>
            </Box>

            <Box
              component={Link}
              href="/work"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                px: "12px",
                py: "14px",
                color: "var(--accent)",
                fontSize: 17,
                fontWeight: 500,
                textDecoration: "none",
                minHeight: 48,
                transition: "color 240ms ease-out",
                "&:hover": {
                  color: "var(--accent-hi)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                },
              }}
            >
              View our work →
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
