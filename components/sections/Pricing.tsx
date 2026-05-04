"use client";

import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tokens } from "@/components/ui/ThemeRegistry";

gsap.registerPlugin(ScrollTrigger);

const categories = ["Website", "Mobile App", "Software", "Extra Services"];

type Plan = {
  tier: string;
  tierColor: string;
  label: string;
  price: string;
  features: string[];
  highlighted: boolean;
};

const pricingData: Record<string, Plan[]> = {
  Website: [
    {
      tier: "Starter",
      tierColor: tokens.tierGreen,
      label: "Best for small shops & startups",
      price: "LKR 35,000 – 60,000",
      features: [
        "3–5 pages (Home, About, Contact)",
        "Mobile responsive design",
        "Basic UI design",
        "Contact form (WhatsApp / email)",
        "Basic SEO setup",
        "Free domain + hosting (1 year)",
      ],
      highlighted: false,
    },
    {
      tier: "Business",
      tierColor: tokens.tierBlue,
      label: "For growing businesses",
      price: "LKR 80,000 – 150,000",
      features: [
        "5–10 pages",
        "Custom UI/UX design",
        "Admin dashboard (CMS)",
        "Blog system",
        "Google Analytics + SEO",
        "Speed optimization",
        "Security setup",
      ],
      highlighted: true,
    },
    {
      tier: "E-Commerce",
      tierColor: tokens.tierPurple,
      label: "Full online store",
      price: "LKR 150,000 – 400,000",
      features: [
        "Product catalog system",
        "Shopping cart + checkout",
        "Payment gateway (PayHere / Stripe)",
        "Admin dashboard",
        "Order management",
        "Inventory system",
      ],
      highlighted: false,
    },
    {
      tier: "Custom Web App",
      tierColor: tokens.tierRed,
      label: "SaaS / Dashboard",
      price: "LKR 300,000 – 1,500,000+",
      features: [
        "Custom backend built for your business logic",
        "Secure user login system",
        "Connects to other apps and tools you use",
        "Admin dashboard to manage everything",
        "Live updates without refreshing",
        "Fully hosted online — no servers to manage",
      ],
      highlighted: false,
    },
  ],
  "Mobile App": [
    {
      tier: "Basic App",
      tierColor: tokens.tierGreen,
      label: "Startup MVP",
      price: "LKR 60,000 – 120,000",
      features: [
        "5–8 screens",
        "Simple, clean UI",
        "Firebase backend",
        "Android app",
        "Play Store publish",
      ],
      highlighted: false,
    },
    {
      tier: "Standard",
      tierColor: tokens.tierBlue,
      label: "Full-featured app",
      price: "LKR 150,000 – 350,000",
      features: [
        "Login system",
        "API integration",
        "Admin panel",
        "Push notifications",
        "Android + iOS (Flutter)",
      ],
      highlighted: true,
    },
    {
      tier: "Advanced",
      tierColor: tokens.tierRed,
      label: "Uber / Booking / SaaS",
      price: "LKR 400,000 – 1,200,000+",
      features: [
        "Real-time database",
        "Maps & live tracking",
        "Payment system",
        "Multi-user roles",
        "Scalable backend",
      ],
      highlighted: false,
    },
  ],
  Software: [
    {
      tier: "Basic System",
      tierColor: tokens.tierGreen,
      label: "Small businesses",
      price: "LKR 80,000 – 200,000",
      features: ["POS system", "Small management system"],
      highlighted: false,
    },
    {
      tier: "Business",
      tierColor: tokens.tierBlue,
      label: "Growing companies",
      price: "LKR 200,000 – 600,000",
      features: ["Payroll system", "Inventory system", "CRM system"],
      highlighted: true,
    },
    {
      tier: "Enterprise",
      tierColor: tokens.tierRed,
      label: "Large organizations",
      price: "LKR 600,000 – 2,000,000+",
      features: ["ERP systems", "Multi-branch systems", "Automation platforms"],
      highlighted: false,
    },
  ],
  "Extra Services": [
    {
      tier: "Hosting",
      tierColor: tokens.accent,
      label: "Monthly service",
      price: "LKR 1,000 – 5,000 / month",
      features: ["Managed hosting", "SSL certificate", "Uptime monitoring"],
      highlighted: false,
    },
    {
      tier: "Maintenance",
      tierColor: tokens.accent2,
      label: "Monthly service",
      price: "LKR 5,000 – 20,000 / month",
      features: [
        "Regular updates",
        "Bug fixes",
        "Performance monitoring",
        "Security patches",
      ],
      highlighted: false,
    },
    {
      tier: "UI/UX Design",
      tierColor: tokens.accent3,
      label: "Design only",
      price: "LKR 10,000 – 100,000",
      features: [
        "Landing page UI: LKR 10K–25K",
        "Full system UI: LKR 30K–100K",
        "Figma source files",
        "Responsive designs",
      ],
      highlighted: false,
    },
    {
      tier: "SEO Services",
      tierColor: tokens.tierGreen,
      label: "Grow your traffic",
      price: "LKR 10,000 – 80,000",
      features: [
        "Basic SEO: LKR 10K–30K",
        "Monthly SEO: LKR 20K–80K / mo",
        "Keyword research",
        "On-page optimization",
      ],
      highlighted: false,
    },
  ],
};

