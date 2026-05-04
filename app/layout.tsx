import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ui/ThemeRegistry";
import MobileStickyCTA from "@/components/ui/MobileStickyCTA";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextora.lk"),
  title: {
    default: "Nextora Infotech — We Build What's Next",
    template: "%s | Nextora",
  },
  description:
    "Nextora Infotech is the engineering partner for ambitious founders — web, mobile and AI products, shipped fast and built to scale.",
  keywords: [
    "Nextora",
    "Nextora Infotech",
    "web development Sri Lanka",
    "mobile app development",
    "AI search optimization",
    "GEO",
    "founder-built websites",
  ],
  authors: [{ name: "Nextora Infotech" }],
  creator: "Nextora Infotech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextora.lk",
    siteName: "Nextora Infotech",
    title: "Nextora Infotech — Engineering for what’s next",
    description:
      "The engineering partner ambitious founders trust to ship web, mobile and AI products — fast, fixed-price, built to scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextora Infotech — Engineering for what’s next",
    description:
      "The engineering partner ambitious founders trust to ship web, mobile and AI products.",
    creator: "@nextora",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <script
          type="application/ld+json"
          // Spec: structured data (Section 27.7). Organization mark-up so
          // Google + AI search engines surface Nextora correctly.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nextora Infotech",
              url: "https://nextora.lk",
              logo: "https://nextora.lk/logo.png",
              email: "hello@nextora.lk",
              description:
                "Nextora Infotech is the engineering partner for ambitious founders — web, mobile and AI products, shipped fast and built to scale.",
              sameAs: [],
            }),
          }}
        />
        <ThemeRegistry>
          {children}
          <MobileStickyCTA />
          <BackToTop />
          <CookieBanner />
        </ThemeRegistry>
      </body>
    </html>
  );
}
