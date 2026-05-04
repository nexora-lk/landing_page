"use client";

import { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  LayoutGrid,
  Sparkles,
  Palette,
  Cloud,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
};

const services: Service[] = [
  {
    Icon: LayoutGrid,
    title: "Websites & Apps",
    desc: "Marketing sites, SaaS platforms, e-commerce, mobile apps. Built in Next.js, Flutter and React Native.",
    href: "/services",
  },
  {
    Icon: Sparkles,
    title: "AI Search & SEO",
    desc: "Get found in ChatGPT, Gemini and Google. GEO, schema, Core Web Vitals — our specialty.",
    href: "/services",
  },
  {
    Icon: Palette,
    title: "Design & Branding",
    desc: "Wireframes, design systems, landing pages. Built in Figma, ready to ship.",
    href: "/services",
  },
  {
    Icon: Cloud,
    title: "Cloud & Performance",
    desc: "Backend APIs, deployment, monitoring. Vercel, AWS and Docker, set up to scale.",
    href: "/services",
  },
];

const techLine = "Built with Next.js · React · Flutter · Python · AWS";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".svc-reveal",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".svc-reveal", start: "top 85%" },
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
      sx={{ py: { xs: "96px", md: "128px" }, position: "relative", background: "var(--bg)" }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px" } }}>
        <Box
          className="svc-reveal"
          component="span"
          sx={{
            fontSize: 12,
            color: "var(--grey-1)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
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
            fontSize: { xs: 36, md: 48 },
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            mb: "16px",
            maxWidth: 780,
            color: "var(--ink)",
          }}
        >
          Four practices. One small team.
        </Box>
        <Box
          className="svc-reveal"
          component="p"
          sx={{
            fontSize: 19,
            color: "var(--grey-1)",
            maxWidth: "65ch",
            mb: "64px",
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Design, code, content and deployment — handled end-to-end by the
          founders.
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            gap: { xs: "16px", md: "24px" },
          }}
        >
          {services.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </Box>

        <Box
          className="svc-reveal"
          component="p"
          sx={{
            mt: "48px",
            textAlign: "center",
            fontSize: 14,
            color: "var(--grey-1)",
            letterSpacing: "0.01em",
          }}
        >
          {techLine}
        </Box>
      </Container>
    </Box>
  );
}

function ServiceCard({ Icon, title, desc, href }: Service) {
  return (
    <Box
      className="svc-reveal"
      sx={{
        borderRadius: "20px",
        background: "var(--surface)",
        border: "none",
        position: "relative",
        overflow: "hidden",
        transition: "all 240ms ease-out",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        },
      }}
    >
      <Link
        href={href}
        style={{ display: "block", padding: "32px", textDecoration: "none", color: "inherit" }}
      >
        <Box sx={{ color: "var(--accent)", mb: "24px" }}>
          <Icon size={32} strokeWidth={1.5} />
        </Box>
        <Box
          component="h3"
          sx={{
            fontSize: 24,
            fontWeight: 600,
            mb: "16px",
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            lineHeight: 1.25,
          }}
        >
          {title}
        </Box>
        <Box
          component="p"
          sx={{
            color: "var(--grey-1)",
            fontSize: 17,
            lineHeight: 1.6,
            mb: "24px",
          }}
        >
          {desc}
        </Box>
        <Box
          component="span"
          sx={{
            color: "var(--accent)",
            fontSize: 15,
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          Learn more →
        </Box>
      </Link>
    </Box>
  );
}
