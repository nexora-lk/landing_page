import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for website development, mobile apps, software systems, and extra services — tailored for Sri Lanka's market.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <Box
          component="section"
          sx={{
            pt: { xs: "140px", md: "180px" },
            pb: { xs: "20px", md: "40px" },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(124,92,255,0.08) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />
          <Container
            maxWidth="xl"
            sx={{ px: { xs: "20px", md: "32px" }, position: "relative", zIndex: 1 }}
          >
            <Box
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
              Pricing
            </Box>
            <Box
              component="h1"
              sx={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(48px, 7vw, 96px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
                mb: "24px",
                maxWidth: 900,
              }}
            >
              Clear prices.{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 60%, var(--accent-3) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Real value.
              </Box>
            </Box>
            <Box
              component="p"
              sx={{
                fontSize: 20,
                color: "var(--muted)",
                maxWidth: 600,
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              No hidden fees, no surprise invoices. Choose the package that fits
              your vision and budget — or tell us what you need and we&apos;ll
              build a custom quote.
            </Box>
          </Container>
        </Box>

        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
