"use client";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: "01",
    title: "Discover",
    desc: "We jump on a free call, learn your goals, audit what you have today and map out exactly what you need — website, app, SEO, GEO or all of the above.",
  },
  {
    step: "02",
    title: "Design & Build",
    desc: "Wireframes in Figma, then code in Next.js, React, Flask or Flutter. You get a live preview link from day one — no black boxes, no surprises.",
  },
  {
    step: "03",
    title: "Ship & Grow",
    desc: "We deploy to Vercel or AWS, set up CI/CD, monitoring and analytics — then keep optimising for speed, SEO and AI search visibility.",
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
          How we work
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
          From idea to live —
          <br />
          in three simple steps.
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: "24px",
            mt: "60px",
          }}
        >
          {steps.map((s) => (
            <Box
              key={s.step}
              className="testi-reveal"
              sx={{
                p: "36px",
                borderRadius: "20px",
                background: "linear-gradient(180deg, rgba(var(--text-rgb),0.04), rgba(var(--text-rgb),0.01))",
                border: "1px solid var(--border)",
                backdropFilter: "blur(20px)",
                position: "relative",
                transition: "border-color 0.3s, transform 0.3s",
                "&:hover": {
                  borderColor: "rgba(var(--accent-rgb),0.3)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box
                sx={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 64,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "var(--accent)",
                  mb: "16px",
                }}
              >
                {s.step}
              </Box>
              <Box
                component="h3"
                sx={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 24,
                  fontWeight: 600,
                  mb: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.title}
              </Box>
              <Box
                component="p"
                sx={{
                  color: "var(--muted)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {s.desc}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
