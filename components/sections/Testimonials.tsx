"use client";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Nextora rebuilt our core platform in four months. Our deploys are 20x faster and our team finally trusts the stack again.",
    initials: "AK",
    name: "Anya Kowalski",
    role: "CTO, Velocity Finance",
  },
  {
    quote:
      "The only agency where the engineers are smarter than ours. They don't just deliver — they raise the bar for the whole org.",
    initials: "MR",
    name: "Marco Reyes",
    role: "VP Engineering, Orbit AI",
  },
  {
    quote:
      "From architecture to launch in 11 weeks. Nextora shipped what two previous vendors couldn't in a year. Unreal execution.",
    initials: "SC",
    name: "Sarah Chen",
    role: "Founder, Pulse Health",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testi-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".testi-reveal", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      component="section"
      id="testimonials"
      ref={sectionRef}
      sx={{ py: { xs: "80px", md: "120px" }, position: "relative" }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
        <Box
          className="testi-reveal"
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
          Testimonials
        </Box>
        <Box
          className="testi-reveal"
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
          Loved by the teams
          <br />
          we build alongside.
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: "24px",
            mt: "40px",
          }}
        >
          {testimonials.map((t) => (
            <Box
              key={t.name}
              className="testi-reveal"
              sx={{
                p: "36px",
                borderRadius: "20px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                border: "1px solid var(--border)",
                backdropFilter: "blur(20px)",
                position: "relative",
                transition: "border-color 0.3s",
                "&:hover": { borderColor: "rgba(0,212,255,0.3)" },
              }}
            >
              {/* Quote mark */}
              <Box
                sx={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 72,
                  color: "var(--accent)",
                  opacity: 0.3,
                  lineHeight: 0.5,
                  position: "absolute",
                  top: 30,
                  right: 30,
                  pointerEvents: "none",
                }}
              >
                &ldquo;
              </Box>

              <Box
                component="p"
                sx={{
                  fontSize: 16,
                  mb: "28px",
                  color: "#d0d0e0",
                  fontWeight: 300,
                  lineHeight: 1.65,
                  position: "relative",
                }}
              >
                {t.quote}
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#000",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </Box>
                <Box>
                  <Box component="p" sx={{ fontWeight: 600, fontSize: 14 }}>
                    {t.name}
                  </Box>
                  <Box component="p" sx={{ color: "var(--muted)", fontSize: 13 }}>
                    {t.role}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}