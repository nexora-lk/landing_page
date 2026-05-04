import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  LayoutGrid,
  Sparkles,
  Palette,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web, mobile, AI search, design and cloud — everything a modern company needs to launch and scale, founder-built.",
  alternates: { canonical: "/services" },
};

type SubService = { title: string; desc: string };

type Service = {
  id: string;
  Icon: LucideIcon;
  eyebrow: string;
  title: string;
  tagline: string;
  long: string;
  items: SubService[];
  stack: string[];
};

const services: Service[] = [
  {
    id: "websites-apps",
    Icon: LayoutGrid,
    eyebrow: "01 — Build",
    title: "Websites & Apps",
    tagline:
      "Marketing sites, SaaS platforms and mobile apps that ship fast and scale clean.",
    long:
      "From a one-page launch site to a full SaaS product, we design, build and deploy in one tight loop. Every project is wired to a modern stack from day one — no WordPress migrations, no jQuery surprises, no engineers to hire later.",
    items: [
      {
        title: "Marketing & Corporate Websites",
        desc:
          "Multi-page sites that explain who you are, why you matter, and how to buy. Built with a CMS your team can update without a developer.",
      },
      {
        title: "SaaS Platforms & Web Apps",
        desc:
          "Custom dashboards, internal tools and full B2B / B2C platforms — secure logins, billing, admin panels and the integrations you actually need.",
      },
      {
        title: "E-commerce Storefronts",
        desc:
          "Product catalogues, carts, payments (PayHere, Stripe, PayPal) and admin dashboards for orders, inventory and shipping.",
      },
      {
        title: "Mobile Apps (iOS + Android)",
        desc:
          "Cross-platform apps in Flutter or React Native — clean UI, smooth UX, push notifications, offline support and store-ready builds.",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Flutter", "React Native", "PayHere", "Stripe"],
  },
  {
    id: "ai-search-seo",
    Icon: Sparkles,
    eyebrow: "02 — Get found",
    title: "AI Search & SEO",
    tagline:
      "Get surfaced inside ChatGPT, Gemini, Perplexity and Google — by design, not by accident.",
    long:
      "Search is changing fast. Half of buyer research now starts inside an AI assistant. We bake GEO (Generative Engine Optimization) into every site we build so your business is the answer when an LLM is asked.",
    items: [
      {
        title: "GEO — Generative Engine Optimization",
        desc:
          "FAQ structures, schema markup and AI-friendly copy designed to be quoted by ChatGPT, Gemini, Perplexity and Claude.",
      },
      {
        title: "Technical SEO",
        desc:
          "Site speed, Core Web Vitals, sitemap, robots, canonicals and crawl budget — the boring fundamentals that move rankings.",
      },
      {
        title: "On-Page & Content SEO",
        desc:
          "Keyword research, page-level optimisation and AI-assisted content calendars that target the searches your customers actually run.",
      },
      {
        title: "Search Console + Analytics Setup",
        desc:
          "Google Search Console, GA4 and a simple monthly report you can read in under 5 minutes.",
      },
    ],
    stack: ["Schema.org", "JSON-LD", "GA4", "Search Console", "Lighthouse", "PostHog"],
  },
  {
    id: "design-branding",
    Icon: Palette,
    eyebrow: "03 — Design",
    title: "Design & Branding",
    tagline:
      "Visual identity, design systems and conversion-focused interfaces — drawn in Figma, ready to ship.",
    long:
      "Design isn’t decoration. It’s how your product earns trust in the first three seconds. We work in Figma from wireframes to high-fidelity components, then hand off a system your engineers can actually build from.",
    items: [
      {
        title: "Brand Identity",
        desc:
          "Logo, type system, color palette and brand guidelines — everything your team needs to stay on-brand without asking.",
      },
      {
        title: "UI / UX Design",
        desc:
          "Wireframes, interactive Figma prototypes and final UI screens for web and mobile, focused on clarity and conversion.",
      },
      {
        title: "Design Systems",
        desc:
          "A reusable Figma library — tokens, components, patterns — so your product stays consistent as it grows.",
      },
      {
        title: "Landing Pages & Pitch Decks",
        desc:
          "High-converting landing pages and investor-ready decks designed and copy-edited as a package.",
      },
    ],
    stack: ["Figma", "Framer", "Lottie", "Storybook"],
  },
  {
    id: "cloud-performance",
    Icon: Cloud,
    eyebrow: "04 — Run",
    title: "Cloud & Performance",
    tagline:
      "Hosting, deployments, monitoring and DevOps — set up so your product just works.",
    long:
      "We treat infrastructure the way you treat your office: invisible when it’s right, painful when it’s wrong. We deploy on Vercel and AWS, automate releases, and stay on call as you grow.",
    items: [
      {
        title: "Hosting & Deployment",
        desc:
          "Vercel, AWS, Cloudflare or your platform of choice — domain, SSL, DNS and zero-downtime deploys.",
      },
      {
        title: "CI/CD Pipelines",
        desc:
          "GitHub Actions or GitLab CI so every push is tested, built and shipped automatically — no manual deploys, no surprises.",
      },
      {
        title: "Backend APIs & Databases",
        desc:
          "Node.js, Flask or Python APIs with Postgres / MongoDB databases, auth, file storage and third-party integrations.",
      },
      {
        title: "Monitoring & Maintenance",
        desc:
          "Uptime alerts, error tracking (Sentry), performance dashboards and a monthly maintenance retainer if you want one.",
      },
    ],
    stack: ["Vercel", "AWS", "Docker", "GitHub Actions", "Postgres", "MongoDB", "Sentry"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="What we do"
          titleParts={{ plain: "Everything to launch.", accent: "One small team." }}
          subtitle="Web, mobile, AI search, design and cloud — handled end-to-end by the founders. Startup pricing, senior craft, no agency middlemen."
        />

        {/* Quick navigation jump-links */}
        <Box
          component="nav"
          aria-label="Service categories"
          sx={{
            position: "sticky",
            top: { xs: 56, md: 64 },
            zIndex: 50,
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            borderBottom: "1px solid var(--grey-2)",
          }}
        >
          <Container maxWidth="lg" sx={{ px: { xs: "16px", md: "48px", lg: "80px" } }}>
            <Box
              sx={{
                display: "flex",
                gap: "4px",
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                py: "12px",
              }}
            >
              {services.map((s) => (
                <Box
                  key={s.id}
                  component="a"
                  href={`#${s.id}`}
                  sx={{
                    flexShrink: 0,
                    px: "16px",
                    py: "8px",
                    borderRadius: "999px",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--grey-1)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "all 200ms ease-out",
                    "&:hover": { color: "var(--ink)", background: "var(--surface)" },
                  }}
                >
                  {s.title}
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Service sections */}
        {services.map((svc, idx) => (
          <Box
            key={svc.id}
            component="section"
            id={svc.id}
            sx={{
              py: { xs: "96px", md: "128px" },
              background: idx % 2 === 0 ? "var(--bg)" : "var(--surface)",
              scrollMarginTop: { xs: "120px", md: "128px" },
            }}
          >
            <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
              {/* Header */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: { xs: "32px", md: "64px" },
                  mb: "64px",
                  alignItems: "start",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "16px",
                      background: "rgba(0,113,227,0.10)",
                      color: "var(--accent)",
                      display: "grid",
                      placeItems: "center",
                      mb: "24px",
                    }}
                  >
                    <svc.Icon size={28} strokeWidth={1.5} />
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: 12,
                      color: "var(--grey-1)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                      mb: "12px",
                      display: "block",
                    }}
                  >
                    {svc.eyebrow}
                  </Box>
                  <Box
                    component="h2"
                    sx={{
                      fontSize: { xs: 32, md: 44 },
                      fontWeight: 600,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                      color: "var(--ink)",
                      mb: "16px",
                    }}
                  >
                    {svc.title}
                  </Box>
                  <Box component="p" sx={{ fontSize: 19, color: "var(--ink)", fontWeight: 500, lineHeight: 1.5, mb: "20px" }}>
                    {svc.tagline}
                  </Box>
                </Box>
                <Box>
                  <Box component="p" sx={{ fontSize: 17, color: "var(--grey-1)", lineHeight: 1.7, maxWidth: "65ch", mb: "24px" }}>
                    {svc.long}
                  </Box>
                  <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {svc.stack.map((tag) => (
                      <Box
                        key={tag}
                        component="span"
                        sx={{
                          px: "12px",
                          py: "4px",
                          borderRadius: "999px",
                          background: idx % 2 === 0 ? "var(--surface)" : "var(--bg)",
                          border: "1px solid var(--grey-2)",
                          fontSize: 13,
                          color: "var(--grey-1)",
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              {/* Sub-services grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: { xs: "16px", md: "24px" },
                }}
              >
                {svc.items.map((it, i) => (
                  <Box
                    key={it.title}
                    sx={{
                      p: { xs: "28px", md: "32px" },
                      borderRadius: "20px",
                      background: idx % 2 === 0 ? "var(--surface)" : "var(--bg)",
                      transition: "all 240ms ease-out",
                      "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: 12,
                        color: "var(--accent)",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        mb: "12px",
                        display: "block",
                      }}
                    >
                      / {String(i + 1).padStart(2, "0")}
                    </Box>
                    <Box
                      component="h3"
                      sx={{
                        fontSize: { xs: 20, md: 22 },
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        color: "var(--ink)",
                        mb: "12px",
                        lineHeight: 1.25,
                      }}
                    >
                      {it.title}
                    </Box>
                    <Box component="p" sx={{ color: "var(--grey-1)", fontSize: 16, lineHeight: 1.6 }}>
                      {it.desc}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Container>
          </Box>
        ))}

        {/* Inquiry section */}
        <Box
          component="section"
          id="inquiry"
          sx={{
            py: { xs: "96px", md: "128px" },
            background: "var(--bg)",
            borderTop: "1px solid var(--grey-2)",
          }}
        >
          <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
                gap: { xs: "48px", md: "80px" },
                alignItems: "start",
              }}
            >
              <Box>
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
                  Project inquiry
                </Box>
                <Box
                  component="h2"
                  sx={{
                    fontSize: { xs: 32, md: 44 },
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    color: "var(--ink)",
                    mb: "20px",
                  }}
                >
                  Tell us what you’re building.
                </Box>
                <Box component="p" sx={{ fontSize: 19, color: "var(--grey-1)", lineHeight: 1.6, mb: "32px", maxWidth: "55ch" }}>
                  Send us a few lines about your project and we’ll reply
                  within one business day with a clear next step — usually a
                  free 30-minute call.
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    ["Reply within", "1 business day"],
                    ["Discovery call", "Free, 30 minutes"],
                    ["Quote turnaround", "2–4 days after the call"],
                    ["Engagement style", "Fixed-price, milestone-based"],
                  ].map(([k, v]) => (
                    <Box
                      key={k}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "16px",
                        py: "12px",
                        borderBottom: "1px solid var(--grey-2)",
                      }}
                    >
                      <Box component="span" sx={{ fontSize: 14, color: "var(--grey-1)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                        {k}
                      </Box>
                      <Box component="span" sx={{ fontSize: 15, color: "var(--ink)", fontWeight: 500, textAlign: "right" }}>
                        {v}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box>
                <ContactForm />
              </Box>
            </Box>
          </Container>
        </Box>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
