import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/sections/PageHero";
import LegalLayout from "@/components/sections/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Nextora Infotech collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          size="compact"
          eyebrow="Legal"
          title="Privacy policy."
          subtitle="We collect the minimum we need to do the work, and we never sell your data."
        />
        <LegalLayout
          title="Privacy policy"
          updated="2026-05-04"
          intro="This policy explains what data Nextora Infotech (“Nextora”, “we”) collects when you visit nextora.lk or work with us, why we collect it, and the rights you have over it."
          sections={[
            {
              heading: "What we collect",
              body: (
                <>
                  <p>
                    <strong>Information you give us.</strong> Your name, email,
                    company and project details when you fill in our contact
                    form or email us directly.
                  </p>
                  <p>
                    <strong>Automatic data.</strong> Standard web logs (IP,
                    user-agent, referrer) and basic, privacy-friendly analytics
                    so we can see which pages are useful. We do not use
                    cross-site tracking or third-party advertising cookies.
                  </p>
                </>
              ),
            },
            {
              heading: "How we use it",
              body: (
                <>
                  <p>We use your information to:</p>
                  <ul>
                    <li>Reply to your enquiry and scope your project.</li>
                    <li>Send you the proposal, invoice or contract you asked for.</li>
                    <li>Improve the website (page speed, broken links, content gaps).</li>
                    <li>Comply with our legal and tax obligations in Sri Lanka.</li>
                  </ul>
                </>
              ),
            },
            {
              heading: "Sharing and storage",
              body: (
                <p>
                  We do not sell, trade or rent your personal data. We share it
                  only with the service providers we need to run the business
                  (e.g. email, hosting, accounting), under written agreements
                  that protect your information. We keep records as long as
                  needed for the engagement plus any legally required retention
                  period, then we delete them.
                </p>
              ),
            },
            {
              heading: "Your rights",
              body: (
                <>
                  <p>You can ask us at any time to:</p>
                  <ul>
                    <li>See what data we hold about you.</li>
                    <li>Correct or update it.</li>
                    <li>Delete it (where we’re not legally required to keep it).</li>
                    <li>Stop processing it for marketing.</li>
                  </ul>
                  <p>
                    Email <a href="mailto:hello@nextora.lk">hello@nextora.lk</a>{" "}
                    and we’ll act within a reasonable time, usually within 14 days.
                  </p>
                </>
              ),
            },
            {
              heading: "Cookies",
              body: (
                <p>
                  We use a single first-party cookie to remember your cookie
                  preference. Optional analytics are off by default and only
                  enabled if you accept them on our cookie banner. You can change
                  your choice at any time from the footer.
                </p>
              ),
            },
            {
              heading: "Changes",
              body: (
                <p>
                  If we update this policy we’ll change the date at the top of
                  this page. Material changes will be highlighted on the
                  homepage.
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
