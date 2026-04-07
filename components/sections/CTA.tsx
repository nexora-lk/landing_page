"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: boxRef.current, start: "top 85%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <Box
      component="section"
      id="cta"
      sx={{ py: "80px", position: "relative" }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
        <Box
          ref={boxRef}
          sx={{
            position: "relative",
            p: { xs: "60px 28px", md: "100px 60px" },
            borderRadius: "32px",
            background: "linear-gradient(135deg, #0f0f17 0%, #1a0f2e 100%)",
            border: "1px solid var(--border)",
            overflow: "hidden",
            textAlign: "center",
            opacity: 0,
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 30% 0%, rgba(0,212,255,0.25), transparent 50%), radial-gradient(circle at 70% 100%, rgba(124,92,255,0.25), transparent 50%)",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Box
              component="h2"
              sx={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(40px, 6vw, 80px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1,
                mb: "24px",
              }}
            >
              Ready to Build
              <br />
              the{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Future?
              </Box>
            </Box>
            <Box
              component="p"
              sx={{
                fontSize: 19,
                color: "var(--muted)",
                maxWidth: 560,
                margin: "0 auto 40px",
                fontWeight: 300,
              }}
            >
              Let&apos;s turn your most ambitious roadmap into shipped software. Book a 30-minute strategy call with our founding team.
            </Box>
            <Box
              component={Link}
              href="/contact"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                px: "30px",
                py: "16px",
                borderRadius: "100px",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                background: "var(--text)",
                color: "#000",
                boxShadow: "0 10px 40px rgba(0,212,255,0.2)",
                border: "1px solid transparent",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 20px 60px rgba(0,212,255,0.4)",
                  background: "var(--accent)",
                },
              }}
            >
              Start a Project →
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}