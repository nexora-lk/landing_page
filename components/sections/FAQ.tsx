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
      sx={{ py: { xs: "96px", md: "128px" }, position: "relative" }}
    >
      {/* FAQPage JSON-LD — helps Google + AI search surface answers directly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <Container maxWidth="md" sx={{ px: { xs: "24px", md: "48px" } }}>
        <Box
          className="faq-reveal"
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
          Questions
        </Box>
        <Box
          className="faq-reveal"
          component="h2"
          sx={{
            fontSize: { xs: 36, md: 48 },
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            mb: "64px",
            color: "var(--ink)",
          }}
        >
          Everything else, answered.
        </Box>

        <Box sx={{ borderTop: "1px solid var(--grey-2)" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Box
                key={f.q}
                className="faq-reveal"
                sx={{ borderBottom: "1px solid var(--grey-2)" }}
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
                    gap: "24px",
                    px: 0,
                    py: "24px",
                    background: "none",
                    border: "none",
                    color: "var(--ink)",
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: { xs: 17, md: 19 },
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    minHeight: 44,
                  }}
                >
                  <Box component="span">{f.q}</Box>
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 32,
                      height: 32,
                      display: "grid",
                      placeItems: "center",
                      color: isOpen ? "var(--accent)" : "var(--ink)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 200ms ease-out, color 200ms ease-out",
                    }}
                  >
                    <Plus size={20} strokeWidth={1.5} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 200ms ease-out",
                  }}
                >
                  <Box sx={{ overflow: "hidden" }}>
                    <Box
                      sx={{
                        pb: "24px",
                        pr: "56px",
                        color: "var(--grey-1)",
                        fontSize: 17,
                        lineHeight: 1.6,
                        maxWidth: "65ch",
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
