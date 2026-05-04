"use client";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserCog, Gauge, HandCoins, type LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Pillar = { Icon: LucideIcon; title: string; desc: string };

const pillars: Pillar[] = [
  {
    Icon: UserCog,
    title: "Founder-led builds",
    desc: "You talk to the people writing your code — no junior hand-offs, no agency middlemen, no ghosting after kickoff.",
  },
  {
    Icon: Gauge,
    title: "Built for speed",
    desc: "Loads fast on every device. Fast sites convert. Slow sites lose customers before the page even appears.",
  },
  {
    Icon: HandCoins,
    title: "Honest, fixed pricing",
    desc: "Upfront quotes, no surprise invoices. We scope it, ship it, and you know exactly what you're paying.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-reveal",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-reveal", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      component="section"
      id="why-us"
      ref={sectionRef}
      sx={{ py: { xs: "96px", md: "128px" }, position: "relative", background: "var(--surface)" }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px" } }}>
        <Box className="why-reveal" component="span" sx={{ fontSize: 12, color: "var(--grey-1)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, mb: "16px", display: "block" }}>
          Why work with us
        </Box>
        <Box className="why-reveal" component="h2" sx={{ fontSize: { xs: 36, md: 48 }, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, mb: "16px", maxWidth: 760, color: "var(--ink)" }}>
          Small team. Senior craft. Zero agency overhead.
        </Box>
        <Box className="why-reveal" component="p" sx={{ fontSize: 19, color: "var(--grey-1)", maxWidth: "65ch", mb: "64px", lineHeight: 1.6 }}>
          Built for founders who want sharp execution without bloated retainers and account-manager middlemen.
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: "16px", md: "24px" } }}>
          {pillars.map(({ Icon, title, desc }) => (
            <Box
              key={title}
              className="why-reveal"
              sx={{
                p: "32px",
                borderRadius: "20px",
                background: "var(--bg)",
                transition: "all 240ms ease-out",
                "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" },
              }}
            >
              <Box sx={{ color: "var(--accent)", mb: "24px" }}>
                <Icon size={32} strokeWidth={1.5} />
              </Box>
              <Box component="h3" sx={{ fontSize: 24, fontWeight: 600, mb: "16px", letterSpacing: "-0.01em", color: "var(--ink)", lineHeight: 1.25 }}>
                {title}
              </Box>
              <Box component="p" sx={{ color: "var(--grey-1)", fontSize: 17, lineHeight: 1.6 }}>
                {desc}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
