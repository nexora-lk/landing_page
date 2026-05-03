import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work from Nextora Infotech — real client projects shipped by our young IT team.",
  alternates: { canonical: "/work" },
};

const projects = [
  { slug: "prestige-glamour-payroll", gradient: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)", tag: "HR · Internal Tool", title: "Prestige Glamour — Payroll", desc: "Custom salary management software for the Prestige Glamour group of companies." },
  { slug: "prestige-glamour-website", gradient: "linear-gradient(135deg, var(--accent-2) 0%, var(--accent-3) 100%)", tag: "Corporate · Website", title: "Prestige Glamour — Website", desc: "Group-wide corporate website redesign with modern brand presence and CMS." },
  { slug: "nextconstation", gradient: "linear-gradient(135deg, var(--accent-3) 0%, var(--accent) 100%)", tag: "Web · Marketing Site", title: "Nextconstation", desc: "Marketing website built end-to-end — design, development, deployment." },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ paddingTop: "clamp(140px, 12vw, 180px)", paddingBottom: 80, position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(var(--accent-rgb),0.10) 0%, transparent 55%)", pointerEvents: "none" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: 13, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, marginBottom: 16, display: "block" }}>Featured work</span>
            <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 0.95, marginBottom: 24 }}>Real builds. Real clients.</h1>
            <p style={{ fontSize: 20, color: "var(--muted)", maxWidth: 600, fontWeight: 300 }}>A small but growing portfolio — every project shipped by the founding team.</p>
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
