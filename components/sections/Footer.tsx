import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { tokens } from "@/components/ui/ThemeRegistry";
import { Mail, MapPin } from "lucide-react";

/* Brand icons (Lucide dropped these — small inline SVGs from simple-icons style) */
const SocialSvg = {
  X: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.778 13.019H3.555V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.272V1.723C24 .771 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  GitHub: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  Instagram: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
};

const footerLinks = {
  Company: [
    { label: "About", href: "/#why" },
    { label: "Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "GEO & AI Search", href: "/services/ai" },
    { label: "SEO & Performance", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "Hosting & Deploy", href: "/services/cloud" },
  ],
  Resources: [
    { label: "Case Studies", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "Get a Quote", href: "/contact" },
  ],
};

const socials: { label: string; href: string; svg: React.ReactNode }[] = [
  { label: "Twitter / X", href: "#", svg: SocialSvg.X },
  { label: "LinkedIn",    href: "#", svg: SocialSvg.LinkedIn },
  { label: "GitHub",      href: "#", svg: SocialSvg.GitHub },
  { label: "Instagram",   href: "#", svg: SocialSvg.Instagram },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        pt: "80px",
        pb: "40px",
        borderTop: "1px solid var(--border)",
        background: `rgba(${tokens.bgRgb}, 0.4)`,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
        {/* Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" },
            gap: { xs: "40px", md: "60px" },
            mb: "60px",
          }}
        >
          {/* Brand */}
          <Box>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
              <Image
                src="/logo.png"
                alt="Nextora"
                width={140}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Box
              component="p"
              sx={{ color: "var(--muted)", fontSize: 14, mt: "20px", maxWidth: 340, lineHeight: 1.7 }}
            >
              A young IT studio crafting websites, mobile apps, AI tools and clean
              design — built fast, shipped sharp.
            </Box>

            {/* Contact info */}
            <Box sx={{ mt: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <Box
                component="a"
                href="mailto:hello@nextora.dev"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--muted)",
                  fontSize: 14,
                  textDecoration: "none",
                  transition: "color 0.3s",
                  "&:hover": { color: "var(--accent)" },
                }}
              >
                <Mail size={15} strokeWidth={1.75} />
                hello@nextora.dev
              </Box>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--muted)",
                  fontSize: 14,
                }}
              >
                <MapPin size={15} strokeWidth={1.75} />
                Remote · building globally
              </Box>
            </Box>
          </Box>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <Box key={heading}>
              <Box
                component="h4"
                sx={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 13,
                  fontWeight: 600,
                  mb: "20px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text)",
                }}
              >
                {heading}
              </Box>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {links.map((link) => (
                  <Box component="li" key={link.label} sx={{ mb: "12px" }}>
                    <Link
                      href={link.href}
                      className="nav-link-hover"
                      style={{ color: "var(--muted)", textDecoration: "none", fontSize: 14, transition: "color 0.3s" }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            pt: "32px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            color: "var(--muted)",
            fontSize: 13,
          }}
        >
          <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
            <Box>© {new Date().getFullYear()} Nextora. All rights reserved.</Box>
            <Link href="#" style={{ color: "var(--muted)", textDecoration: "none" }} className="nav-link-hover">
              Privacy
            </Link>
            <Link href="#" style={{ color: "var(--muted)", textDecoration: "none" }} className="nav-link-hover">
              Terms
            </Link>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            {socials.map((s) => (
              <Box
                key={s.label}
                component="a"
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: "var(--accent)",
                    color: "var(--accent)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(var(--accent-rgb),0.15)",
                  },
                }}
              >
                {s.svg}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
