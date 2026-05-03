import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Stats from "@/components/sections/Stats";
import Work from "@/components/sections/Work";
import WhyUs from "@/components/sections/WhyUs";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Nextora Infotech — We Build What's Next",
  description:
    "Nextora Infotech is a young IT startup building websites, mobile apps, AI tools and cloud systems for founders and growing businesses — fast, fixed-price, founder-led.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Work />
        <WhyUs />
        <WhyChoose />
        <Process />
        <Testimonials />
        <Stats />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
