import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import Container from "@mui/material/Container";
import Link from "next/link";

const projects: Record<string, { gradient: string; tag: string; title: string; desc: string; results: string[] }> = {
  "velocity-ledger": { gradient: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)", tag: "FinTech · Platform", title: "Velocity Ledger", desc: "Real-time settlement engine processing 4M transactions daily.", results: ["4M+ daily transactions", "99.99% uptime SLA", "Deploy time reduced 20x", "SOC 2 Type II certified"] },
  "orbit-intelligence": { gradient: "linear-gradient(135deg, var(--accent-2) 0%, var(--accent-3) 100%)", tag: "AI · SaaS", title: "Orbit Intelligence", desc: "Agentic research copilot deployed across 40+ enterprise teams.", results: ["40+ enterprise deployments", "85% reduction in research time", "RAG over 10M documents", "Multi-agent orchestration"] },
  "pulse-cloud": { gradient: "linear-gradient(135deg, var(--accent-3) 0%, var(--accent) 100%)", tag: "Health · Infra", title: "Pulse Cloud", desc: "HIPAA-compliant data mesh serving 200+ hospital networks.", results: ["200+ hospital networks", "HIPAA & SOC 2 compliant", "Zero data breaches", "Sub-100ms query latency"] },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return {};
  return { title: project.title, description: project.desc, alternates: { canonical: `/work/${slug}` } };
}

export default async function WorkCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main>
        <section style={{ paddingTop: "clamp(140px, 12vw, 180px)", paddingBottom: 80 }}>
          <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
            <Link href="/work" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 40 }}>
              ← All work
            </Link>
            <span style={{ fontSize: 13, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, marginBottom: 16, display: "block" }}>{project.tag}</span>
            <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1, marginBottom: 24 }}>{project.title}</h1>
            <p style={{ fontSize: 20, color: "var(--muted)", maxWidth: 600, fontWeight: 300 }}>{project.desc}</p>
          </Container>
        </section>

        <div style={{ height: "clamp(280px, 30vw, 480px)", background: project.gradient, position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(var(--text-rgb),0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--text-rgb),0.06) 1px, transparent 1px)", backgroundSize: "40px 40px", mixBlendMode: "overlay" }} />
        </div>

        <section style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
          <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 40 }}>Results</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
              {project.results.map((r) => (
                <div key={r} style={{ padding: 28, borderRadius: 16, background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <p style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: 16 }}>{r}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
