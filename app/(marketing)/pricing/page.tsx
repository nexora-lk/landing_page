import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for websites, mobile apps, software systems and extra services — clear LKR ranges, no surprises.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          size="compact"
          eyebrow="Pricing"
          titleParts={{ plain: "Clear prices.", accent: "Real value." }}
          subtitle="No hidden fees, no surprise invoices. Pick the plan that fits, or tell us what you need and we’ll quote a custom build."
        />

        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
