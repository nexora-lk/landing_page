import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/sections/PageHero";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Nextora. Book a 30-minute strategy call with the founding team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Get in touch"
          title="Start a project."
          subtitle="Book a 30-minute call with the founders. We’ll review your goals, scope and timeline — no pitch decks."
        />

        <Box component="section" sx={{ pb: { xs: "96px", md: "128px" }, background: "var(--bg)" }}>
          <Container maxWidth="md" sx={{ px: { xs: "24px", md: "48px" } }}>
            <ContactForm />
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  );
}
