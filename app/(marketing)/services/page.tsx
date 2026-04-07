import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Cloud infrastructure, AI automation, custom software, and cybersecurity — four practices, one integrated team.",
  alternates: { canonical: "/services" },
};

const services = [
  { href: "/services/cloud", icon: "☁", num: "/ 01", title: "Cloud Infrastructure", desc: "Multi-region Kubernetes, observability, and zero-downtime platforms.", tags: ["Kubernetes", "Terraform", "AWS / GCP / Azure"] },
  { href: "/services/ai", icon: "◈", num: "/ 02", title: "AI & Automation", desc: "LLM pipelines, agentic workflows, and production-grade ML systems.", tags: ["LLM Pipelines", "RAG", "Agents", "MLOps"] },
  { href: "/services", icon: "❖", num: "/ 03", title: "Custom Software", desc: "Bespoke platforms, internal tools, and full product builds.", tags: ["Full-stack", "APIs", "Databases", "DevOps"] },
  { href: "/services", icon: "⬢", num: "/ 04", title: "Cybersecurity", desc: "Threat modeling, pen testing, and SOC 2 readiness programs.", tags: ["Pen Testing", "SOC 2", "Zero Trust"] },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ paddingTop: "clamp(140px, 12vw, 180px)", paddingBottom: 60, position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(var(--accent-rgb),0.10) 0%, transparent 55%)", pointerEvents: "none" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: 13, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, marginBottom: 16, display: "block" }}>What we do</span>
            <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 0.95, marginBottom: 24 }}>
              Four practices.{" "}
              <span style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>One team.</span>
            </h1>
            <p style={{ fontSize: 20, color: "var(--muted)", maxWidth: 600, fontWeight: 300 }}>Shipped at the speed of a startup with the rigor of an enterprise.</p>
          </div>
        </section>

        <section style={{ paddingBottom: "clamp(80px, 10vw, 120px)" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {services.map((svc) => (
              <Link key={svc.title} href={svc.href} className="service-row-link" style={{ padding: "clamp(32px, 4vw, 48px)", borderRadius: 20, background: "var(--surface)", border: "1px solid var(--border)", textDecoration: "none", color: "inherit", display: "flex", gap: 40, alignItems: "center", transition: "all 0.4s" }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg, rgba(var(--accent-rgb),0.15), rgba(var(--accent-2-rgb),0.15))", border: "1px solid var(--border)", display: "grid", placeItems: "center", fontSize: 24, flexShrink: 0 }}>{svc.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--font-syne)" }}>{svc.num}</span>
                    <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, letterSpacing: "-0.02em" }}>{svc.title}</h2>
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 560, marginBottom: 16 }}>{svc.desc}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {svc.tags.map((tag) => (
                      <span key={tag} style={{ padding: "4px 12px", borderRadius: 100, background: "rgba(var(--accent-rgb),0.08)", border: "1px solid rgba(var(--accent-rgb),0.2)", fontSize: 12, color: "var(--accent)", fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span style={{ fontSize: 24, color: "var(--muted)" }}>→</span>
              </Link>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
