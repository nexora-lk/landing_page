"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00d4ff" },
    secondary: { main: "#7c5cff" },
    background: { default: "#0a0a0f", paper: "#0f0f17" },
  },
  typography: {
    fontFamily: "var(--font-inter), Inter, sans-serif",
    h1: { fontFamily: "var(--font-syne), Syne, sans-serif" },
    h2: { fontFamily: "var(--font-syne), Syne, sans-serif" },
    h3: { fontFamily: "var(--font-syne), Syne, sans-serif" },
  },
  components: {
    MuiCssBaseline: { styleOverrides: { body: { background: "#0a0a0f" } } },
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
