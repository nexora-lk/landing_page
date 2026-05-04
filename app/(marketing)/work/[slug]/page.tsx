import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import PageHero from "@/components/sections/PageHero";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

type CaseStudy = {
  tag: string;
  title: string;
  desc: string;
  /** 3 short sentences. */
  problem: string[];
  /** 3–5 short bullets. */
  built: string[];
  /** 1–2 outcome metrics. */
  metrics: { value: string; label: string }[];
  meta: { client: string; year: string; role: string; stack: string };
  image?: string;
  imageFinal?: string;
};

const projects: Record<string, CaseStudy> = {
  "prestige-glamour-payroll": {
    tag: "HR · Internal Tool",
    title: "Prestige Glamour — Payroll",
    desc:
      "Custom salary management software for the Prestige Glamour group of companies — handling employees, payslips and monthly payroll cycles in one place.",
    problem: [
      "HR was running monthly payroll across multiple companies in scattered spreadsheets.",
      "Payslip generation and tax calculations took days and were error-prone.",
      "Finance and HR had no shared, role-based view of the same source of truth.",
    ],
    built: [
      "Single multi-company payroll dashboard with employee, salary and deduction management.",
      "Automated payslip generation with PDF export and bulk email delivery.",
      "Role-based access — HR, finance, owner — with audit trails on every change.",
      "Custom tax and EPF/ETF rules per company and per employee class.",
      "Backed by a secure Postgres database with daily snapshots.",
    ],
    metrics: [
      { value: "1 app", label: "Replaced 6+ spreadsheets" },
      { value: "~4 days", label: "Cut from monthly payroll cycle" },
    ],
    meta: { client: "Prestige Glamour Group", year: "2025", role: "Design + Build", stack: "Next.js · Postgres · TailwindCSS" },
  },
  "prestige-glamour-website": {
    tag: "Corporate · Website",
    title: "Prestige Glamour — Website",
    desc:
      "Group-wide corporate website redesign — modern brand presence covering every company under the Prestige Glamour umbrella.",
    problem: [
      "Each subsidiary had its own outdated site, with no consistent brand or navigation.",
      "Stakeholders couldn't update content without a developer in the loop.",
      "Mobile readers bounced — old sites loaded slowly and looked broken on phones.",
    ],
    built: [
      "Unified brand and design system across every company in the group.",
      "Next.js front-end with a lightweight headless CMS for non-technical editors.",
      "SEO-ready structure with schema markup and clean URL architecture.",
      "Fast, mobile-first layouts tuned for Core Web Vitals.",
    ],
    metrics: [
      { value: "1 brand", label: "Across every subsidiary" },
      { value: "<2s", label: "First-paint on mobile" },
    ],
    meta: { client: "Prestige Glamour Group", year: "2025", role: "Design + Build", stack: "Next.js · Headless CMS · TailwindCSS" },
  },
  "nextconstation": {
    tag: "Web · Marketing Site",
    title: "Nextconstation",
    desc:
      "Marketing website built end-to-end — UI/UX design, development and deployment delivered as a complete package.",
    problem: [
      "The team needed a marketing site live in weeks, not quarters.",
      "Existing material was rough — no clear value prop, no visual identity.",
      "They wanted a future-proof stack they could extend without re-platforming.",
    ],
    built: [
      "Brand direction, wireframes and final UI in Figma — signed off in days, not weeks.",
      "Production build in Next.js with reusable section components.",
      "GEO-ready content structure (FAQ + schema) so AI search engines surface it.",
      "Vercel deploy with CI/CD on every push to main.",
    ],
    metrics: [
      { value: "Weeks", label: "From kick-off to live" },
      { value: "100%", label: "Designed + built in-house" },
    ],
    meta: { client: "Nextconstation", year: "2025", role: "Design + Build", stack: "Next.js · Figma · Vercel" },
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

/* ─── Reusable bits ───────────────────────────────────────────── */

function Shot({ src, label }: { src?: string; label: string }) {
  return (
    <Box sx={{ background: "var(--surface)", borderRadius: "24px", p: { xs: "20px", md: "32px" } }}>
      <Box
        sx={{
          aspectRatio: "16 / 10",
          borderRadius: "12px",
          background: src
            ? `center/cover no-repeat url(${src})`
            : "linear-gradient(135deg, rgba(0,113,227,0.12) 0%, rgba(0,113,227,0.04) 100%)",
          display: "grid",
          placeItems: "center",
          color: "var(--grey-1)",
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        {!src && label}
      </Box>
    </Box>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        fontSize: 12,
        color: "var(--grey-1)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        fontWeight: 600,
        mb: "16px",
        display: "block",
      }}
    >
      {children}
    </Box>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="h2"
      sx={{
        fontSize: { xs: 28, md: 36 },
        fontWeight: 600,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        color: "var(--ink)",
        mb: "32px",
      }}
    >
      {children}
    </Box>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */

export default async function WorkCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          size="compact"
          eyebrow={project.tag}
          title={project.title}
          subtitle={project.desc}
        >
          <Link
            href="/work"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontSize: 15,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            ← All work
          </Link>
        </PageHero>

        {/* Breadcrumbs + Hero shot */}
        <Box component="section" sx={{ pt: { xs: "16px", md: "24px" }, pb: { xs: "64px", md: "96px" }, background: "var(--bg)" }}>
          <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Work", href: "/work" },
                { label: project.title },
              ]}
            />
            <Shot src={project.image} label="Project screenshot coming soon" />
          </Container>
        </Box>

        {/* Project meta strip */}
        <Box component="section" sx={{ pb: { xs: "64px", md: "96px" }, background: "var(--bg)" }}>
          <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                gap: { xs: "24px", md: "0" },
                py: "32px",
                borderTop: "1px solid var(--grey-2)",
                borderBottom: "1px solid var(--grey-2)",
              }}
            >
              {[
                ["Client", project.meta.client],
                ["Year",   project.meta.year],
                ["Role",   project.meta.role],
                ["Stack",  project.meta.stack],
              ].map(([k, v]) => (
                <Box
                  key={k}
                  sx={{
                    pl: { xs: 0, md: "32px" },
                    borderLeft: { xs: "none", md: k === "Client" ? "none" : "1px solid var(--grey-2)" },
                    minWidth: 0,
                  }}
                >
                  <Box component="span" sx={{ fontSize: 12, color: "var(--grey-1)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, display: "block", mb: "6px" }}>
                    {k}
                  </Box>
                  <Box component="span" sx={{ fontSize: { xs: 15, md: 16 }, color: "var(--ink)", fontWeight: 500, display: "block", overflowWrap: "anywhere" }}>
                    {v}
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Problem */}
        <Box component="section" sx={{ pb: { xs: "96px", md: "128px" }, background: "var(--bg)" }}>
          <Container maxWidth="md" sx={{ px: { xs: "24px", md: "48px" } }}>
            <SectionLabel>The problem</SectionLabel>
            <H2>What they were dealing with.</H2>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {project.problem.map((p) => (
                <Box
                  key={p}
                  component="p"
                  sx={{
                    fontSize: 19,
                    color: "var(--grey-1)",
                    lineHeight: 1.6,
                    maxWidth: "65ch",
                  }}
                >
                  {p}
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* What we built */}
        <Box component="section" sx={{ pb: { xs: "96px", md: "128px" }, background: "var(--surface)", py: { xs: "96px", md: "128px" } }}>
          <Container maxWidth="md" sx={{ px: { xs: "24px", md: "48px" } }}>
            <SectionLabel>What we built</SectionLabel>
            <H2>The solution, in pieces.</H2>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {project.built.map((b) => (
                <Box
                  key={b}
                  component="li"
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    fontSize: 17,
                    color: "var(--ink)",
                    lineHeight: 1.6,
                  }}
                >
                  <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", mt: "10px", flexShrink: 0 }} />
                  {b}
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Results / metrics */}
        <Box component="section" sx={{ py: { xs: "96px", md: "128px" }, background: "var(--bg)" }}>
          <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
            <SectionLabel>Outcome</SectionLabel>
            <H2>Results.</H2>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: "16px", mb: "48px" }}>
              {project.metrics.map((m) => (
                <Box
                  key={m.label}
                  sx={{
                    p: "32px",
                    borderRadius: "20px",
                    background: "var(--surface)",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: { xs: 40, md: 56 },
                      fontWeight: 600,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.05,
                      color: "var(--accent)",
                      mb: "12px",
                    }}
                  >
                    {m.value}
                  </Box>
                  <Box component="p" sx={{ fontSize: 17, color: "var(--grey-1)", lineHeight: 1.5 }}>
                    {m.label}
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Final big shot */}
            <Shot src={project.imageFinal} label="Final shot coming soon" />
          </Container>
        </Box>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
