"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  /** Optional: when added, replaces the placeholder block. */
  image?: string;
};

const projects: Project[] = [
  {
    slug: "prestige-glamour-payroll",
    tag: "HR · Internal Tool",
    title: "Prestige Glamour — Payroll",
    desc: "Custom salary management software for the Prestige Glamour group.",
  },
  {
    slug: "prestige-glamour-website",
    tag: "Corporate · Website",
    title: "Prestige Glamour — Website",
    desc: "Group-wide corporate website redesign with CMS.",
  },
  {
    slug: "nextconstation",
    tag: "Web · Marketing Site",
    title: "Nextconstation",
    desc: "Marketing website built end-to-end — design, dev, deploy.",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-reveal",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
      sx={{ py: { xs: "96px", md: "128px" }, position: "relative", background: "var(--bg)" }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px" } }}>
        <Box
          className="work-reveal"
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
          Featured work
        </Box>
        <Box
          className="work-reveal"
          component="h2"
          sx={{
            fontSize: { xs: 36, md: 48 },
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            mb: "16px",
            color: "var(--ink)",
          }}
        >
          Real projects. Real clients.
        </Box>
        <Box
          className="work-reveal"
          component="p"
          sx={{
            fontSize: 19,
            color: "var(--grey-1)",
            maxWidth: "65ch",
            mb: "64px",
            lineHeight: 1.6,
          }}
        >
          A small but growing portfolio — every project shipped end-to-end by
          the founders.
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: "24px", md: "32px" },
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
                background: "transparent",
                textDecoration: "none",
                color: "inherit",
                display: "block",
                transition: "transform 240ms ease-out",
                "&:hover": { transform: "translateY(-2px)" },
                "&:hover .work-shot": {
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                },
              }}
            >
              {/* Spec: 16:10 hero shot in soft #F5F5F7 container, 24px radius, 24px padding */}
              <Box
                className="work-shot"
                sx={{
                  background: "var(--surface)",
                  borderRadius: "24px",
                  p: "24px",
                  mb: "20px",
                  transition: "box-shadow 240ms ease-out",
                }}
              >
                <Box
                  sx={{
                    aspectRatio: "16 / 10",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: p.image
                      ? `center/cover no-repeat url(${p.image})`
                      : "linear-gradient(135deg, rgba(0,113,227,0.12) 0%, rgba(0,113,227,0.04) 100%)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--grey-1)",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {!p.image && "Screenshot coming soon"}
                </Box>
              </Box>
              <Box
                sx={{
                  fontSize: 12,
                  color: "var(--grey-1)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  mb: "8px",
                }}
              >
                {p.tag}
              </Box>
              <Box
                component="h3"
                sx={{
                  fontSize: 24,
                  fontWeight: 600,
                  mb: "8px",
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                  lineHeight: 1.25,
                }}
              >
                {p.title}
              </Box>
              <Box component="p" sx={{ color: "var(--grey-1)", fontSize: 17, lineHeight: 1.6 }}>
                {p.desc}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
