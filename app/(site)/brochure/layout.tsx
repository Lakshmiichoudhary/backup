// app/brochure/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";

// --- SEO METADATA (BROCHURE & CAPABILITIES DECK FOCUS) ---
export const metadata: Metadata = {
  title: "Download Company Brochure & Capabilities Deck | Empedance",
  description:
    "Get the official Empedance 2026 Company Profile. Explore our full capabilities across Web & Mobile Apps, Agentic AI, UI/UX, and ready-to-launch White-Label Platforms.",
  keywords: [
    "Empedance Company Profile",
    "Empedance Brochure 2026",
    "Empedance Capabilities Deck",
    "AI Studio Pitch Deck",
    "White-Label Software Brochure",
    "WhatsApp Business Automation PDF",
    "School Management System PDF",
    "Blue Cab Fleet System PDF",
    "Product Engineering Studio Profile",
  ],
  alternates: {
    canonical: "https://empedance.com/brochure",
  },
  openGraph: {
    title: "Empedance Company Profile & Deck | 2026 Capability Overview",
    description:
      "One document with everything you need to evaluate us — full services, case studies, engagement models, and 3 white-label platforms.",
    url: "https://empedance.com/brochure",
    siteName: "Empedance",
    type: "website",
    images: [
      {
        url: "/images/brochure.png", // Specialized deck preview image
        width: 1200,
        height: 630,
        alt: "Empedance Company Profile 2026 Brochure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Empedance Company Profile & Capabilities Deck",
    description:
      "Full service overview, white-label platform details, case studies, and engineering processes in one PDF.",
    images: ["/images/og-brochure-deck.jpg"],
  },
};

export default function BrochureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- STRUCTURED DATA: DIGITAL DOCUMENT & SERVICE SCHEMA ---
  const brochureSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DigitalDocument",
        "@id": "https://empedance.com/brochure#document",
        name: "Empedance Company Profile 2026",
        description:
          "Official company brochure and capabilities overview for Empedance Consultancy Services Pvt Ltd.",
        fileFormat: "application/pdf",
        encodingFormat: "application/pdf",
        publisher: {
          "@type": "Organization",
          name: "Empedance Consultancy Services Pvt Ltd",
          url: "https://empedance.com",
        },
      },
      {
        "@type": "Service",
        "@id": "https://empedance.com/brochure#service",
        name: "Product Engineering & White-Label Platforms",
        provider: {
          "@type": "Organization",
          name: "Empedance Consultancy Services Pvt Ltd",
          email: "hello@empedance.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Featured Platforms & Capabilities",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "SoftwareApplication",
                name: "WhatsApp Business Automation",
                applicationCategory: "BusinessApplication",
                description:
                  "Bulk messaging, template management, no-code bot training, live analytics, and REST API.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "SoftwareApplication",
                name: "School Management System",
                applicationCategory: "EducationalApplication",
                description:
                  "Complete white-label enterprise system designed for school management.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "SoftwareApplication",
                name: "Blue Cab",
                applicationCategory: "TravelApplication",
                description:
                  "White-label ride booking and fleet management solution.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="brochure-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brochureSchema) }}
      />
      {children}
    </>
  );
}