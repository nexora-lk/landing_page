import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import PageHero from "@/components/sections/PageHero";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work from Nextora Infotech — real client projects shipped end-to-end by the founders.",
  alternates: { canonical: "/work" },
};

type Project = { slug: string; tag: string; title: string; desc: string; image?: string };

const projects: Project[] = [
  {
    slug: "prestige-glamour-payroll",
    tag: "HR · Internal Tool",
    title: "Prestige Glamour — Payroll",
    desc: "Custom salary management software for the Prestige Glamour group.",
  },
  {
    slug: "prestige-glamour-website",
    tag: "Corporate · Website",
    title: "Prestige Glamour — Website",
    desc: "Group-wide corporate website redesign with CMS.",
  },
  {
    slug: "nextconstation",
    tag: "Web · Marketing Site",
    title: "Nextconstation",
    desc: "Marketing website built end-to-end — design, dev, deploy.",
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Featured work"
          title="Real builds. Real clients."
          subtitle="A small but growing portfolio — every project shipped end-to-end by the founding team."
        />

        <Box component="section" sx={{ pb: { xs: "96px", md: "128px" }, background: "var(--bg)" }}>
          <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: { xs: "32px", md: "48px" } }}>
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="work-card-link"
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                  <Box className="shot" sx={{ background: "var(--surface)", borderRadius: "24px", p: "24px", mb: "20px", transition: "box-shadow 240ms ease-out" }}>
                    <Box
                      sx={{
                        aspectRatio: "16 / 10",
                        borderRadius: "12px",
                        background: p.image
                          ? `center/cover no-repeat url(${p.image})`
                          : "linear-gradient(135deg, rgba(0,113,227,0.12) 0%, rgba(0,113,227,0.04) 100%)",
                        display: "grid",
                        placeItems: "center",
                        color: "var(--grey-1)",
                        fontSize: 13,
                        fontWeight: 500,
                      }}
                    >
                      {!p.image && "Screenshot coming soon"}
                    </Box>
                  </Box>
                  <Box sx={{ fontSize: 12, color: "var(--grey-1)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, mb: "8px" }}>
                    {p.tag}
                  </Box>
                  <Box component="h2" sx={{ fontSize: 28, fontWeight: 600, mb: "8px", letterSpacing: "-0.01em", color: "var(--ink)", lineHeight: 1.25 }}>
                    {p.title}
                  </Box>
                  <Box component="p" sx={{ color: "var(--grey-1)", fontSize: 17, lineHeight: 1.6 }}>
                    {p.desc}
                  </Box>
                </Link>
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
