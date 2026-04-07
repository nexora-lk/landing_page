import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Container from "@mui/material/Container";
import Link from "next/link";

const posts: Record<string, { tag: string; title: string; excerpt: string; date: string; readTime: string }> = {
  "how-we-cut-deploys-20x": { tag: "Engineering", title: "How We Reduced Deploy Times 20x at Velocity Finance", excerpt: "A deep dive into the CI/CD rewrite that turned a 40-minute pipeline into a 2-minute one.", date: "2026-03-10", readTime: "12 min read" },
  "building-production-rag": { tag: "AI", title: "Building Production RAG: What Nobody Tells You", excerpt: "Chunking strategies, embedding models, retrieval tricks, and the evals that matter.", date: "2026-02-22", readTime: "18 min read" },
  "kubernetes-cost-optimisation": { tag: "Cloud", title: "Kubernetes Cost Optimisation: A Practical Guide", excerpt: "How we cut a client's AWS bill by 60% without touching their product.", date: "2026-01-15", readTime: "15 min read" },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/blog/${slug}` } };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        <article style={{ paddingTop: "clamp(140px, 12vw, 180px)", paddingBottom: "80px" }}>
          <Container maxWidth="md" sx={{ px: { xs: "20px", md: "32px" } }}>
            <Link href="/blog" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 40 }}>
              ← All posts
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ padding: "3px 10px", borderRadius: 100, background: "rgba(var(--accent-rgb),0.08)", border: "1px solid rgba(var(--accent-rgb),0.2)", fontSize: 12, color: "var(--accent)", fontWeight: 500 }}>{post.tag}</span>
              <time dateTime={post.date} style={{ color: "var(--muted)", fontSize: 13 }}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
              <span style={{ color: "var(--muted)", fontSize: 13 }}>· {post.readTime}</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24 }}>{post.title}</h1>
            <p style={{ fontSize: 20, color: "var(--muted)", fontWeight: 300, lineHeight: 1.7, marginBottom: 48, borderBottom: "1px solid var(--border)", paddingBottom: 48 }}>{post.excerpt}</p>
            <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.8 }}>Full article content coming soon. In the meantime, <Link href="/contact" style={{ color: "var(--accent)" }}>reach out to our team</Link> to discuss this topic in depth.</p>
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
}
