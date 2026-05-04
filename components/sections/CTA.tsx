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
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: boxRef.current, start: "top 85%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <Box component="section" id="cta" sx={{ py: { xs: "96px", md: "128px" }, background: "var(--bg)" }}>
      <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px" } }}>
        <Box
          ref={boxRef}
          sx={{
            p: { xs: "64px 32px", md: "96px 64px" },
            borderRadius: "32px",
            background: "var(--surface)",
            textAlign: "center",
            opacity: 0,
          }}
        >
          <Box
            component="h2"
            sx={{
              fontSize: { xs: 36, md: 56 },
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              mb: "16px",
              color: "var(--ink)",
            }}
          >
            Got an idea? Let’s build it.
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: 19,
              color: "var(--grey-1)",
              maxWidth: "60ch",
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}
          >
            Book a free 30-min call with the founders — no pitch decks, no
            agency middlemen.
          </Box>
          <Box
            component={Link}
            href="/contact"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              px: "28px",
              py: "14px",
              borderRadius: "999px",
              fontSize: 17,
              fontWeight: 500,
              textDecoration: "none",
              background: "var(--accent)",
              color: "#fff",
              minHeight: 44,
              transition: "background 240ms ease-out",
              "&:hover": { background: "var(--accent-hi)" },
            }}
          >
            Book a free call →
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
