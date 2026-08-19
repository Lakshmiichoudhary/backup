// app/services/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";

// --- SEO METADATA (SERVICES FOCUS) ---
export const metadata: Metadata = {
  title: "Full-Stack Product Engineering Services | Empedance",
  description:
    "Explore Empedance services: AI & Agentic AI engineering, web development, mobile apps, UI/UX design, SEO & digital marketing, and video production.",
  keywords: [
    "Empedance Services",
    "Agentic AI Engineering",
    "AI Product Engineering",
    "LLM Integration Services",
    "Full-Stack Web Development",
    "Mobile App Development",
    "UI UX Design Studio",
    "Technical SEO Agency",
    "Video Production Studio",
    "Software Development Services",
  ],
  alternates: {
    canonical: "https://empedance.com/services",
  },
  openGraph: {
    title: "Full-Stack Product Engineering Services | Empedance",
    description:
      "From a single screen to an entire platform — we design, engineer, market, and film intelligent products.",
    url: "https://empedance.com/services",
    siteName: "Empedance",
    type: "website",
    images: [
      {
        url: "/images/og-services.jpg", // Specialized services preview image
        width: 1200,
        height: 630,
        alt: "Empedance Full-Stack Services Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Engineering & AI Services | Empedance",
    description:
      "Design, engineering, marketing, and video production — built for product growth.",
    images: ["/images/og-services.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- STRUCTURED DATA: SERVICE CATALOG SCHEMA ---
  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://empedance.com/services#webpage",
        url: "https://empedance.com/services",
        name: "Empedance Services",
        description:
          "Comprehensive digital engineering services including AI, web, mobile, UI/UX design, SEO, and video production.",
      },
      {
        "@type": "Service",
        "@id": "https://empedance.com/services#service-catalog",
        name: "Full-Stack Digital Product Engineering",
        provider: {
          "@type": "Organization",
          "@id": "https://empedance.com/#organization",
          name: "Empedance Consultancy Services Pvt Ltd",
          url: "https://empedance.com",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Empedance Capabilities & Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI & Agentic AI Engineering",
                description:
                  "LLM copilots, autonomous agents, RAG assistants, and production AI workflows.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Development",
                description:
                  "Fast, secure, SEO-ready websites and cloud-native web apps built for scale.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile App Development",
                description:
                  "Native-grade iOS & Android applications built from MVP to high scale.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UI/UX Design",
                description:
                  "Research-driven UX, high-fidelity UI, and scalable design systems.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO & Digital Marketing",
                description:
                  "Technical SEO, content strategy, and paid marketing campaigns.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Video Production & Editing",
                description:
                  "Product films, brand stories, social content, and post-production motion graphics.",
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
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {children}
    </>
  );
}