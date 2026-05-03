"use client";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Cpu, Headphones, type LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Pillar = {
  Icon: LucideIcon;
  eyebrow: string;
  title: string;
  desc: string;
};

const pillars: Pillar[] = [
  {
    Icon: Briefcase,
    eyebrow: "Services",
    title: "End-to-end digital products",
    desc: "We provide high-quality web development, mobile app development, AI solutions, and cloud services designed for startups and businesses. Our focus is building secure, fast, and scalable digital products that help companies grow and succeed in the digital world.",
  },
  {
    Icon: Cpu,
    eyebrow: "Latest Technology",
    title: "Modern stack, AI-ready",
    desc: "We use modern technologies, frameworks, and AI-powered tools to build innovative digital solutions. Our team stays updated with the latest industry trends to deliver powerful, future-ready applications that give your business a competitive advantage.",
  },
  {
    Icon: Headphones,
    eyebrow: "24×7 Support",
    title: "Always-on, never offline",
    desc: "Our dedicated support team is always ready to assist you. From technical maintenance to system monitoring, we ensure your digital platforms run smoothly with reliable support whenever your business needs it.",
  },
];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-choose-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-choose-reveal", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      component="section"
      id="why-choose"
      ref={sectionRef}
      sx={{ py: { xs: "80px", md: "120px" }, position: "relative" }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
        <Box
          className="why-choose-reveal"
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
          What sets us apart
        </Box>
        <Box
          className="why-choose-reveal"
          component="h2"
          sx={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            mb: "24px",
            maxWidth: 820,
          }}
        >
          Why choose Nextora Infotech?
        </Box>
        <Box
          className="why-choose-reveal"
          component="p"
          sx={{
            fontSize: 18,
            color: "var(--muted)",
            maxWidth: 640,
            mb: "60px",
            fontWeight: 300,
          }}
        >
          Engineering, design, and support — handled by a team that treats your
          product like our own.
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: "24px",
          }}
        >
          {pillars.map(({ Icon, eyebrow, title, desc }) => (
            <Box
              key={eyebrow}
              className="why-choose-reveal"
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
                  background:
                    "linear-gradient(135deg, rgba(var(--accent-rgb),0.18), rgba(var(--accent-2-rgb),0.08))",
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
                component="span"
                sx={{
                  fontSize: 12,
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontWeight: 600,
                  display: "block",
                  mb: "8px",
                }}
              >
                {eyebrow}
              </Box>
              <Box
                component="h3"
                sx={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 20,
                  fontWeight: 600,
                  mb: "12px",
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
                  lineHeight: 1.7,
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
