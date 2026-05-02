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
  /* ── Core Palette (matched to Nextora circuit-board logo) ── */
  accent:     "#42C6FF",     // Primary sky-cyan (logo primary)
  accentBr:   "#6DD5FF",     // Brighter variant (hover states)
  accent2:    "#1A73E8",     // Secondary electric blue
  accent3:    "#00E5CC",     // Tertiary teal/cyan

  /* ── Backgrounds ── */
  bg:         "#060B14",     // Deep navy-black
  bgPaper:    "#0A1120",     // Card / elevated surfaces
  bgDeep:     "#0D1B30",     // Deep blue tint (CTA, etc.)

  /* ── Text ── */
  text:       "#ffffff",
  textSoft:   "#E8F0FE",     // Slightly cool white
  muted:      "#7B8BA5",     // Subdued labels (blue-grey)

  /* ── Surfaces & Borders ── */
  surface:    "rgba(66, 198, 255, 0.04)",
  border:     "rgba(66, 198, 255, 0.10)",
  borderHi:   "rgba(66, 198, 255, 0.45)",

  /* ── Glow ── */
  glow:       "0 0 40px rgba(66, 198, 255, 0.35)",

  /* ── RGB channel values (for rgba() compositing in JS) ── */
  accentRgb:   "66, 198, 255",
  accentBrRgb: "109, 213, 255",
  accent2Rgb:  "26, 115, 232",
  accent3Rgb:  "0, 229, 204",
  textRgb:     "255, 255, 255",
  bgRgb:       "6, 11, 20",

  /* ── Pricing / Tier Colours ── */
  tierGreen:   "#22c55e",
  tierBlue:    "#42C6FF",
  tierPurple:  "#1A73E8",
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
