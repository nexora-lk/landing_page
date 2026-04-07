import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing from the Nextora engineering team — cloud, AI, and software craft.",
  alternates: { canonical: "/blog" },
};

const posts = [
  { slug: "how-we-cut-deploys-20x", tag: "Engineering", title: "How We Reduced Deploy Times 20x at Velocity Finance", excerpt: "A deep dive into the CI/CD rewrite that turned a 40-minute pipeline into a 2-minute one.", date: "2026-03-10" },
  { slug: "building-production-rag", tag: "AI", title: "Building Production RAG: What Nobody Tells You", excerpt: "Chunking strategies, embedding models, retrieval tricks, and the evals that matter.", date: "2026-02-22" },
  { slug: "kubernetes-cost-optimisation", tag: "Cloud", title: "Kubernetes Cost Optimisation: A Practical Guide", excerpt: "How we cut a client's AWS bill by 60% without touching their product.", date: "2026-01-15" },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ paddingTop: "clamp(140px, 12vw, 180px)", paddingBottom: 80, position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 55%)", pointerEvents: "none" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: 13, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, marginBottom: 16, display: "block" }}>Blog</span>
            <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 0.95, marginBottom: 24 }}>Technical writing.</h1>
            <p style={{ fontSize: 20, color: "var(--muted)", maxWidth: 560, fontWeight: 300 }}>Deeply technical posts from the Nextora engineering team.</p>
          </div>
        </section>

        <section style={{ paddingBottom: "clamp(80px, 10vw, 120px)" }}>
          <div className="container">
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-row" style={{ padding: "40px 0", borderBottom: "1px solid var(--border)", textDecoration: "none", color: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <span style={{ padding: "3px 10px", borderRadius: 100, background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", fontSize: 12, color: "var(--accent)", fontWeight: 500 }}>{post.tag}</span>
                      <time dateTime={post.date} style={{ color: "var(--muted)", fontSize: 13 }}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                    </div>
                    <h2 className="blog-title" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 10, transition: "color 0.3s" }}>{post.title}</h2>
                    <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 680 }}>{post.excerpt}</p>
                  </div>
                  <span style={{ fontSize: 24, color: "var(--muted)", flexShrink: 0 }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
