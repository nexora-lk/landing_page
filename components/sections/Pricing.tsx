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
        "Full backend system (Node / Flask)",
        "Authentication (JWT / OAuth)",
        "API development",
        "Admin panels",
        "Real-time features",
        "Cloud deployment",
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

export default function Pricing() {
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

  const plans = pricingData[activeCategory];

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{ py: { xs: "80px", md: "120px" }, position: "relative" }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(var(--accent-rgb),0.08) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{ px: { xs: "20px", md: "32px" }, position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <Box
          className="pricing-header-el"
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
          Transparent pricing
        </Box>
        <Box
          className="pricing-header-el"
          component="h2"
          sx={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            mb: "16px",
            maxWidth: 720,
          }}
        >
          Investment plans for{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            every stage
          </Box>
        </Box>
        <Box
          className="pricing-header-el"
          component="p"
          sx={{
            fontSize: 18,
            color: "var(--muted)",
            maxWidth: 580,
            mb: "48px",
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          All prices in Sri Lankan Rupees (LKR). Final quotes depend on scope —
          book a free consultation to get an exact estimate.
        </Box>

        {/* Category tabs */}
        <Box
          className="pricing-header-el"
          sx={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
            mb: "48px",
            p: "6px",
            borderRadius: "100px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            width: "fit-content",
          }}
        >
          {categories.map((cat) => (
            <Box
              key={cat}
              component="button"
              onClick={() => handleCategoryChange(cat)}
              sx={{
                px: { xs: "14px", md: "22px" },
                py: "10px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                fontSize: { xs: 12, md: 14 },
                fontWeight: 500,
                fontFamily: "inherit",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                background: activeCategory === cat ? "var(--text)" : "transparent",
                color: activeCategory === cat ? "var(--bg)" : "var(--muted)",
                "&:hover":
                  activeCategory !== cat ? { color: "var(--text)" } : {},
              }}
            >
              {cat}
            </Box>
          ))}
        </Box>

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
            pt: "40px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <Box>
            <Box
              component="p"
              sx={{ color: "var(--muted)", fontSize: 15, mb: "4px" }}
            >
              All prices are starting estimates. Custom projects are quoted individually.
            </Box>
            <Box component="p" sx={{ color: "var(--muted)", fontSize: 13 }}>
              Verified against Sri Lankan tech industry standards.
            </Box>
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
              borderRadius: "100px",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              background: "var(--text)",
              color: "var(--bg)",
              flexShrink: 0,
              transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              "&:hover": {
                background: "var(--accent)",
                boxShadow: "0 10px 40px rgba(var(--accent-rgb),0.3)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Get a Free Quote →
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
      onMouseMove={handleMouseMove}
      className="price-card"
      sx={{
        borderRadius: "24px",
        background: highlighted
          ? "linear-gradient(135deg, rgba(var(--accent-rgb),0.07) 0%, rgba(var(--accent-2-rgb),0.07) 100%)"
          : "var(--surface)",
        border: highlighted
          ? "1px solid rgba(var(--accent-rgb),0.35)"
          : "1px solid var(--border)",
        p: { xs: "32px 24px", md: "40px" },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(var(--accent-rgb),0.10), transparent 40%)",
          opacity: 0,
          transition: "opacity 0.5s",
          pointerEvents: "none",
        },
        "&:hover": {
          borderColor: "var(--border-hi)",
          transform: "translateY(-6px)",
          boxShadow: `0 30px 80px ${tierColor}25`,
          "&::before": { opacity: 1 },
        },
      }}
    >
      {/* Popular badge */}
      {highlighted && (
        <Box
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            px: "12px",
            py: "5px",
            borderRadius: "100px",
            background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
            fontSize: 10,
            fontWeight: 700,
            color: "var(--bg)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Popular
        </Box>
      )}

      {/* Tier badge */}
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "10px", mb: "16px" }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: tierColor,
            boxShadow: `0 0 14px ${tierColor}90`,
            flexShrink: 0,
          }}
        />
        <Box
          component="span"
          sx={{
            fontSize: 12,
            fontWeight: 700,
            color: tierColor,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}
        >
          {tier}
        </Box>
      </Box>

      {/* Label */}
      <Box
        component="p"
        sx={{ fontSize: 14, color: "var(--muted)", mb: "20px", lineHeight: 1.5 }}
      >
        {label}
      </Box>

      {/* Price */}
      <Box
        sx={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(16px, 2vw, 22px)",
          fontWeight: 700,
          color: "var(--text)",
          mb: "28px",
          lineHeight: 1.3,
          letterSpacing: "-0.02em",
          pb: "28px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {price}
      </Box>

      {/* Features */}
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          flex: 1,
        }}
      >
        {features.map((feat) => (
          <Box
            component="li"
            key={feat}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              fontSize: 14,
              color: "var(--muted)",
              lineHeight: 1.5,
            }}
          >
            <Box
              component="span"
              sx={{
                color: tierColor,
                flexShrink: 0,
                lineHeight: 1.5,
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              ✓
            </Box>
            {feat}
          </Box>
        ))}
      </Box>

      {/* CTA */}
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
          py: "13px",
          borderRadius: "100px",
          border: `1px solid ${tierColor}50`,
          background: `${tierColor}12`,
          color: tierColor,
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          "&:hover": {
            background: tierColor,
            color: "var(--bg)",
            boxShadow: `0 10px 40px ${tierColor}45`,
            transform: "translateY(-2px)",
          },
        }}
      >
        Get Started →
      </Box>
    </Box>
  );
}
