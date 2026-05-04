import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/sections/PageHero";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes from the Nextora team — web, AI search, performance and shipping.",
  alternates: { canonical: "/blog" },
};

const posts = [
  { slug: "how-we-cut-deploys-20x", tag: "Engineering", title: "How We Reduced Deploy Times 20×", excerpt: "A deep dive into the CI/CD rewrite that turned a 40-minute pipeline into a 2-minute one.", date: "2026-03-10" },
  { slug: "building-production-rag", tag: "AI",          title: "Building Production RAG: What Nobody Tells You", excerpt: "Chunking strategies, embedding models, retrieval tricks, and the evals that matter.", date: "2026-02-22" },
  { slug: "kubernetes-cost-optimisation", tag: "Cloud",  title: "Kubernetes Cost Optimisation: A Practical Guide", excerpt: "How we cut a client's AWS bill by 60% without touching their product.", date: "2026-01-15" },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Blog"
          title="Notes from the team."
          subtitle="Short, honest writing about what we’re building and what we wish we knew sooner."
        />

        <Box component="section" sx={{ pb: { xs: "96px", md: "128px" }, background: "var(--bg)" }}>
          <Container maxWidth="md" sx={{ px: { xs: "24px", md: "48px" } }}>
            <Box sx={{ borderTop: "1px solid var(--grey-2)" }}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-row"
                  style={{ textDecoration: "none", color: "inherit", display: "block", borderBottom: "1px solid var(--grey-2)" }}
                >
                <Box
                  sx={{
                    py: "32px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "24px",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "12px", mb: "12px" }}>
                      <Box component="span" sx={{ fontSize: 12, color: "var(--grey-1)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                        {post.tag}
                      </Box>
                      <Box component="span" sx={{ color: "var(--grey-1)", fontSize: 13 }}>
                        ·
                      </Box>
                      <Box component="time" dateTime={post.date} sx={{ color: "var(--grey-1)", fontSize: 13 }}>
                        {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </Box>
                    </Box>
                    <Box className="blog-title" component="h2" sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 600, letterSpacing: "-0.01em", mb: "8px", color: "var(--ink)", transition: "color 240ms ease-out", lineHeight: 1.25 }}>
                      {post.title}
                    </Box>
                    <Box component="p" sx={{ color: "var(--grey-1)", fontSize: 17, lineHeight: 1.6, maxWidth: "65ch" }}>
                      {post.excerpt}
                    </Box>
                  </Box>
                  <Box component="span" sx={{ fontSize: 22, color: "var(--accent)", flexShrink: 0, display: { xs: "none", sm: "inline" } }}>→</Box>
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
