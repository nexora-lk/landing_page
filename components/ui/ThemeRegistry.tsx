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
  /* ── Apple-style light system per Nextora_UI_Design_Spec ── */
  accent:     "#0071E3",
  accentBr:   "#0058B0",     // hover (darker, not lighter — Apple way)
  accent2:    "#0071E3",
  accent3:    "#0071E3",

  /* ── Backgrounds ── */
  bg:         "#FFFFFF",
  bgPaper:    "#F5F5F7",
  bgDeep:     "#F5F5F7",

  /* ── Text ── */
  text:       "#1D1D1F",
  textSoft:   "#1D1D1F",
  muted:      "#6E6E73",

  /* ── Surfaces & Borders ── */
  surface:    "#F5F5F7",
  border:     "#D2D2D7",
  borderHi:   "#B5B5BA",

  glow:       "none",

  /* ── RGB channels ── */
  accentRgb:   "0, 113, 227",
  accentBrRgb: "0, 88, 176",
  accent2Rgb:  "0, 113, 227",
  accent3Rgb:  "0, 113, 227",
  textRgb:     "29, 29, 31",
  bgRgb:       "255, 255, 255",

  /* ── Tier accents (kept muted, all derived from one accent) ── */
  tierGreen:   "#0071E3",
  tierBlue:    "#0071E3",
  tierPurple:  "#0071E3",
  tierRed:     "#0071E3",
} as const;

/** Shorthand: produce `rgba(r,g,b, alpha)` from an RGB token string */
export const rgba = (rgb: string, a: number) => `rgba(${rgb}, ${a})`;

/* ── MUI Theme (mirrors CSS vars + tokens) ── */
const theme = createTheme({
  palette: {
    mode: "light",
    primary:    { main: tokens.accent },
    secondary:  { main: tokens.accent },
    background: { default: tokens.bg, paper: tokens.bgPaper },
    text:       { primary: tokens.text, secondary: tokens.muted },
  },
  typography: {
    fontFamily: "var(--font-inter), Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    h1: { fontFamily: "var(--font-inter), Inter, sans-serif", fontWeight: 600, letterSpacing: "-0.02em" },
    h2: { fontFamily: "var(--font-inter), Inter, sans-serif", fontWeight: 600, letterSpacing: "-0.02em" },
    h3: { fontFamily: "var(--font-inter), Inter, sans-serif", fontWeight: 600, letterSpacing: "-0.01em" },
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
