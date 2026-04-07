import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { tokens } from "@/components/ui/ThemeRegistry";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/about#careers" },
    { label: "Press", href: "/about#press" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Cloud", href: "/services/cloud" },
    { label: "AI & ML", href: "/services/ai" },
    { label: "Software", href: "/services" },
    { label: "Security", href: "/services" },
  ],
  Resources: [
    { label: "Case Studies", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Docs", href: "#" },
    { label: "Changelog", href: "#" },
  ],
};

const socials = [
  { label: "X", href: "#", icon: "𝕏" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "GitHub", href: "#", icon: "⌥" },
  { label: "Dribbble", href: "#", icon: "◉" },
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
            gridTemplateColumns: { xs: "1fr 1fr", md: "2fr 1fr 1fr 1fr" },
            gap: { xs: "40px", md: "60px" },
            mb: "60px",
          }}
        >
          {/* Brand */}
          <Box>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "8px",
                  background: "conic-gradient(from 180deg, var(--accent), var(--accent-2), var(--accent))",
                  boxShadow: "var(--glow)",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: "4px",
                    borderRadius: "5px",
                    background: "var(--bg)",
                  },
                }}
              />
              <Box
                component="span"
                sx={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: 24,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                }}
              >
                Nextora
              </Box>
            </Link>
            <Box
              component="p"
              sx={{ color: "var(--muted)", fontSize: 14, mt: "20px", maxWidth: 320 }}
            >
              Engineering the infrastructure, intelligence, and interfaces of what comes next.
            </Box>
          </Box>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <Box key={heading}>
              <Box
                component="h4"
                sx={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 14,
                  fontWeight: 600,
                  mb: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {heading}
              </Box>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {links.map((link) => (
                  <Box component="li" key={link.label} sx={{ mb: "12px" }}>
                    <Link
                      href={link.href}
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
          <Box>© 2026 Nextora Labs, Inc. All rights reserved.</Box>
          <Box sx={{ display: "flex", gap: "14px" }}>
            {socials.map((s) => (
              <Box
                key={s.label}
                component="a"
                href={s.href}
                aria-label={s.label}
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  fontSize: 14,
                  "&:hover": {
                    borderColor: "var(--accent)",
                    color: "var(--accent)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {s.icon}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}