import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/sections/PageHero";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const popular = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Featured work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Book a free call" },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="404"
          title="We can’t find that page."
          subtitle="The link may be broken, or the page may have moved. Try one of the spots below — or get in touch and we’ll help you find what you’re after."
        />

        <Box component="section" sx={{ pb: { xs: "96px", md: "128px" }, background: "var(--bg)" }}>
          <Container maxWidth="md" sx={{ px: { xs: "24px", md: "48px" } }}>
            <Box
              component="h2"
              sx={{
                fontSize: 12,
                color: "var(--grey-1)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                mb: "20px",
              }}
            >
              Popular pages
            </Box>
            <Box sx={{ borderTop: "1px solid var(--grey-2)" }}>
              {popular.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 0",
                    borderBottom: "1px solid var(--grey-2)",
                    textDecoration: "none",
                    color: "var(--ink)",
                    fontSize: 19,
                    fontWeight: 500,
                  }}
                >
                  <span>{p.label}</span>
                  <span style={{ color: "var(--accent)", fontSize: 20 }}>→</span>
                </Link>
              ))}
            </Box>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  );
}
