import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import PageHero from "@/components/sections/PageHero";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "Cloud & Performance",
  description: "Hosting, deploys and DevOps for startups — Vercel, AWS, Docker and CI/CD that scale.",
  alternates: { canonical: "/services/cloud" },
};

const items = [
  "Vercel & AWS deploys",
  "CI/CD with GitHub Actions",
  "Domain & DNS setup",
  "Docker containers",
  "Uptime monitoring",
  "Founder-direct support",
];

export default function CloudPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Cloud & Performance"
          titleParts={{ plain: "Hosting and deploys", accent: "that grow with you." }}
          subtitle="Domain, hosting, automatic updates and uptime monitoring — startup-sized infrastructure done right the first time."
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
