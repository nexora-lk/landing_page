"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A landing page lands in 1–2 weeks. A full marketing site or simple SaaS dashboard takes 3–6 weeks. Larger custom platforms run 8–12 weeks. We always agree on a timeline before we start, and we ship in weekly previews so you see progress every Monday.",
  },
  {
    q: "What does it cost to build with you?",
    a: "Landing pages start at a fixed price. Websites, SaaS builds and apps are scoped per project after a free intro call. We send a fixed quote with milestones — no hourly billing, no surprise invoices.",
  },
  {
    q: "What is GEO and why does it matter?",
    a: "GEO (Generative Engine Optimization) makes your site visible inside ChatGPT, Gemini, Perplexity and other AI search tools — which already drive a fast-growing share of buyer research. We bake it in from day one with structured FAQ content, schema markup and AI-friendly copy.",
  },
  {
    q: "Do you only build new sites, or can you fix an existing one?",
    a: "Both. We do greenfield builds and we also rescue, redesign, speed-tune or migrate existing sites — including WordPress to Next.js moves, performance fixes and SEO recoveries.",
  },
  {
    q: "What happens after the site or app launches?",
    a: "We hand you everything: code, hosting, deploy pipeline, analytics. Optional retainers cover monitoring, content, SEO/GEO upkeep, new features and Core Web Vitals tuning.",
  },
  {
    q: "Do you work with non-tech founders?",
    a: "Yes — most of our clients are. We translate ideas into product, handle every technical decision, and explain things in plain English. You stay in control without needing to be the engineer.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".faq-reveal", start: "top 88%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      component="section"
      id="faq"
      ref={sectionRef}
      sx={{ py: { xs: "80px", md: "120px" }, position: "relative" }}
    >
      <Container maxWidth="md" sx={{ px: { xs: "20px", md: "32px" } }}>
        <Box
          className="faq-reveal"
          component="span"
          sx={{
            fontSize: 13,
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontWeight: 600,
            mb: "16px",
            display: "block",
            textAlign: "center",
          }}
        >
          Questions
        </Box>
        <Box
          className="faq-reveal"
          component="h2"
          sx={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            mb: "60px",
            textAlign: "center",
          }}
        >
          Everything else,
          <br />
          answered.
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Box
                key={f.q}
                className="faq-reveal"
                sx={{
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  background: isOpen
                    ? "linear-gradient(180deg, rgba(var(--accent-rgb),0.04), rgba(var(--text-rgb),0.02))"
                    : "var(--surface)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                  borderColor: isOpen ? "rgba(var(--accent-rgb),0.35)" : "var(--border)",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    px: { xs: "20px", md: "28px" },
                    py: { xs: "20px", md: "24px" },
                    background: "none",
                    border: "none",
                    color: "inherit",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "var(--font-syne)",
                    fontSize: { xs: 16, md: 18 },
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  <Box component="span">{f.q}</Box>
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      border: "1px solid var(--border)",
                      display: "grid",
                      placeItems: "center",
                      color: isOpen ? "var(--accent)" : "var(--muted)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                      borderColor: isOpen ? "var(--border-hi)" : "var(--border)",
                    }}
                  >
                    <Plus size={16} strokeWidth={2} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.4s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <Box sx={{ overflow: "hidden" }}>
                    <Box
                      sx={{
                        px: { xs: "20px", md: "28px" },
                        pb: { xs: "22px", md: "26px" },
                        color: "var(--muted)",
                        fontSize: 15,
                        lineHeight: 1.75,
                        fontWeight: 300,
                        maxWidth: 620,
                      }}
                    >
                      {f.a}
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
