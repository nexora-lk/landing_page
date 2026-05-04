import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import PageHero from "@/components/sections/PageHero";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "AI Search & SEO",
  description: "Get found in ChatGPT, Gemini and Google. GEO, schema and Core Web Vitals from a founder-led team.",
  alternates: { canonical: "/services/ai" },
};

const items = [
  "Get found in ChatGPT, Gemini and Perplexity (GEO)",
  "Structured FAQ content + JSON-LD schema",
  "On-page and technical SEO",
  "Core Web Vitals tuning",
  "AI-friendly copywriting",
  "Search Console + Analytics setup",
];

export default function AIPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="AI Search & SEO"
          titleParts={{ plain: "Get found inside", accent: "ChatGPT, Gemini and Google." }}
          subtitle="GEO is the new SEO. We make sure both AI search engines and traditional search engines know exactly when to recommend you."
        />

        <Box component="section" sx={{ pb: { xs: "96px", md: "128px" }, background: "var(--bg)" }}>
          <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: "16px" }}>
              {items.map((item) => (
                <Box
                  key={item}
                  sx={{
                    p: "24px",
                    borderRadius: "16px",
                    background: "var(--surface)",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                  <Box component="span" sx={{ fontWeight: 500, fontSize: 16, color: "var(--ink)" }}>
                    {item}
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
