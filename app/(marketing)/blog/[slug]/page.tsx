import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/sections/PageHero";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import ReadingProgress from "@/components/ui/ReadingProgress";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const posts: Record<string, { tag: string; title: string; excerpt: string; date: string; readTime: string }> = {
  "how-we-cut-deploys-20x":      { tag: "Engineering", title: "How We Reduced Deploy Times 20×",                  excerpt: "A deep dive into the CI/CD rewrite that turned a 40-minute pipeline into a 2-minute one.", date: "2026-03-10", readTime: "12 min read" },
  "building-production-rag":     { tag: "AI",          title: "Building Production RAG: What Nobody Tells You",   excerpt: "Chunking strategies, embedding models, retrieval tricks, and the evals that matter.",     date: "2026-02-22", readTime: "18 min read" },
  "kubernetes-cost-optimisation":{ tag: "Cloud",       title: "Kubernetes Cost Optimisation: A Practical Guide",  excerpt: "How we cut a client’s AWS bill by 60% without touching their product.",                    date: "2026-01-15", readTime: "15 min read" },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  // BlogPosting JSON-LD per spec §27.7
  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Nextora Infotech" },
    publisher: {
      "@type": "Organization",
      name: "Nextora Infotech",
      logo: { "@type": "ImageObject", url: "https://nextora.lk/logo.png" },
    },
    mainEntityOfPage: `https://nextora.lk/blog/${slug}`,
    articleSection: post.tag,
  };

  // 2 most recent related posts (excluding current)
  const related = Object.entries(posts)
    .filter(([s]) => s !== slug)
    .map(([s, p]) => ({ slug: s, ...p }))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 2);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ReadingProgress />
      <Navbar />
      <main id="main">
        <PageHero
          size="compact"
          eyebrow={`${post.tag} · ${formattedDate} · ${post.readTime}`}
          title={post.title}
          subtitle={post.excerpt}
        >
          <Link
            href="/blog"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontSize: 15,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            ← All posts
          </Link>
        </PageHero>

        <Box component="section" sx={{ pt: { xs: "32px", md: "48px" }, pb: { xs: "64px", md: "96px" }, background: "var(--bg)" }}>
          <Container maxWidth="md" sx={{ px: { xs: "24px", md: "48px" } }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
            <Box component="p" sx={{ fontSize: 17, color: "var(--grey-1)", lineHeight: 1.7, maxWidth: "65ch" }}>
              Full article content coming soon. In the meantime,{" "}
              <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "4px" }}>
                reach out to the team
              </Link>{" "}
              to discuss this topic in depth.
            </Box>
          </Container>
        </Box>

        {/* Related posts */}
        <Box component="section" sx={{ py: { xs: "64px", md: "96px" }, background: "var(--surface)", borderTop: "1px solid var(--grey-2)" }}>
          <Container maxWidth="md" sx={{ px: { xs: "24px", md: "48px" } }}>
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
              Keep reading
            </Box>
            <Box
              component="h2"
              sx={{
                fontSize: { xs: 28, md: 36 },
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                mb: "32px",
              }}
            >
              Related posts
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: "24px" }}>
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="related-card"
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                  <Box
                    sx={{
                      p: "24px",
                      borderRadius: "20px",
                      background: "var(--bg)",
                      transition: "all 240ms ease-out",
                      "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" },
                    }}
                  >
                    <Box component="span" sx={{ fontSize: 12, color: "var(--grey-1)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, display: "block", mb: "8px" }}>
                      {p.tag}
                    </Box>
                    <Box component="h3" sx={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--ink)", mb: "8px", lineHeight: 1.3, transition: "color 240ms ease-out" }}>
                      {p.title}
                    </Box>
                    <Box component="p" sx={{ color: "var(--grey-1)", fontSize: 15, lineHeight: 1.55 }}>
                      {p.excerpt}
                    </Box>
                  </Box>
                </Link>
              ))}
            </Box>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  );
}
