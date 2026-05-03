"use client";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  UserCog,
  Sparkles,
  Gauge,
  HandCoins,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Pillar = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const pillars: Pillar[] = [
  {
    Icon: UserCog,
    title: "Founder-led builds",
    desc: "You talk to the people writing your code — no junior hand-offs, no agency middlemen, no ghosting after kickoff.",
  },
  {
    Icon: Sparkles,
    title: "GEO-native from day one",
    desc: "We don't just build for Google — we build to be found in ChatGPT, Gemini and the AI search era ahead.",
  },
  {
    Icon: Gauge,
    title: "Built for speed",
    desc: "Modern stack, Core Web Vitals tuned, 90+ Lighthouse scores by default. Fast sites convert. Slow sites lose.",
  },
  {
    Icon: HandCoins,
    title: "Honest, fixed pricing",
    desc: "Upfront quotes, no surprise invoices. We scope it, we ship it, you know exactly what you're paying for.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
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
      sx={{ py: { xs: "80px", md: "120px" }, position: "relative" }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
        <Box
          className="why-reveal"
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
          Why work with us
        </Box>
        <Box
          className="why-reveal"
          component="h2"
          sx={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            mb: "24px",
            maxWidth: 760,
          }}
        >
          Small team. Senior craft.
          <br />
          Zero agency overhead.
        </Box>
        <Box
          className="why-reveal"
          component="p"
          sx={{
            fontSize: 18,
            color: "var(--muted)",
            maxWidth: 600,
            mb: "60px",
            fontWeight: 300,
          }}
        >
          Built for founders who want sharp execution without the bloated
          retainers and account-manager middlemen.
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
            gap: "24px",
          }}
        >
          {pillars.map(({ Icon, title, desc }) => (
            <Box
              key={title}
              className="why-reveal"
              sx={{
                p: "32px",
                borderRadius: "20px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                backdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                "&:hover": {
                  borderColor: "var(--border-hi)",
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 60px rgba(var(--accent-rgb),0.08)",
                },
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, rgba(var(--accent-rgb),0.18), rgba(var(--accent-2-rgb),0.08))",
                  border: "1px solid var(--border)",
                  display: "grid",
                  placeItems: "center",
                  mb: "20px",
                  color: "var(--accent)",
                }}
              >
                <Icon size={20} strokeWidth={1.75} />
              </Box>
              <Box
                component="h3"
                sx={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 19,
                  fontWeight: 600,
                  mb: "10px",
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </Box>
              <Box
                component="p"
                sx={{
                  color: "var(--muted)",
                  fontSize: 14,
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                {desc}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
