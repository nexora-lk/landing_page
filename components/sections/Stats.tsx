"use client";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Stat = { target: number; suffix: string; label: string; textValue?: string };

const stats: Stat[] = [
  { target: 3,   suffix: "",  label: "Client Projects Delivered" },
  { target: 8,   suffix: "",  label: "Services Under One Roof" },
  { target: 100, suffix: "%", label: "Founder-led Builds" },
  { target: 0,   suffix: "",  label: "Direct WhatsApp Access", textValue: "WhatsApp" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Reveal text
      gsap.fromTo(
        ".stats-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".stats-reveal", start: "top 85%" },
        }
      );

      // Counter animation
      counterRefs.current.forEach((el, i) => {
        if (!el) return;
        const stat = stats[i];
        if (stat.textValue) {
          el.textContent = stat.textValue;
          return;
        }
        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          once: true,
          onEnter: () => {
            let cur = 0;
            const step = stat.target / 60;
            const update = () => {
              cur += step;
              if (cur >= stat.target) {
                el.textContent = stat.target + stat.suffix;
                return;
              }
              el.textContent = Math.floor(cur) + stat.suffix;
              requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      component="section"
      id="why"
      ref={sectionRef}
      sx={{
        py: { xs: "80px", md: "120px" },
        position: "relative",
        background: "linear-gradient(180deg, transparent, rgba(var(--accent-rgb),0.03), transparent)",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
        <Box
          className="stats-reveal"
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
          Where we&apos;re at
        </Box>
        <Box
          className="stats-reveal"
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
          Small team.
          <br />
          Honest numbers.
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: "40px",
            mt: "60px",
          }}
        >
          {stats.map((stat, i) => (
            <Box
              key={stat.label}
              className="stats-reveal"
              sx={{
                textAlign: "left",
                borderLeft: { xs: "none", sm: "1px solid var(--border)" },
                borderTop: { xs: "1px solid var(--border)", sm: "none" },
                pl: { xs: 0, sm: "28px" },
                pt: { xs: "20px", sm: 0 },
              }}
            >
              <Box
                ref={(el: HTMLDivElement | null) => { counterRefs.current[i] = el; }}
                sx={{
                  fontFamily: "var(--font-syne)",
                  fontSize: stat.textValue
                    ? "clamp(28px, 3vw, 44px)"
                    : "clamp(48px, 5vw, 72px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "var(--text)",
                  mb: "12px",
                }}
              >
                {stat.textValue ?? `0${stat.suffix}`}
              </Box>
              <Box
                component="p"
                sx={{
                  color: "var(--muted)",
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}