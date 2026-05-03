"use client";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  num: string;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Requirement Analysis",
    desc: "We understand your business goals, project requirements, and target audience to create a clear development strategy.",
  },
  {
    num: "02",
    title: "Design & Prototype",
    desc: "We design modern UI/UX and create interactive prototypes to visualize the product before development begins.",
  },
  {
    num: "03",
    title: "Development & Testing",
    desc: "Our developers build scalable and secure solutions while thoroughly testing performance and reliability.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "We deploy the project smoothly and provide ongoing support, updates, and maintenance for long-term success.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".process-reveal", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      component="section"
      id="process"
      ref={sectionRef}
      sx={{
        py: { xs: "80px", md: "120px" },
        position: "relative",
        background:
          "linear-gradient(180deg, transparent, rgba(var(--accent-rgb),0.03), transparent)",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
        <Box
          className="process-reveal"
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
          className="process-reveal"
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
          Our development process
        </Box>
        <Box
          className="process-reveal"
          component="p"
          sx={{
            fontSize: 18,
            color: "var(--muted)",
            maxWidth: 640,
            mb: "60px",
            fontWeight: 300,
          }}
        >
          A simple and transparent workflow to turn your ideas into powerful
          digital products.
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "repeat(4, 1fr)",
            },
            gap: "24px",
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <Box
              key={step.num}
              className="process-reveal"
              sx={{
                position: "relative",
                p: "32px",
                borderRadius: "20px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                backdropFilter: "blur(20px)",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                "&:hover": {
                  borderColor: "var(--border-hi)",
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 60px rgba(var(--accent-rgb),0.08)",
                },
                "&::after":
                  i < steps.length - 1
                    ? {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        right: "-14px",
                        width: "28px",
                        height: "1px",
                        background:
                          "linear-gradient(90deg, var(--border-hi), transparent)",
                        display: { xs: "none", lg: "block" },
                      }
                    : undefined,
              }}
            >
              <Box
                sx={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 56,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "var(--accent)",
                  mb: "20px",
                  opacity: 0.85,
                }}
              >
                {step.num}
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
                {step.title}
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
                {step.desc}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
