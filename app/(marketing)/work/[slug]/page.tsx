import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import Container from "@mui/material/Container";
import Link from "next/link";

const projects: Record<string, { gradient: string; tag: string; title: string; desc: string; results: string[] }> = {
  "prestige-glamour-payroll": {
    gradient: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
    tag: "HR · Internal Tool",
    title: "Prestige Glamour — Payroll",
    desc: "Custom salary management software for the Prestige Glamour group of companies — handling employees, payslips and monthly payroll cycles in one place.",
    results: [
      "Multi-company payroll in one app",
      "Automated payslip generation",
      "Role-based access for HR & finance",
      "Replaces manual spreadsheets",
    ],
  },
  "prestige-glamour-website": {
    gradient: "linear-gradient(135deg, var(--accent-2) 0%, var(--accent-3) 100%)",
    tag: "Corporate · Website",
    title: "Prestige Glamour — Website",
    desc: "Group-wide corporate website redesign — modern brand presence covering every company under the Prestige Glamour umbrella.",
    results: [
      "Unified brand across companies",
      "Built with Next.js + Tailwind",
      "SEO-ready content structure",
      "Fast, mobile-first design",
    ],
  },
  "nextconstation": {
    gradient: "linear-gradient(135deg, var(--accent-3) 0%, var(--accent) 100%)",
    tag: "Web · Marketing Site",
    title: "Nextconstation",
    desc: "Marketing website built end-to-end — UI/UX design, development and deployment delivered as a complete package.",
    results: [
      "Design-to-deploy in weeks",
      "Optimised Core Web Vitals",
      "Deployed on Vercel + CI/CD",
      "GEO-ready content structure",
    ],
  },
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
