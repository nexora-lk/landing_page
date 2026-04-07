import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "AI & Automation",
  description: "LLM pipelines, agentic workflows, and production-grade ML systems that ship real business outcomes.",
  alternates: { canonical: "/services/ai" },
};

export default function AIPage() {
  return (
    <>
      <Navbar />
      <main>
        <Box component="section" sx={{ pt: { xs: "140px", md: "180px" }, pb: "80px", position: "relative" }}>
          <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 0%, rgba(var(--accent-2-rgb),0.15) 0%, transparent 55%)", pointerEvents: "none" }} />
          <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" }, position: "relative", zIndex: 1 }}>
            <Box component="span" sx={{ fontSize: 13, color: "var(--accent-2)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, mb: "16px", display: "block" }}>◈ AI & Automation</Box>
            <Box component="h1" sx={{ fontFamily: "var(--font-syne)", fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 0.95, mb: "28px", maxWidth: 800 }}>
              AI that ships{" "}
              <Box component="span" sx={{ background: "linear-gradient(135deg, var(--accent-2), var(--accent-3))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>real outcomes.</Box>
            </Box>
            <Box component="p" sx={{ fontSize: 20, color: "var(--muted)", maxWidth: 620, fontWeight: 300, lineHeight: 1.7 }}>
              We build production-grade AI systems — not demos. LLM pipelines, RAG architectures, agentic workflows, and MLOps that scale.
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ pb: { xs: "80px", md: "120px" } }}>
          <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: "24px" }}>
              {["LLM pipeline design", "RAG architectures", "Agentic workflows", "Fine-tuning & RLHF", "MLOps & monitoring", "Model evaluation"].map((item) => (
                <Box key={item} sx={{ p: "32px", borderRadius: "16px", background: "var(--surface)", border: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "14px" }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent-2)", flexShrink: 0, boxShadow: "0 0 10px var(--accent-2)" }} />
                  <Box component="span" sx={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: 16 }}>{item}</Box>
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
