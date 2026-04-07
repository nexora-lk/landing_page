"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

/* ═══════════════════════════════════════════════════════════
   Centralised Design Tokens
   ─────────────────────────────────────────────────────────
   Every colour used across the project MUST come from here
   or from the CSS custom-properties set in globals.css
   (which mirror these values).
   ═══════════════════════════════════════════════════════════ */

export const tokens = {
  /* ── Core Palette ── */
  accent:     "#00d4ff",     // Primary cyan
  accentBr:   "#33dfff",     // Brighter variant (hover states)
  accent2:    "#7c5cff",     // Secondary purple
  accent3:    "#ff5cf0",     // Tertiary pink

  /* ── Backgrounds ── */
  bg:         "#0a0a0f",     // App background
  bgPaper:    "#0f0f17",     // Card / elevated surfaces
  bgDeep:     "#1a0f2e",     // Deep purple tint (CTA, etc.)

  /* ── Text ── */
  text:       "#ffffff",
  textSoft:   "#f0f4ff",     // Slightly warm white
  muted:      "#8a8aa0",     // Subdued labels

  /* ── Surfaces & Borders ── */
  surface:    "rgba(255, 255, 255, 0.04)",
  border:     "rgba(255, 255, 255, 0.08)",
  borderHi:   "rgba(0, 212, 255, 0.4)",

  /* ── Glow ── */
  glow:       "0 0 40px rgba(0, 212, 255, 0.35)",

  /* ── RGB channel values (for rgba() compositing in JS) ── */
  accentRgb:   "0, 212, 255",
  accentBrRgb: "51, 223, 255",
  accent2Rgb:  "124, 92, 255",
  accent3Rgb:  "255, 92, 240",
  textRgb:     "255, 255, 255",
  bgRgb:       "10, 10, 15",

  /* ── Pricing / Tier Colours ── */
  tierGreen:   "#22c55e",
  tierBlue:    "#3b82f6",
  tierPurple:  "#a855f7",
  tierRed:     "#ef4444",
} as const;

/** Shorthand: produce `rgba(r,g,b, alpha)` from an RGB token string */
export const rgba = (rgb: string, a: number) => `rgba(${rgb}, ${a})`;

/* ── MUI Theme (mirrors CSS vars + tokens) ── */
const theme = createTheme({
  palette: {
    mode: "dark",
    primary:    { main: tokens.accent },
    secondary:  { main: tokens.accent2 },
    background: { default: tokens.bg, paper: tokens.bgPaper },
  },
  typography: {
    fontFamily: "var(--font-inter), Inter, sans-serif",
    h1: { fontFamily: "var(--font-syne), Syne, sans-serif" },
    h2: { fontFamily: "var(--font-syne), Syne, sans-serif" },
    h3: { fontFamily: "var(--font-syne), Syne, sans-serif" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: { body: { background: tokens.bg } },
    },
  },
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
