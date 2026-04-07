"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    slug: "velocity-ledger",
    gradient: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
    tag: "FinTech · Platform",
    title: "Velocity Ledger",
    desc: "Real-time settlement engine processing 4M transactions daily.",
  },
  {
    slug: "orbit-intelligence",
    gradient: "linear-gradient(135deg, var(--accent-2) 0%, var(--accent-3) 100%)",
    tag: "AI · SaaS",
    title: "Orbit Intelligence",
    desc: "Agentic research copilot deployed across 40+ enterprise teams.",
  },
  {
    slug: "pulse-cloud",
    gradient: "linear-gradient(135deg, var(--accent-3) 0%, var(--accent) 100%)",
    tag: "Health · Infra",
    title: "Pulse Cloud",
    desc: "HIPAA-compliant data mesh serving 200+ hospital networks.",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".work-reveal", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      component="section"
      id="work"
      ref={sectionRef}
      sx={{ py: { xs: "80px", md: "120px" }, position: "relative" }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
        <Box
          className="work-reveal"
          component="span"
          sx={{
            fontSize: 13,
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontWeight: 600,
            mb: "16px",
            display: "block",
          }}
        >
          Featured work
        </Box>
        <Box
          className="work-reveal"
          component="h2"
          sx={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            mb: "24px",
          }}
        >
          Selected builds from
          <br />
          the last 12 months.
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: "24px",
            mt: "40px",
          }}
        >
          {projects.map((p) => (
            <Box
              key={p.slug}
              component={Link}
              href={`/work/${p.slug}`}
              className="work-reveal"
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                aspectRatio: "4/5",
                textDecoration: "none",
                color: "inherit",
                display: "block",
                backdropFilter: "blur(20px)",
                transition: "all 0.5s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "var(--border-hi)",
                },
              }}
            >
              {/* Color block image */}
              <Box
                sx={{
                  height: "60%",
                  position: "relative",
                  overflow: "hidden",
                  background: p.gradient,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(rgba(var(--text-rgb),0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--text-rgb),0.08) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                    mixBlendMode: "overlay",
                  },
                }}
              />
              <Box sx={{ p: "28px" }}>
                <Box
                  sx={{
                    fontSize: 12,
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontWeight: 600,
                    mb: "10px",
                  }}
                >
                  {p.tag}
                </Box>
                <Box
                  component="h3"
                  sx={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 22,
                    fontWeight: 600,
                    mb: "8px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.title}
                </Box>
                <Box component="p" sx={{ color: "var(--muted)", fontSize: 14 }}>
                  {p.desc}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
