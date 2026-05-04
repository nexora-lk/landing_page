"use client";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = { num: string; title: string; desc: string };

const steps: Step[] = [
  { num: "01", title: "Discover",           desc: "Free call to map your goals, scope and budget." },
  { num: "02", title: "Design & Prototype", desc: "Wireframes and a clickable Figma you can react to." },
  { num: "03", title: "Build & Test",       desc: "Live preview link from week one, weekly check-ins." },
  { num: "04", title: "Launch & Support",   desc: "We ship it, monitor it, and stay on call as you grow." },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-reveal",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".process-reveal", start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      component="section"
      id="process"
      ref={sectionRef}
      sx={{ py: { xs: "96px", md: "128px" }, position: "relative", background: "var(--bg)" }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px" } }}>
        <Box className="process-reveal" component="span" sx={{ fontSize: 12, color: "var(--grey-1)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, mb: "16px", display: "block" }}>
          How we work
        </Box>
        <Box className="process-reveal" component="h2" sx={{ fontSize: { xs: 36, md: 48 }, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, mb: "16px", maxWidth: 760, color: "var(--ink)" }}>
          From idea to live, in four simple steps.
        </Box>
        <Box className="process-reveal" component="p" sx={{ fontSize: 19, color: "var(--grey-1)", maxWidth: "65ch", mb: "64px", lineHeight: 1.6 }}>
          A simple, transparent workflow that turns ideas into shipped products.
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }, gap: { xs: "16px", md: "24px" } }}>
          {steps.map((step) => (
            <Box
              key={step.num}
              className="process-reveal"
              sx={{
                p: "32px",
                borderRadius: "20px",
                background: "var(--surface)",
                transition: "all 240ms ease-out",
                "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" },
              }}
            >
              <Box sx={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", color: "var(--accent)", mb: "20px" }}>
                {step.num}
              </Box>
              <Box component="h3" sx={{ fontSize: 24, fontWeight: 600, mb: "12px", letterSpacing: "-0.01em", color: "var(--ink)", lineHeight: 1.25 }}>
                {step.title}
              </Box>
              <Box component="p" sx={{ color: "var(--grey-1)", fontSize: 17, lineHeight: 1.6 }}>
                {step.desc}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
