import type { Metadata } from "next";

const siteUrl = "https://nextora.dev";

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image ?? `${siteUrl}/opengraph-image`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Nextora",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nextora",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Nextora is the engineering partner for companies reinventing how they operate — cloud, AI, and custom software.",
  sameAs: [
    "https://twitter.com/nextora",
    "https://linkedin.com/company/nextora",
    "https://github.com/nextora",
  ],
};