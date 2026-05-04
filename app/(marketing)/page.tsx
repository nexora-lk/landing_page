import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedStrip from "@/components/sections/TrustedStrip";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Nextora Infotech — Engineering for what’s next",
  description:
    "Nextora Infotech is the engineering partner ambitious founders trust to ship web, mobile and AI products — fast, fixed-price, built to scale.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        {/* <TrustedStrip /> */}
        <Services />
        <Work />
        <WhyUs />
        <Process />
        <Pricing compact />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
