import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import PageHero from "@/components/sections/PageHero";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { UserCog, Gauge, HandCoins, Sparkles, Target, Telescope, Heart, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nextora Infotech — the engineering partner ambitious founders trust to ship web, mobile and AI products.",
  alternates: { canonical: "/about" },
};

type Pillar = { Icon: LucideIcon; title: string; desc: string };

const pillars: Pillar[] = [
  {
    Icon: UserCog,
    title: "Founder-led",
    desc: "You talk to the people writing your code. No junior hand-offs, no agency middlemen.",
  },
  {
    Icon: Sparkles,
    title: "AI-search native",
    desc: "We build for ChatGPT, Gemini and Google from day one — not as an afterthought.",
  },
  {
    Icon: Gauge,
    title: "Built for speed",
    desc: "Loads fast on every device. Fast sites convert. Slow sites lose customers.",
  },
  {
    Icon: HandCoins,
    title: "Honest pricing",
    desc: "Upfront quotes, fixed milestones. You always know what you’re paying for.",
  },
];

const stats = [
  { value: "2025", label: "Year founded" },
  { value: "8",    label: "Services under one roof" },
  { value: "100%", label: "Founder-led builds" },
  { value: "24h",  label: "Reply, on average" },
];

const foundation: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Target,
    title: "Our Mission",
    desc: "To empower businesses with innovative, scalable, and reliable digital solutions that drive measurable growth.",
  },
  {
    Icon: Telescope,
    title: "Our Vision",
    desc: "To become a global leader in technology innovation by transforming ideas into impactful digital experiences.",
  },
  {
    Icon: Heart,
    title: "Our Values",
    desc: "Integrity, excellence, innovation, and long-term partnerships form the foundation of everything we do.",
  },
];

