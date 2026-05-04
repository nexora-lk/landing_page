import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/sections/PageHero";
import LegalLayout from "@/components/sections/LegalLayout";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms of service that govern your use of nextora.lk and engagements with Nextora Infotech.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          size="compact"
          eyebrow="Legal"
          title="Terms of service."
          subtitle="The ground rules for using this website and engaging Nextora Infotech for work."
        />
        <LegalLayout
          title="Terms of service"
          updated="2026-05-04"
          intro="By using nextora.lk you agree to these terms. If you don’t agree, please don’t use the site. Specific project work is governed by a separate, signed proposal — these terms cover the website and any informal correspondence."
          sections={[
            {
              heading: "About us",
              body: (
                <p>
                  Nextora Infotech is a small studio based in Sri Lanka,
                  building websites, mobile apps and AI-search visibility for
                  founders and growing businesses globally.
                </p>
              ),
            },
            {
              heading: "Use of the site",
              body: (
                <>
                  <p>You may use this site to learn about our services, view our work and contact us. You may not:</p>
                  <ul>
                    <li>Copy, scrape or republish our content without permission.</li>
                    <li>Attempt to interfere with the site’s security or availability.</li>
                    <li>Use the site for any unlawful purpose.</li>
                  </ul>
                </>
              ),
            },
            {
              heading: "Project work",
              body: (
                <p>
                  Engagements begin with a free call and a written, fixed-price
                  proposal. The proposal — not these site terms — defines scope,
                  deliverables, payment milestones and ownership of code and
                  designs once paid in full.
                </p>
              ),
            },
            {
              heading: "Intellectual property",
              body: (
                <p>
                  The Nextora name, logo and the design of nextora.lk are owned
                  by Nextora Infotech. Project deliverables transfer to you on
                  final payment unless your proposal says otherwise. We retain
                  the right to display non-confidential project work in our
                  portfolio.
                </p>
              ),
            },
            {
              heading: "Liability",
              body: (
                <p>
                  We do our best to keep the site accurate and online but we
                  provide it “as is.” To the extent allowed by law, Nextora is
                  not liable for indirect or consequential damages arising from
                  your use of the website.
                </p>
              ),
            },
            {
              heading: "Governing law",
              body: (
                <p>
                  These terms are governed by the laws of Sri Lanka. Any
                  disputes will be handled in Sri Lankan courts.
                </p>
              ),
            },
            {
              heading: "Contact",
              body: (
                <p>
                  Anything unclear? Email{" "}
                  <a href="mailto:hello@nextora.lk">hello@nextora.lk</a> and
                  we’ll explain in plain English.
                </p>
              ),
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
