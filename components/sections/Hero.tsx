"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import CircuitCanvas from "./CircuitCanvas";
import { tokens, rgba } from "@/components/ui/ThemeRegistry";

/* ── Floating glassmorphic tech badges ── */
const floatingBadges = [
  { icon: "☁", label: "Cloud", x: "8%",  y: "22%", anim: "float-badge-1", dur: "7s",  delay: "0s" },
  { icon: "◈", label: "AI",    x: "85%", y: "18%", anim: "float-badge-2", dur: "9s",  delay: "1s" },
  { icon: "❖", label: "Code",  x: "5%",  y: "68%", anim: "float-badge-3", dur: "11s", delay: "2s" },
  { icon: "⬢", label: "Secure",x: "88%", y: "72%", anim: "float-badge-4", dur: "8s",  delay: "0.5s" },
  { icon: "⚡", label: "Fast",  x: "15%", y: "45%", anim: "float-badge-2", dur: "10s", delay: "3s" },
  { icon: "◎", label: "Scale", x: "82%", y: "48%", anim: "float-badge-1", dur: "12s", delay: "1.5s" },
];

/* ── Bottom stats ── */
const heroStats = [
  { value: "2+",   label: "Projects Delivered" },
  { value: "100%", label: "Client Retention" },
  { value: "12",   label: "Countries Served" },
  { value: "24/7", label: "Support Available" },
];

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  /* ── Mouse-following glow ── */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!glowRef.current || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  /* ── GSAP cinematic reveal ── */
  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Decorative line
      tl.fromTo(
        ".hero-line",
        { width: 0, opacity: 0 },
        { width: 64, opacity: 1, duration: 0.6 },
        0.2
      )
      // Badge slides in
      .fromTo(
        ".hero-badge",
        { opacity: 0, y: 20, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
        0.3
      )
      // Title line 1 — mask reveal
      .fromTo(
        ".hero-title-line1",
        { opacity: 0, y: 60, filter: "blur(12px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 },
        0.5
      )
      // Title line 2 — gradient text
      .fromTo(
        ".hero-title-line2",
        { opacity: 0, y: 60, filter: "blur(12px)", scale: 0.96 },
        { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 1.0 },
        0.7
      )
      // Subtitle
      .fromTo(
        ".hero-sub",
        { opacity: 0, y: 30, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
        1.0
      )
      // CTAs
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 24, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12 },
        1.2
      )
      // Floating badges
      .fromTo(
        ".hero-float-badge",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
        1.0
      )
      // Stats bar
      .fromTo(
        ".hero-stat",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
        1.4
      )
      // Scroll indicator
      .fromTo(
        ".hero-scroll",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        1.8
      );
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: "100px", md: "110px" },
        pb: { xs: "40px", md: "50px" },
        cursor: "default",
      }}
    >
      {/* ── Background Layers ── */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <CircuitCanvas />

        {/* Aurora glow blobs — 3 colours */}
        <Box
          sx={{
            position: "absolute",
            width: 800,
            height: 800,
            background: `radial-gradient(circle, ${rgba(tokens.accentRgb, 0.15)} 0%, transparent 65%)`,
            top: "-25%",
            left: "-15%",
            animation: "aurora-pulse 8s ease-in-out infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 600,
            height: 600,
            background: `radial-gradient(circle, ${rgba(tokens.accent2Rgb, 0.12)} 0%, transparent 65%)`,
            top: "10%",
            right: "-10%",
            animation: "aurora-pulse 10s ease-in-out infinite 2s",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 500,
            height: 500,
            background: `radial-gradient(circle, ${rgba(tokens.accent3Rgb, 0.06)} 0%, transparent 65%)`,
            bottom: "-10%",
            left: "30%",
            animation: "aurora-pulse 12s ease-in-out infinite 4s",
          }}
        />

        {/* Grid overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${rgba(tokens.accentRgb, 0.035)} 1px, transparent 1px), linear-gradient(90deg, ${rgba(tokens.accentRgb, 0.035)} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
          }}
        />

        {/* Mouse-following glow */}
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

      {/* ── Floating Glassmorphic Tech Badges ── */}
      {floatingBadges.map((badge, i) => (
        <Box
          key={i}
          className="hero-float-badge"
          sx={{
            position: "absolute",
            left: badge.x,
            top: badge.y,
            zIndex: 1,
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            gap: "8px",
            px: "14px",
            py: "8px",
            borderRadius: "12px",
            background: rgba(tokens.textRgb, 0.04),
            backdropFilter: "blur(16px) saturate(150%)",
            WebkitBackdropFilter: "blur(16px) saturate(150%)",
            border: `1px solid ${rgba(tokens.textRgb, 0.08)}`,
            fontSize: 13,
            fontWeight: 500,
            color: rgba(tokens.textRgb, 0.5),
            letterSpacing: "0.02em",
            animation: `${badge.anim} ${badge.dur} ease-in-out infinite`,
            animationDelay: badge.delay,
            opacity: 0,
            transition: "border-color 0.3s, color 0.3s, box-shadow 0.3s",
            "&:hover": {
              borderColor: rgba(tokens.accentRgb, 0.3),
              color: tokens.accent,
              boxShadow: `0 0 20px ${rgba(tokens.accentRgb, 0.15)}`,
            },
          }}
        >
          <Box component="span" sx={{ fontSize: 16 }}>{badge.icon}</Box>
          {badge.label}
        </Box>
      ))}

      {/* ── Main Content ── */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 960,
          position: "relative",
          zIndex: 2,
          width: "100%",
          px: "0 !important",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={contentRef}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            px: { xs: "20px", md: 0 },
          }}
        >
          {/* Decorative accent line */}
          <Box
            className="hero-line"
            sx={{
              width: 64,
              height: "2px",
              background: `linear-gradient(90deg, ${tokens.accent}, ${tokens.accent2})`,
              borderRadius: "2px",
              mb: "24px",
              opacity: 0,
            }}
          />

          {/* Status badge */}
          <Box
            className="hero-badge"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: rgba(tokens.accentRgb, 0.08),
              border: `1px solid ${rgba(tokens.accentRgb, 0.2)}`,
              borderRadius: "100px",
              px: "18px",
              py: "8px",
              fontSize: 12,
              fontWeight: 600,
              color: tokens.accentBr,
              mb: "36px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: 0,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: tokens.accent,
                boxShadow: `0 0 8px ${tokens.accent}`,
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            Serving 12+ countries globally
          </Box>

          {/* ── H1 — Two-line kinetic title ── */}
          <Box
            component="h1"
            sx={{
              fontFamily: "var(--font-syne), 'Syne', sans-serif",
              fontSize: { xs: "clamp(44px, 10vw, 56px)", md: "clamp(64px, 7vw, 96px)" },
              fontWeight: 800,
              letterSpacing: { xs: "-1.5px", md: "-3px" },
              lineHeight: { xs: 1.05, md: 0.95 },
              mb: "28px",
              color: tokens.textSoft,
            }}
          >
            {/* Line 1 */}
            <Box
              component="span"
              className="hero-title-line1"
              sx={{ display: "block", opacity: 0 }}
            >
              We Build
            </Box>

            {/* Line 2 — Animated shimmer gradient */}
            <Box
              component="span"
              className="hero-title-line2"
              sx={{
                display: "block",
                opacity: 0,
                background: `linear-gradient(
                  90deg,
                  ${tokens.accent} 0%,
                  ${tokens.accentBr} 25%,
                  ${tokens.accent2} 50%,
                  ${tokens.accent3} 75%,
                  ${tokens.accent} 100%
                )`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer-text 4s linear infinite",
                mt: { xs: "4px", md: "0" },
              }}
            >
              What&apos;s Next
            </Box>
          </Box>

          {/* Subtitle */}
          <Box
            component="p"
            className="hero-sub"
            sx={{
              color: rgba(tokens.textRgb, 0.5),
              fontSize: { xs: 16, md: 19 },
              fontWeight: 300,
              maxWidth: 580,
              lineHeight: 1.75,
              mb: "44px",
              opacity: 0,
              letterSpacing: "0.01em",
            }}
          >
            Enterprise software, cloud infrastructure &amp; AI-powered automation
            — engineered for organisations that refuse to stand still.
          </Box>

          {/* ── CTAs ── */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: "12px", md: "16px" },
              flexWrap: "wrap",
              justifyContent: "center",
              mb: "60px",
            }}
          >
            {/* Primary CTA — Gradient glow */}
            <Box
              component={Link}
              href="/contact"
              className="hero-cta"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: `linear-gradient(135deg, ${tokens.accent}, ${tokens.accent2})`,
                color: tokens.bg,
                fontFamily: "var(--font-syne), 'Syne', sans-serif",
                fontSize: { xs: 14, md: 15 },
                fontWeight: 700,
                px: { xs: "24px", md: "32px" },
                py: { xs: "13px", md: "16px" },
                borderRadius: "100px",
                border: "none",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: `0 4px 20px ${rgba(tokens.accentRgb, 0.3)}`,
                opacity: 0,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    `linear-gradient(135deg, ${rgba(tokens.textRgb, 0.2)}, transparent 60%)`,
                  opacity: 0,
                  transition: "opacity 0.3s",
                },
                "&:hover": {
                  transform: "translateY(-3px) scale(1.02)",
                  boxShadow: `0 8px 40px ${rgba(tokens.accentRgb, 0.5)}, 0 0 80px ${rgba(tokens.accentRgb, 0.15)}`,
                  "&::before": { opacity: 1 },
                },
                "&:active": {
                  transform: "translateY(-1px) scale(0.99)",
                },
              }}
            >
              Start a Project
              <Box component="span" sx={{ fontSize: 18, lineHeight: 1 }}>→</Box>
            </Box>

            {/* Secondary CTA — Glass border */}
            <Box
              component={Link}
              href="/work"
              className="hero-cta"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: rgba(tokens.textRgb, 0.03),
                color: tokens.textSoft,
                fontFamily: "var(--font-syne), 'Syne', sans-serif",
                fontSize: { xs: 14, md: 15 },
                fontWeight: 600,
                px: { xs: "24px", md: "32px" },
                py: { xs: "12px", md: "15px" },
                borderRadius: "100px",
                border: `1px solid ${rgba(tokens.textRgb, 0.12)}`,
                textDecoration: "none",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: 0,
                "&:hover": {
                  background: rgba(tokens.textRgb, 0.08),
                  borderColor: rgba(tokens.accentRgb, 0.4),
                  boxShadow: `0 0 30px ${rgba(tokens.accentRgb, 0.12)}`,
                  transform: "translateY(-2px)",
                },
              }}
            >
              View Our Work
              <Box component="span" sx={{ fontSize: 14, opacity: 0.6 }}>↗</Box>
            </Box>
          </Box>
        </Box>

        {/* ── Social Proof Stats Bar ── */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: "20px", sm: "32px", md: "48px" },
            flexWrap: "wrap",
            p: { xs: "20px", md: "24px 40px" },
            borderRadius: "20px",
            background: rgba(tokens.textRgb, 0.025),
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: `1px solid ${rgba(tokens.textRgb, 0.06)}`,
            width: "fit-content",
            mx: "auto",
          }}
        >
          {heroStats.map((stat, i) => (
            <Box
              key={stat.label}
              className="hero-stat"
              sx={{
                textAlign: "center",
                opacity: 0,
                position: "relative",
                px: { xs: "8px", md: "12px" },
                "&::after": i < heroStats.length - 1 ? {
                  content: '""',
                  position: "absolute",
                  right: { xs: "-10px", sm: "-16px", md: "-24px" },
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "1px",
                  height: "28px",
                  background: rgba(tokens.textRgb, 0.1),
                  display: { xs: "none", sm: "block" },
                } : {},
              }}
            >
              <Box
                sx={{
                  fontFamily: "var(--font-syne)",
                  fontSize: { xs: 22, md: 26 },
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  background: `linear-gradient(135deg, ${tokens.text}, ${tokens.accent})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </Box>
              <Box
                sx={{
                  fontSize: { xs: 10, md: 11 },
                  color: rgba(tokens.textRgb, 0.35),
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: 500,
                  mt: "6px",
                }}
              >
                {stat.label}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* ── Scroll Indicator ── */}
      <Box
        className="hero-scroll"
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 32 },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0,
          animation: "scroll-hint 2.5s ease-in-out infinite",
          cursor: "pointer",
        }}
        onClick={() => {
          const target = document.getElementById("services");
          target?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 40,
            borderRadius: "12px",
            border: `1.5px solid ${rgba(tokens.textRgb, 0.2)}`,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              left: "50%",
              top: "8px",
              transform: "translateX(-50%)",
              width: 3,
              height: 8,
              borderRadius: "3px",
              background: rgba(tokens.accentRgb, 0.6),
              animation: "scroll-hint 2.5s ease-in-out infinite",
            },
          }}
        />
        <Box
          sx={{
            fontSize: 10,
            color: rgba(tokens.textRgb, 0.25),
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: 500,
          }}
        >
          Scroll
        </Box>
      </Box>
    </Box>
  );
}