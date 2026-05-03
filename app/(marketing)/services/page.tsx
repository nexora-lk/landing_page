import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Web, mobile, AI and cloud — everything a young business needs to launch online and grow, built by a founder-led team at startup speed.",
  alternates: { canonical: "/services" },
};

const services = [
  { href: "/services", icon: "◆", num: "/ 01", title: "Web Design & Development", desc: "Business sites, SaaS dashboards, e-commerce and high-converting landing pages — built with Next.js, React and Tailwind.", tags: ["Next.js", "React", "Tailwind", "Flask"] },
  { href: "/services", icon: "▲", num: "/ 02", title: "Mobile App Development", desc: "Cross-platform apps in Flutter or React Native — clean UI, smooth UX, fully wired to your backend.", tags: ["Flutter", "React Native", "iOS", "Android"] },
  { href: "/services/ai", icon: "◈", num: "/ 03", title: "AI Solutions & Automation", desc: "LLM-powered features, RAG pipelines and AI workflows that plug into the apps your team already uses.", tags: ["OpenAI", "RAG", "Automation", "GEO"] },
  { href: "/services/cloud", icon: "☁", num: "/ 04", title: "Cloud, Hosting & DevOps", desc: "Domain setup, CI/CD, deploys to Vercel or AWS, plus monitoring and maintenance for the long haul.", tags: ["Vercel", "AWS", "Docker", "GitHub Actions"] },
  { href: "/services", icon: "❖", num: "/ 05", title: "UI/UX & Branding", desc: "Wireframes, prototypes, design systems and modern landing pages — designed in Figma, ready for handoff.", tags: ["Figma", "Design Systems", "Prototyping"] },
  { href: "/services", icon: "⬢", num: "/ 06", title: "SEO & GEO Content", desc: "On-page SEO, Core Web Vitals, plus AI-search visibility in ChatGPT, Gemini and Perplexity.", tags: ["SEO", "GEO", "Schema", "Analytics"] },
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
              Everything to launch.{" "}
              <span style={{ color: "var(--accent)" }}>One small team.</span>
            </h1>
            <p style={{ fontSize: 20, color: "var(--muted)", maxWidth: 620, fontWeight: 300 }}>Web, mobile, AI and cloud — handled end-to-end by the founders. Startup pricing, senior-level craft, no agency middlemen.</p>
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
