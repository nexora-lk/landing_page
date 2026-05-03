import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ui/ThemeRegistry";
import Cursor from "@/components/ui/Cursor";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextora.dev"),
  title: {
    default: "Nextora — We Build What's Next",
    template: "%s | Nextora",
  },
  description:
    "Nextora is the engineering partner for companies reinventing how they operate — cloud, AI, and custom software built with relentless craft.",
  keywords: [
    "cloud infrastructure",
    "AI automation",
    "custom software development",
    "cybersecurity",
    "engineering partner",
    "Nextora",
  ],
  authors: [{ name: "Nextora Labs" }],
  creator: "Nextora Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextora.dev",
    siteName: "Nextora",
    title: "Nextora — We Build What's Next",
    description:
      "Engineering partner for cloud, AI, and custom software — built with relentless craft.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextora — We Build What's Next",
    description: "Engineering partner for cloud, AI, and custom software.",
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
      className={`${syne.variable} ${inter.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body>
        <ThemeRegistry>
          <Cursor />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
