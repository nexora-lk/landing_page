import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies from Nextora — real projects, real outcomes.",
  alternates: { canonical: "/work" },
};

const projects = [
  { slug: "velocity-ledger", gradient: "linear-gradient(135deg, #00d4ff 0%, #7c5cff 100%)", tag: "FinTech · Platform", title: "Velocity Ledger", desc: "Real-time settlement engine processing 4M transactions daily." },
  { slug: "orbit-intelligence", gradient: "linear-gradient(135deg, #7c5cff 0%, #ff5cf0 100%)", tag: "AI · SaaS", title: "Orbit Intelligence", desc: "Agentic research copilot deployed across 40+ enterprise teams." },
  { slug: "pulse-cloud", gradient: "linear-gradient(135deg, #ff5cf0 0%, #00d4ff 100%)", tag: "Health · Infra", title: "Pulse Cloud", desc: "HIPAA-compliant data mesh serving 200+ hospital networks." },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ paddingTop: "clamp(140px, 12vw, 180px)", paddingBottom: 80, position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.10) 0%, transparent 55%)", pointerEvents: "none" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: 13, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, marginBottom: 16, display: "block" }}>Featured work</span>
            <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 0.95, marginBottom: 24 }}>Selected builds.</h1>
            <p style={{ fontSize: 20, color: "var(--muted)", maxWidth: 600, fontWeight: 300 }}>Real projects, real outcomes — from the last 12 months.</p>
          </div>
        </section>

        <section style={{ paddingBottom: "clamp(80px, 10vw, 120px)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {projects.map((p) => (
                <Link key={p.slug} href={`/work/${p.slug}`} className="work-card-link" style={{ borderRadius: 20, overflow: "hidden", background: "var(--surface)", border: "1px solid var(--border)", aspectRatio: "4/5", textDecoration: "none", color: "inherit", display: "block", backdropFilter: "blur(20px)", transition: "all 0.5s" }}>
                  <div style={{ height: "60%", position: "relative", overflow: "hidden", background: p.gradient }} />
                  <div style={{ padding: 28 }}>
                    <div style={{ fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: 10 }}>{p.tag}</div>
                    <h2 style={{ fontFamily: "var(--font-syne)", fontSize: 22, fontWeight: 600, marginBottom: 8, letterSpacing: "-0.02em" }}>{p.title}</h2>
                    <p style={{ color: "var(--muted)", fontSize: 14 }}>{p.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
