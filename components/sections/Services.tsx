"use client";

import { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "/ 01",
    icon: "☁",
    title: "Cloud Infrastructure",
    desc: "Multi-region Kubernetes, observability, and zero-downtime platforms designed for scale from day one.",
    href: "/services/cloud",
  },
  {
    num: "/ 02",
    icon: "◈",
    title: "AI & Automation",
    desc: "LLM pipelines, agentic workflows, and production-grade ML systems that ship real business outcomes.",
    href: "/services/ai",
  },
  {
    num: "/ 03",
    icon: "❖",
    title: "Custom Software",
    desc: "Bespoke platforms, internal tools, and full product builds engineered end-to-end by a senior team.",
    href: "/services",
  },
  {
    num: "/ 04",
    icon: "⬢",
    title: "Cybersecurity",
    desc: "Threat modeling, pen testing, and SOC 2 readiness programs that harden your stack end-to-end.",
    href: "/services",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".svc-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".svc-reveal",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      component="section"
      id="services"
      ref={sectionRef}
      sx={{ py: { xs: "80px", md: "120px" }, position: "relative" }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
        <Box
          className="svc-reveal"
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
          What we do
        </Box>
        <Box
          className="svc-reveal"
          component="h2"
          sx={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            mb: "24px",
            maxWidth: 720,
          }}
        >
          Infrastructure for the{" "}
          <Box component="span" sx={{ color: "var(--accent)" }}>
            next decade
          </Box>{" "}
          of software.
        </Box>
        <Box
          className="svc-reveal"
          component="p"
          sx={{
            fontSize: 18,
            color: "var(--muted)",
            maxWidth: 600,
            mb: "60px",
            fontWeight: 300,
          }}
        >
          Four practices. One integrated team. Shipped at the speed of a startup with the rigor of an enterprise.
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: "24px",
            mt: "40px",
          }}
        >
          {services.map((svc) => (
            <ServiceCard key={svc.num} {...svc} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function ServiceCard({ num, icon, title, desc, href }: (typeof services)[0]) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    cardRef.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Box
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="svc-reveal"
      sx={{
        borderRadius: "20px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(var(--accent-rgb),0.15), transparent 40%)",
          opacity: 0,
          transition: "opacity 0.5s",
          pointerEvents: "none",
        },
        "&:hover": {
          borderColor: "var(--border-hi)",
          transform: "translateY(-4px)",
          boxShadow: "0 30px 80px rgba(var(--accent-rgb),0.1)",
          "&::before": { opacity: 1 },
        },
      }}
    >
      <Link href={href} style={{ display: "block", padding: "40px", textDecoration: "none", color: "inherit" }}>
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: 30,
            right: 36,
            fontFamily: "var(--font-syne)",
            fontSize: 13,
            color: "var(--muted)",
            fontWeight: 500,
          }}
        >
          {num}
        </Box>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: "14px",
            background: "linear-gradient(135deg, rgba(var(--accent-rgb),0.15), rgba(var(--accent-2-rgb),0.15))",
            border: "1px solid var(--border)",
            display: "grid",
            placeItems: "center",
            fontSize: 24,
            mb: "24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {icon}
        </Box>
        <Box
          component="h3"
          sx={{
            fontFamily: "var(--font-syne)",
            fontSize: 24,
            fontWeight: 600,
            mb: "12px",
            letterSpacing: "-0.02em",
            position: "relative",
            zIndex: 1,
          }}
        >
          {title}
        </Box>
        <Box
          component="p"
          sx={{ color: "var(--muted)", fontSize: 15, position: "relative", zIndex: 1 }}
        >
          {desc}
        </Box>
      </Link>
    </Box>
  );
}