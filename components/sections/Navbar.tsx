"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ChevronDown } from "lucide-react";

type SubLink = { href: string; label: string; desc: string };

type NavItem =
  | { href: string; label: string; sub?: never }
  | { label: string; href: string; sub: SubLink[] };

const servicesSub: SubLink[] = [
  { href: "/services#websites-apps",     label: "Websites & Apps",     desc: "Marketing sites, SaaS platforms and mobile apps." },
  { href: "/services#ai-search-seo",     label: "AI Search & SEO",     desc: "Get found in ChatGPT, Gemini and Google." },
  { href: "/services#design-branding",   label: "Design & Branding",   desc: "Identity, UI/UX and design systems in Figma." },
  { href: "/services#cloud-performance", label: "Cloud & Performance", desc: "Hosting, CI/CD, APIs and monitoring." },
];

const navItems: NavItem[] = [
  { href: "/about",    label: "About Us" },
  { href: "/services", label: "Services", sub: servicesSub },
  { href: "/work",     label: "Work" },
  { href: "/pricing",  label: "Pricing" },
  { href: "/blog",     label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const lastY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Close any open menu when navigating to a new route
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSub(null);
  }, [pathname]);

  // Close on Escape (a11y)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        setMobileSub(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y > 120 && y > lastY.current) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openWith = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const activeItem = openMenu ? navItems.find((i) => i.label === openMenu) : null;

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: { xs: 56, md: 64 },
          display: "flex",
          alignItems: "center",
          background: scrolled || openMenu ? "rgba(255,255,255,0.85)" : "transparent",
          backdropFilter: scrolled || openMenu ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled || openMenu ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled || openMenu ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent",
          transform: hidden && !mobileOpen && !openMenu ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 280ms ease-out, background 240ms, border-color 240ms",
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link href="/" aria-label="Nextora — home" style={{ display: "flex", alignItems: "center" }}>
              <Image src="/logo.png" alt="Nextora Infotech" width={110} height={28} style={{ objectFit: "contain", height: 28, width: "auto" }} priority />
            </Link>

            <Box
              component="ul"
              sx={{
                display: { xs: "none", lg: "flex" },
                gap: "28px",
                listStyle: "none",
                m: 0,
                p: 0,
              }}
            >
              {navItems.map((item) => (
                <Box
                  component="li"
                  key={item.label}
                  onMouseEnter={() => item.sub && openWith(item.label)}
                  onMouseLeave={() => item.sub && scheduleClose()}
                  sx={{ position: "relative" }}
                >
                  <Link
                    href={item.href}
                    style={{
                      color: "var(--ink)",
                      textDecoration: "none",
                      fontSize: 15,
                      fontWeight: 400,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                    className="nav-link-hover"
                  >
                    {item.label}
                    {item.sub && (
                      <Box
                        component="span"
                        aria-hidden
                        sx={{
                          display: "inline-flex",
                          ml: "2px",
                          color: "var(--grey-1)",
                          transition: "transform 200ms ease-out",
                          transform: openMenu === item.label ? "rotate(180deg)" : "rotate(0)",
                        }}
                      >
                        <ChevronDown size={14} strokeWidth={2} />
                      </Box>
                    )}
                  </Link>
                </Box>
              ))}
            </Box>

            <Box
              component={Link}
              href="/contact"
              sx={{
                display: { xs: "none", lg: "inline-flex" },
                alignItems: "center",
                px: "20px",
                py: "10px",
                borderRadius: "999px",
                background: "var(--accent)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                minHeight: 40,
                transition: "background 240ms ease-out",
                "&:hover": { background: "var(--accent-hi)" },
              }}
            >
              Book a call
            </Box>

            <Box
              component="button"
              onClick={() => { setMobileOpen(!mobileOpen); setMobileSub(null); }}
              aria-label="Open menu"
              sx={{
                display: { xs: "flex", lg: "none" },
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                background: "transparent",
                border: "none",
                color: "var(--ink)",
                fontSize: 22,
                cursor: "pointer",
              }}
            >
              {mobileOpen ? "✕" : "☰"}
            </Box>
          </Box>
        </Container>

        {/* Desktop dropdown panel */}
        {activeItem && activeItem.sub && (
          <Box
            onMouseEnter={() => openWith(activeItem.label)}
            onMouseLeave={scheduleClose}
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              borderBottom: "1px solid var(--grey-2)",
              display: { xs: "none", lg: "block" },
              animation: "hero-fade-up 220ms cubic-bezier(0.22, 1, 0.36, 1) both",
            }}
          >
            <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
                  gap: "8px",
                  py: "24px",
                }}
              >
                {activeItem.sub.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpenMenu(null)}
                    style={{ textDecoration: "none", color: "inherit", display: "block" }}
                  >
                    <Box
                      sx={{
                        p: "16px 18px",
                        borderRadius: "12px",
                        transition: "background 200ms ease-out",
                        "&:hover": { background: "var(--surface)" },
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: 15,
                          fontWeight: 600,
                          color: "var(--ink)",
                          mb: "4px",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        {s.label}
                        <Box component="span" sx={{ color: "var(--accent)", fontSize: 14 }}>→</Box>
                      </Box>
                      <Box component="p" sx={{ fontSize: 13, color: "var(--grey-1)", lineHeight: 1.5 }}>
                        {s.desc}
                      </Box>
                    </Box>
                  </Link>
                ))}
              </Box>
            </Container>
          </Box>
        )}
      </Box>

      {/* Mobile overlay */}
      {mobileOpen && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "#fff",
            pt: "72px",
            px: "24px",
            pb: "32px",
            overflowY: "auto",
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navItems.map((item) =>
            item.sub ? (
              <Box key={item.label}>
                <Box
                  component="button"
                  onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}
                  aria-expanded={mobileSub === item.label}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "transparent",
                    border: "none",
                    color: "var(--ink)",
                    fontSize: 24,
                    fontWeight: 600,
                    padding: "16px 0",
                    borderBottom: "1px solid var(--grey-2)",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    textAlign: "left",
                  }}
                >
                  {item.label}
                  <Box
                    component="span"
                    aria-hidden
                    sx={{
                      display: "inline-flex",
                      color: "var(--grey-1)",
                      transition: "transform 200ms ease-out",
                      transform: mobileSub === item.label ? "rotate(180deg)" : "rotate(0)",
                    }}
                  >
                    <ChevronDown size={20} strokeWidth={2} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateRows: mobileSub === item.label ? "1fr" : "0fr",
                    transition: "grid-template-rows 240ms ease-out",
                  }}
                >
                  <Box sx={{ overflow: "hidden" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", py: "8px" }}>
                      <Link
                        href={item.href}
                        onClick={() => { setMobileOpen(false); setMobileSub(null); }}
                        style={{
                          color: "var(--accent)",
                          textDecoration: "none",
                          fontSize: 15,
                          fontWeight: 500,
                          padding: "10px 0",
                        }}
                      >
                        View all {item.label.toLowerCase()} →
                      </Link>
                      {item.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => { setMobileOpen(false); setMobileSub(null); }}
                          style={{
                            color: "var(--ink)",
                            textDecoration: "none",
                            padding: "12px 0",
                            borderTop: "1px solid var(--grey-2)",
                            display: "block",
                          }}
                        >
                          <Box sx={{ fontSize: 17, fontWeight: 500 }}>{s.label}</Box>
                          <Box sx={{ fontSize: 14, color: "var(--grey-1)", mt: "2px" }}>{s.desc}</Box>
                        </Link>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "var(--ink)",
                  textDecoration: "none",
                  fontSize: 24,
                  fontWeight: 600,
                  padding: "16px 0",
                  borderBottom: "1px solid var(--grey-2)",
                  display: "block",
                }}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 24,
              padding: "16px 28px",
              borderRadius: "999px",
              background: "var(--accent)",
              color: "#fff",
              textDecoration: "none",
              fontSize: 17,
              fontWeight: 500,
              minHeight: 48,
            }}
          >
            Book a free call →
          </Link>
        </Box>
      )}
    </>
  );
}
