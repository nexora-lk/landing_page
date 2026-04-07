import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Nextora. Book a 30-minute strategy call with our founding team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Box
          component="section"
          sx={{
            pt: { xs: "140px", md: "180px" },
            pb: { xs: "80px", md: "120px" },
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(var(--accent-rgb),0.10) 0%, transparent 55%)",
              pointerEvents: "none",
            }}
          />
          <Container maxWidth="lg" sx={{ px: { xs: "20px", md: "32px" }, position: "relative", zIndex: 1 }}>
            <Box sx={{ textAlign: "center", mb: "60px" }}>
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
                Get in touch
              </Box>
              <Box
                component="h1"
                sx={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(40px, 6vw, 80px)",
                  fontWeight: 700,
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                  mb: "20px",
                }}
              >
                Start a{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Project
                </Box>
              </Box>
              <Box
                component="p"
                sx={{ fontSize: 18, color: "var(--muted)", fontWeight: 300, maxWidth: 560, mx: "auto" }}
              >
                Book a 30-minute strategy call with our founding team. We&apos;ll review your stack, goals, and timeline — no pitch decks.
              </Box>
            </Box>

            <ContactForm />
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  );
}