const milestones = [
  { year: "2025", text: "Nextora Infotech founded — first client projects shipped end-to-end by the founders." },
  { year: "2025", text: "Group-wide website + payroll system launched for the Prestige Glamour Group." },
  { year: "2026", text: "AI-search (GEO) added as a core practice — ranking clients inside ChatGPT and Gemini." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="About"
          titleParts={{ plain: "Engineering for", accent: "what’s next." }}
          subtitle="Nextora Infotech is a small, founder-led IT studio building web, mobile and AI products for ambitious teams worldwide."
        />

        {/* Story */}
        <Box component="section" sx={{ py: { xs: "96px", md: "128px" }, background: "var(--bg)" }}>
          <Container maxWidth="md" sx={{ px: { xs: "24px", md: "48px" } }}>
            <Box
              component="span"
              sx={{
                fontSize: 12,
                color: "var(--grey-1)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                mb: "16px",
                display: "block",
              }}
            >
              Our story
            </Box>
            <Box
              component="h2"
              sx={{
                fontSize: { xs: 28, md: 36 },
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "var(--ink)",
                mb: "32px",
              }}
            >
              A small team. Senior craft. Zero agency overhead.
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Box component="p" sx={{ fontSize: 19, color: "var(--grey-1)", lineHeight: 1.6, maxWidth: "65ch" }}>
                Nextora Infotech was founded by a small group of senior engineers
                tired of watching ambitious founders pay agency rates for junior
                work. We wanted a different setup — one where the people you
                talk to are the people writing your code.
              </Box>
              <Box component="p" sx={{ fontSize: 19, color: "var(--grey-1)", lineHeight: 1.6, maxWidth: "65ch" }}>
                We ship web platforms, mobile apps and AI-driven features for
                early-stage founders, growing businesses and enterprise
                in-house teams. Every project goes through the same four-step
                process: discover, design, build, support.
              </Box>
              <Box component="p" sx={{ fontSize: 19, color: "var(--grey-1)", lineHeight: 1.6, maxWidth: "65ch" }}>
                We’re based in Sri Lanka, working remotely with clients
                worldwide.
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Stats */}
        <Box component="section" sx={{ py: { xs: "64px", md: "96px" }, background: "var(--surface)" }}>
          <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                gap: { xs: "32px", md: "0" },
              }}
            >
              {stats.map((s, i) => (
                <Box
                  key={s.label}
                  sx={{
                    pl: { md: i === 0 ? 0 : "32px" },
                    borderLeft: { xs: "none", md: i === 0 ? "none" : "1px solid var(--grey-2)" },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: { xs: 36, md: 48 },
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.05,
                      color: "var(--accent)",
                      mb: "8px",
                    }}
                  >
                    {s.value}
                  </Box>
                  <Box component="p" sx={{ fontSize: 14, color: "var(--grey-1)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>
                    {s.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Core Foundation — Mission · Vision · Values */}
        <Box component="section" sx={{ py: { xs: "96px", md: "128px" }, background: "var(--bg)" }}>
          <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
            <Box
              component="span"
              sx={{
                fontSize: 12,
                color: "var(--grey-1)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                mb: "16px",
                display: "block",
              }}
            >
              Our Core Foundation
            </Box>
            <Box
              component="h2"
              sx={{
                fontSize: { xs: 28, md: 36 },
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "var(--ink)",
                mb: "16px",
                maxWidth: 780,
              }}
            >
              Driven by purpose, powered by{" "}
              <Box component="span" sx={{ color: "var(--accent)" }}>innovation.</Box>
            </Box>
            <Box
              component="p"
              sx={{
                fontSize: 19,
                color: "var(--grey-1)",
                lineHeight: 1.6,
                maxWidth: "65ch",
                mb: "48px",
              }}
            >
              Three commitments that shape every product we ship and every
              relationship we build.
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: { xs: "16px", md: "24px" },
              }}
            >
              {foundation.map(({ Icon, title, desc }) => (
                <Box
                  key={title}
                  sx={{
                    p: "32px",
                    borderRadius: "20px",
                    background: "var(--surface)",
                    transition: "all 240ms ease-out",
                    "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "14px",
                      background: "rgba(0,113,227,0.10)",
                      color: "var(--accent)",
                      display: "grid",
                      placeItems: "center",
                      mb: "20px",
                    }}
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </Box>
                  <Box
                    component="h3"
                    sx={{
                      fontSize: 22,
                      fontWeight: 600,
                      mb: "12px",
                      letterSpacing: "-0.01em",
                      color: "var(--ink)",
                      lineHeight: 1.25,
                    }}
                  >
                    {title}
                  </Box>
                  <Box component="p" sx={{ color: "var(--grey-1)", fontSize: 17, lineHeight: 1.6 }}>
                    {desc}
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* What sets us apart */}
        <Box component="section" sx={{ py: { xs: "96px", md: "128px" }, background: "var(--bg)" }}>
          <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
            <Box
              component="span"
              sx={{
                fontSize: 12,
                color: "var(--grey-1)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                mb: "16px",
                display: "block",
              }}
            >
              What sets us apart
            </Box>
            <Box
              component="h2"
              sx={{
                fontSize: { xs: 28, md: 36 },
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "var(--ink)",
                mb: "48px",
                maxWidth: 780,
              }}
            >
              The way we build is the product.
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: { xs: "16px", md: "24px" },
              }}
            >
              {pillars.map(({ Icon, title, desc }) => (
                <Box
                  key={title}
                  sx={{
                    p: "32px",
                    borderRadius: "20px",
                    background: "var(--surface)",
                    transition: "all 240ms ease-out",
                    "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" },
                  }}
                >
                  <Box sx={{ color: "var(--accent)", mb: "20px" }}>
                    <Icon size={28} strokeWidth={1.5} />
                  </Box>
                  <Box component="h3" sx={{ fontSize: 22, fontWeight: 600, mb: "12px", letterSpacing: "-0.01em", color: "var(--ink)", lineHeight: 1.25 }}>
                    {title}
                  </Box>
                  <Box component="p" sx={{ color: "var(--grey-1)", fontSize: 17, lineHeight: 1.6 }}>
                    {desc}
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Milestones */}
        <Box component="section" sx={{ py: { xs: "96px", md: "128px" }, background: "var(--surface)" }}>
          <Container maxWidth="md" sx={{ px: { xs: "24px", md: "48px" } }}>
            <Box
              component="span"
              sx={{
                fontSize: 12,
                color: "var(--grey-1)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                mb: "16px",
                display: "block",
              }}
            >
              Milestones
            </Box>
            <Box
              component="h2"
              sx={{
                fontSize: { xs: 28, md: 36 },
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "var(--ink)",
                mb: "48px",
              }}
            >
              The road so far.
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {milestones.map((m, i) => (
                <Box
                  key={`${m.year}-${i}`}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "60px 1fr", md: "100px 1fr" },
                    gap: { xs: "16px", md: "24px" },
                    py: "20px",
                    borderTop: i === 0 ? "1px solid var(--grey-2)" : "none",
                    borderBottom: "1px solid var(--grey-2)",
                  }}
                >
                  <Box component="span" sx={{ color: "var(--accent)", fontWeight: 600, fontSize: 16 }}>
                    {m.year}
                  </Box>
                  <Box component="p" sx={{ color: "var(--ink)", fontSize: 17, lineHeight: 1.6 }}>
                    {m.text}
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
