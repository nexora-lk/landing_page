"use client";

import { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Sparkles,
  Search,
  Server,
  Smartphone,
  Palette,
  PenLine,
  Rocket,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  num: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
};

const services: Service[] = [
  {
    num: "/ 01",
    Icon: Globe,
    title: "Web Design & Development",
    desc: "Business sites, SaaS dashboards, e-commerce and high-converting landing pages — built with Next.js, React, Tailwind and Flask.",
    href: "/services",
  },
  {
    num: "/ 02",
    Icon: Sparkles,
    title: "GEO — Generative Engine Optimization",
    desc: "Get found in ChatGPT, Gemini and AI search. FAQ strategy, schema markup and AI-friendly content. Our specialty.",
    href: "/services",
  },
  {
    num: "/ 03",
    Icon: Search,
    title: "SEO & Performance",
    desc: "Get found on Google. Loads fast on every device, ranks for the searches your customers actually make, with simple analytics you can read.",
    href: "/services",
  },
  {
    num: "/ 04",
    Icon: Server,
    title: "Backend Development",
    desc: "The engine behind your app — secure user logins, custom business logic, and a database built to scale as you grow.",
    href: "/services",
  },
  {
    num: "/ 05",
    Icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform apps in Flutter or React Native — clean UI, smooth UX, fully wired to your backend.",
    href: "/services",
  },
  {
    num: "/ 06",
    Icon: Palette,
    title: "UI/UX & Branding",
    desc: "Wireframes, prototypes, design systems and modern landing pages — designed in Figma, ready for handoff.",
    href: "/services",
  },
  {
    num: "/ 07",
    Icon: PenLine,
    title: "AI Content Strategy",
    desc: "Blog content tuned for SEO + GEO, AI-assisted copywriting and conversion-focused content calendars.",
    href: "/services",
  },
  {
    num: "/ 08",
    Icon: Rocket,
    title: "Hosting & Deployment",
    desc: "We take it live. Domain, hosting, automatic updates and uptime monitoring — no manual work, no surprises.",
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
          Everything you need to{" "}
          <Box component="span" sx={{ color: "var(--accent)" }}>
            launch & grow
          </Box>{" "}
          online.
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
          From your first website to AI-search visibility — a small team handling design, code, content and deployment under one roof.
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
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

function ServiceCard({ num, Icon, title, desc, href }: Service) {
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
            width: 52,
            height: 52,
            borderRadius: "12px",
            background: "linear-gradient(135deg, rgba(var(--accent-rgb),0.18), rgba(var(--accent-2-rgb),0.10))",
            border: "1px solid var(--border)",
            display: "grid",
            placeItems: "center",
            mb: "24px",
            position: "relative",
            zIndex: 1,
            color: "var(--accent)",
            transition: "all 0.4s ease",
          }}
        >
          <Icon size={22} strokeWidth={1.75} />
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