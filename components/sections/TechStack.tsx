"use client";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Flask",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Flutter",
  "React Native",
  "Figma",
  "Vercel",
  "AWS",
  "Docker",
  "GitHub Actions",
  "OpenAI",
  "LangChain",
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-reveal",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: ".tech-reveal", start: "top 90%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Duplicate for seamless infinite marquee
  const row = [...stack, ...stack];

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{
        py: { xs: "60px", md: "100px" },
        position: "relative",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "linear-gradient(180deg, transparent, rgba(var(--accent-rgb),0.02), transparent)",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" }, mb: "40px" }}>
        <Box
          className="tech-reveal"
          component="span"
          sx={{
            fontSize: 13,
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontWeight: 600,
            mb: "12px",
            display: "block",
          }}
        >
          Our toolbox
        </Box>
        <Box
          className="tech-reveal"
          component="h2"
          sx={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            maxWidth: 700,
          }}
        >
          A modern stack — picked for speed, scale and shipping.
        </Box>
      </Container>

      {/* Infinite marquee */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            width: "max-content",
            animation: "marquee-scroll 50s linear infinite",
            "&:hover": { animationPlayState: "paused" },
          }}
        >
          {row.map((name, i) => (
            <Box
              key={`${name}-${i}`}
              sx={{
                px: "22px",
                py: "14px",
                borderRadius: "100px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                backdropFilter: "blur(10px)",
                fontFamily: "var(--font-syne)",
                fontSize: 15,
                fontWeight: 500,
                color: "var(--text-soft)",
                whiteSpace: "nowrap",
                transition: "all 0.3s",
                "&:hover": {
                  borderColor: "var(--border-hi)",
                  color: "var(--accent)",
                  background: "rgba(var(--accent-rgb),0.05)",
                },
              }}
            >
              {name}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
