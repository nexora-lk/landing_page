"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import { tokens, rgba } from "@/components/ui/ThemeRegistry";

const CircuitCanvas = dynamic(() => import("./CircuitCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  /* ── Mouse-follow glow (desktop, fine pointer only) ── */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse  = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    let raf = 0;
    let px = 0, py = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      px = e.clientX - rect.left - 250;
      py = e.clientY - rect.top  - 250;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${px}px, ${py}px, 0)`;
        }
      });
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* ── GSAP entrance ── */
  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".hero-title-line",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.12 }, 0.2)
       .fromTo(".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 }, 0.7)
       .fromTo(".hero-cta",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 0.9);
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      component="header"
      id="hero"
      ref={heroRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: "90px", md: "100px" },
        pb: { xs: "60px", md: "80px" },
      }}
    >
      {/* ── Background layers (full-bleed) ── */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <CircuitCanvas />

        <Box
          sx={{
            position: "absolute",
            width: 900,
            height: 900,
            background: `radial-gradient(circle, ${rgba(tokens.accentRgb, 0.08)} 0%, transparent 60%)`,
            top: "-30%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${rgba(tokens.accentRgb, 0.035)} 1px, transparent 1px), linear-gradient(90deg, ${rgba(tokens.accentRgb, 0.035)} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
          }}
        />

        <Box
          ref={glowRef}
          sx={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${rgba(tokens.accentRgb, 0.08)} 0%, transparent 70%)`,
            pointerEvents: "none",
            transition: "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
            willChange: "transform",
            display: { xs: "none", md: "block" },
          }}
        />
      </Box>

      {/* ── Centered content ── */}
      <Container
        maxWidth="md"
        sx={{ position: "relative", zIndex: 2, px: { xs: "20px", md: "32px" } }}
        ref={contentRef}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Headline */}
          <Box
            component="h1"
            sx={{
              fontFamily: "var(--font-syne), 'Syne', sans-serif",
              fontSize: { xs: "clamp(40px, 9vw, 56px)", md: "clamp(56px, 6.4vw, 92px)" },
              fontWeight: 800,
              letterSpacing: { xs: "-1.5px", md: "-3px" },
              lineHeight: { xs: 1.05, md: 0.96 },
              color: tokens.textSoft,
              mb: { xs: "24px", md: "32px" },
            }}
          >
            <Box component="span" className="hero-title-line" sx={{ display: "block", opacity: 0 }}>
              We build
            </Box>
            <Box
              component="span"
              className="hero-title-line"
              sx={{
                display: "block",
                opacity: 0,
                color: tokens.accent,
              }}
            >
              what&apos;s next.
            </Box>
          </Box>

          {/* Subhead */}
          <Box
            component="p"
            className="hero-sub"
            sx={{
              color: rgba(tokens.textRgb, 0.55),
              fontSize: { xs: 16, md: 18 },
              fontWeight: 300,
              maxWidth: 620,
              lineHeight: 1.7,
              mb: { xs: "36px", md: "44px" },
              opacity: 0,
            }}
          >
            We build your website — and make sure both Google and AI search
            (ChatGPT, Gemini, Perplexity) actually find it.
          </Box>

          {/* CTAs */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: "12px", md: "14px" },
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Box
              component={Link}
              href="/contact"
              className="hero-cta"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: tokens.accent,
                color: "#0A1120",
                fontFamily: "var(--font-syne), 'Syne', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                px: "24px",
                py: "12px",
                borderRadius: "980px",
                textDecoration: "none",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: 0,
                "&:hover": {
                  background: tokens.accentBr,
                },
              }}
            >
              Book a free 30-min call
              <Box component="span" sx={{ fontSize: 15, lineHeight: 1 }}>→</Box>
            </Box>

            <Box
              component={Link}
              href="/work"
              className="hero-cta"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "transparent",
                color: tokens.accent,
                fontFamily: "var(--font-syne), 'Syne', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                px: "12px",
                py: "12px",
                textDecoration: "none",
                transition: "color 0.25s",
                opacity: 0,
                "&:hover": {
                  color: tokens.accentBr,
                },
              }}
            >
              See our work
              <Box component="span" sx={{ fontSize: 15, lineHeight: 1 }}>→</Box>
            </Box>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