export default function Pricing({ compact = false }: { compact?: boolean } = {}) {
  const [activeCategory, setActiveCategory] = useState("Website");
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-header-el",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pricing-header-el", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const animateCards = () => {
    if (!cardsRef.current) return;
    gsap.fromTo(
      cardsRef.current.querySelectorAll(".price-card"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" }
    );
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setTimeout(animateCards, 30);
  };

  useEffect(() => {
    animateCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const plans = compact
    ? pricingData["Website"].slice(0, 3)
    : pricingData[activeCategory];

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{ py: { xs: "96px", md: "128px" }, position: "relative", background: "var(--bg)" }}
    >
      <Container
        maxWidth="lg"
        sx={{ px: { xs: "24px", md: "48px", lg: "80px" }, position: "relative" }}
      >
        {/* Header */}
        <Box
          className="pricing-header-el"
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
          {compact ? "Pricing" : "Full pricing menu"}
        </Box>
        <Box
          className="pricing-header-el"
          component="h2"
          sx={{
            fontSize: { xs: 36, md: 48 },
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            mb: "16px",
            maxWidth: 760,
            color: "var(--ink)",
          }}
        >
          Investment plans for{" "}
          <Box component="span" sx={{ color: "var(--accent)" }}>every stage.</Box>
        </Box>
        <Box
          className="pricing-header-el"
          component="p"
          sx={{
            fontSize: 19,
            color: "var(--grey-1)",
            maxWidth: "65ch",
            mb: "48px",
            lineHeight: 1.6,
          }}
        >
          All prices in Sri Lankan Rupees (LKR). Final quotes depend on scope —
          book a free call to get an exact estimate.
        </Box>

        {/* Category tabs (hidden in compact homepage mode) */}
        {!compact && (
          <Box
            className="pricing-header-el"
            sx={{
              display: "flex",
              gap: "4px",
              flexWrap: { xs: "nowrap", md: "wrap" },
              overflowX: { xs: "auto", md: "visible" },
              WebkitOverflowScrolling: "touch",
              mb: "48px",
              p: "4px",
              borderRadius: "999px",
              background: "var(--surface)",
              width: { xs: "100%", md: "fit-content" },
              maxWidth: "100%",
            }}
          >
            {categories.map((cat) => (
              <Box
                key={cat}
                component="button"
                onClick={() => handleCategoryChange(cat)}
                sx={{
                  px: { xs: "16px", md: "22px" },
                  py: "10px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "inherit",
                  minHeight: 40,
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                  transition: "background 240ms ease-out, color 240ms ease-out",
                  background: activeCategory === cat ? "var(--ink)" : "transparent",
                  color: activeCategory === cat ? "#fff" : "var(--grey-1)",
                  "&:hover": activeCategory !== cat ? { color: "var(--ink)" } : {},
                }}
              >
                {cat}
              </Box>
            ))}
          </Box>
        )}

        {/* Pricing cards */}
        <Box
          ref={cardsRef}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg:
                plans.length === 4
                  ? "repeat(4, 1fr)"
                  : plans.length === 3
                  ? "repeat(3, 1fr)"
                  : "repeat(2, 1fr)",
            },
            gap: "24px",
          }}
        >
          {plans.map((plan) => (
            <PriceCard key={plan.tier} {...plan} />
          ))}
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            mt: "64px",
            pt: "32px",
            borderTop: "1px solid var(--grey-2)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <Box>
            <Box component="p" sx={{ color: "var(--ink)", fontSize: 16, mb: "4px" }}>
              All prices are starting estimates. Custom projects are quoted individually.
            </Box>
            <Box component="p" sx={{ color: "var(--grey-1)", fontSize: 14 }}>
              Verified against Sri Lankan tech industry standards.
            </Box>
          </Box>
          <Box
            component={Link}
            href={compact ? "/pricing" : "/contact"}
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
              flexShrink: 0,
              minHeight: 44,
              transition: "background 240ms ease-out",
              "&:hover": { background: "var(--accent-hi)" },
            }}
          >
            {compact ? "See full pricing menu →" : "Get a free quote →"}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function PriceCard({ tier, tierColor, label, price, features, highlighted }: Plan) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    cardRef.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Box
      ref={cardRef}
      className="price-card"
      sx={{
        borderRadius: "24px",
        background: highlighted ? "var(--ink)" : "var(--surface)",
        color: highlighted ? "#fff" : "var(--ink)",
        p: { xs: "32px", md: "40px" },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        transition: "all 240ms ease-out",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        },
      }}
    >
      {highlighted && (
        <Box
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            px: "10px",
            py: "4px",
            borderRadius: "999px",
            background: "var(--accent)",
            fontSize: 11,
            fontWeight: 600,
            color: "#fff",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Popular
        </Box>
      )}

      <Box
        component="span"
        sx={{
          fontSize: 12,
          fontWeight: 600,
          color: highlighted ? "rgba(255,255,255,0.7)" : "var(--grey-1)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          mb: "8px",
        }}
      >
        {tier}
      </Box>

      <Box
        component="p"
        sx={{
          fontSize: 14,
          color: highlighted ? "rgba(255,255,255,0.7)" : "var(--grey-1)",
          mb: "20px",
          lineHeight: 1.5,
        }}
      >
        {label}
      </Box>

      <Box
        sx={{
          fontSize: { xs: 20, md: 24 },
          fontWeight: 600,
          color: highlighted ? "#fff" : "var(--ink)",
          mb: "24px",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
          pb: "24px",
          borderBottom: highlighted ? "1px solid rgba(255,255,255,0.18)" : "1px solid var(--grey-2)",
          // Long ranges like "LKR 300,000 – 1,500,000+" need to wrap, not overflow
          overflowWrap: "anywhere",
        }}
      >
        {price}
      </Box>

      <Box
        component="ul"
        sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}
      >
        {features.map((feat) => (
          <Box
            component="li"
            key={feat}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              fontSize: 15,
              color: highlighted ? "rgba(255,255,255,0.85)" : "var(--ink)",
              lineHeight: 1.5,
            }}
          >
            <Box component="span" sx={{ color: "var(--accent)", flexShrink: 0, lineHeight: 1.5, fontSize: 14, fontWeight: 600 }}>
              ✓
            </Box>
            {feat}
          </Box>
        ))}
      </Box>

      <Box
        component={Link}
        href="/contact"
        sx={{
          mt: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          px: "20px",
          py: "12px",
          borderRadius: "999px",
          background: highlighted ? "var(--accent)" : "var(--ink)",
          color: "#fff",
          fontSize: 16,
          fontWeight: 500,
          textDecoration: "none",
          minHeight: 44,
          transition: "background 240ms ease-out",
          "&:hover": { background: highlighted ? "var(--accent-hi)" : "#0F0F11" },
        }}
      >
        Choose this plan →
      </Box>

      {/* Suppress unused tierColor lint */}
      <Box sx={{ display: "none" }}>{tierColor}</Box>
    </Box>
  );
}
