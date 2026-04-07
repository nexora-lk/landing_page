"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";

const floatingCards = [
  { icon: "⚡", label: "Deploy", sub: "12ms latency", pos: { top: "10%", left: "-20px" }, delay: 0 },
  { icon: "🧠", label: "AI Model", sub: "99.9% uptime", pos: { top: "45%", right: "-30px" }, delay: -2 },
  { icon: "🔒", label: "Secure", sub: "SOC 2 Type II", pos: { bottom: "15%", left: "10%" }, delay: -4 },
];

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.4)
        .fromTo(".hero-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, 0.55)
        .fromTo(".hero-sub", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.7)
        .fromTo(".hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.85)
        .fromTo(".hero-visual", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.1 }, 0.5);
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      component="header"
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        pt: { xs: "100px", md: "120px" },
        pb: "80px",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        {/* Grid overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        {/* Mesh blobs */}
        {[
          { w: 600, h: 600, bg: "var(--accent)", top: "-100px", left: "-150px", delay: "0s" },
          { w: 500, h: 500, bg: "var(--accent-2)", top: "20%", right: "-100px", delay: "-6s" },
          { w: 400, h: 400, bg: "var(--accent-3)", bottom: "-100px", left: "30%", delay: "-12s" },
        ].map((m, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: m.w,
              height: m.h,
              borderRadius: "50%",
              background: m.bg,
              filter: "blur(120px)",
              opacity: i === 2 ? 0.3 : 0.55,
              animation: `mesh-float 18s ease-in-out infinite`,
              animationDelay: m.delay,
              ...{ top: m.top, left: m.left, right: m.right, bottom: m.bottom },
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" }, position: "relative", zIndex: 2, width: "100%" }} ref={contentRef}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.9fr" },
            gap: { xs: "40px", md: "60px" },
            alignItems: "center",
          }}
        >
          {/* Left: copy */}
          <Box>
            {/* Badge */}
            <Box
              className="hero-badge"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                px: "16px",
                py: "8px",
                borderRadius: "100px",
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.25)",
                fontSize: 13,
                color: "var(--accent)",
                mb: "28px",
                fontWeight: 500,
                opacity: 0,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 10px var(--accent)",
                  animation: "badge-pulse 2s infinite",
                }}
              />
              Now shipping AI-native infrastructure
            </Box>

            {/* H1 */}
            <Box
              component="h1"
              className="hero-title"
              sx={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(48px, 7vw, 96px)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.035em",
                mb: "28px",
                opacity: 0,
              }}
            >
              We Build <br />What&apos;s{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 60%, var(--accent-3) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Next
              </Box>
              .
            </Box>

            {/* Subtitle */}
            <Box
              component="p"
              className="hero-sub"
              sx={{ fontSize: 20, color: "var(--muted)", maxWidth: 560, mb: "40px", fontWeight: 300, opacity: 0 }}
            >
              Nextora is the engineering partner for companies reinventing how they operate — cloud, AI, and custom software built with relentless craft.
            </Box>

            {/* CTAs */}
            <Box className="hero-ctas" sx={{ display: "flex", gap: "16px", flexWrap: "wrap", opacity: 0 }}>
              <Box
                component={Link}
                href="/contact"
                sx={{
                  px: "30px",
                  py: "16px",
                  borderRadius: "100px",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "var(--text)",
                  color: "#000",
                  border: "1px solid transparent",
                  boxShadow: "0 10px 40px rgba(0,212,255,0.2)",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 20px 60px rgba(0,212,255,0.4)",
                    background: "var(--accent)",
                  },
                }}
              >
                Get Started <Box component="span" sx={{ transition: "transform 0.3s", "&:hover": { transform: "translateX(4px)" } }}>→</Box>
              </Box>
              <Box
                component={Link}
                href="/work"
                sx={{
                  px: "30px",
                  py: "16px",
                  borderRadius: "100px",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  "&:hover": {
                    borderColor: "var(--accent)",
                    color: "var(--accent)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                View Our Work
              </Box>
            </Box>
          </Box>

          {/* Right: visual */}
          <Box
            className="hero-visual"
            sx={{
              position: "relative",
              height: { xs: "320px", sm: "400px", md: "500px" },
              opacity: 0,
              order: { xs: -1, md: 0 },
            }}
          >
            {/* Rings */}
            {[
              { size: 320, color: "rgba(0,212,255,0.3)", dur: "20s", dir: "normal" },
              { size: 440, color: "rgba(124,92,255,0.2)", dur: "30s", dir: "reverse" },
              { size: 560, color: "rgba(255,255,255,0.05)", dur: "none", dir: "normal" },
            ].map((r, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: i === 0 ? 220 : i === 1 ? 300 : 0, md: r.size },
                  height: { xs: i === 0 ? 220 : i === 1 ? 300 : 0, md: r.size },
                  borderRadius: "50%",
                  border: `1px solid ${r.color}`,
                  display: i === 2 ? { xs: "none", md: "block" } : "block",
                  animation: r.dur !== "none" ? `ring-spin ${r.dur} linear infinite ${r.dir}` : "none",
                }}
              />
            ))}

            {/* Orb */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                margin: "auto",
                width: { xs: 240, md: 360 },
                height: { xs: 240, md: 360 },
                borderRadius: "50%",
                background: "radial-gradient(circle at 30% 30%, var(--accent) 0%, var(--accent-2) 40%, transparent 70%)",
                filter: "blur(2px)",
                opacity: 0.85,
                animation: "orb-orbit 8s ease-in-out infinite",
              }}
            />

            {/* Floating stat cards */}
            {floatingCards.map((card) => (
              <Box
                key={card.label}
                sx={{
                  position: "absolute",
                  px: "20px",
                  py: "16px",
                  background: "rgba(15,15,23,0.8)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  fontSize: 13,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                  animation: `card-float 6s ease-in-out infinite`,
                  animationDelay: `${card.delay}s`,
                  ...card.pos,
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 16,
                  }}
                >
                  {card.icon}
                </Box>
                <Box>
                  <Box component="strong" sx={{ display: "block" }}>{card.label}</Box>
                  <Box component="span" sx={{ color: "var(--muted)" }}>{card.sub}</Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}