import ToolsNavbar from "@/components/tools/ToolsNavbar";
import ToolsSidebar from "@/components/tools/ToolsSidebar";
import type { Metadata } from "next";
import React from "react";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: "Empedance – Software & Digital Marketing Solutions",
    template: "%s | Empedance Consultancy Services",
  },
  description:
    "Empedance Consultancy Services Pvt Ltd delivers innovative software solutions, mobile app development, website development, UI/UX design, SEO, digital marketing, AI integration, and video production to enhance business efficiency and growth.",

  // ── Canonical & Alternates ────────────────────────────────────────────────
  alternates: {
    canonical: "https://empedance.com",
    languages: {
      "en-US": "https://empedance.com/en",
      "fr-FR": "https://empedance.com/fr",
    },
  },

  // ── Keywords (covers the misspelling too for indexing) ────────────────────
  keywords: [
    "empedance",
    "empedance consultancy",
    "Empedance Consultancy Services",
    "software development company",
    "digital marketing agency",
    "mobile app development",
    "website development",
    "UI UX design",
    "SEO services",
    "AI integration",
    "video editing services",
    "digital solutions",
    "software company India",
    "IT consultancy",
  ],

  // ── Authors & Publisher ───────────────────────────────────────────────────
  authors: [{ name: "Empedance Consultancy Services Pvt Ltd", url: "https://empedance.com" }],
  creator: "Empedance Consultancy Services Pvt Ltd",
  publisher: "Empedance Consultancy Services Pvt Ltd",

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://empedance.com",
    siteName: "Empedance Consultancy Services",
    title: "Empedance – Software & Digital Marketing Solutions",
    description:
      "We craft experiences that users adore. Mobile apps, websites, UI/UX, SEO, digital marketing, AI integration & video production — all under one roof.",
    images: [
      {
        url: "https://empedance.com/og-image.png", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Empedance Consultancy Services – Digital Solutions",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@empedance",       // replace with your actual Twitter handle if any
    creator: "@empedance",
    title: "Empedance – Software & Digital Marketing Solutions",
    description:
      "Innovative software & digital marketing solutions — mobile apps, websites, SEO, AI & more. 30+ projects delivered by 25+ skilled professionals.",
    images: ["https://empedance.com/og-image.png"],
  },

  // ── Verification (add your codes after verifying in Search Console etc.) ──
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
    // bing: "REPLACE_WITH_BING_WEBMASTER_CODE",
  },

  // ── App / PWA ─────────────────────────────────────────────────────────────
  applicationName: "Empedance",
  category: "Technology",
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organisation
    {
      "@type": "Organization",
      "@id": "https://empedance.com/#organization",
      name: "Empedance Consultancy Services Pvt Ltd",
      alternateName: "Empedance",
      url: "https://empedance.com",
      logo: {
        "@type": "ImageObject",
        url: "https://empedance.com/logo.png", // replace with actual logo URL
        width: 200,
        height: 60,
      },
      description:
        "Empedance Consultancy Services Pvt Ltd delivers innovative software solutions including mobile app development, website development, UI/UX design, SEO, digital marketing, and AI integration.",
      foundingDate: "2020",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 25 },
      areaServed: "Worldwide",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["English", "French"],
      },
      sameAs: [
        // Add your actual social profile URLs below
        // "https://www.linkedin.com/company/empedance",
        // "https://twitter.com/empedance",
        // "https://www.instagram.com/empedance",
      ],
    },

    // Website
    {
      "@type": "WebSite",
      "@id": "https://empedance.com/#website",
      url: "https://empedance.com",
      name: "Empedance Consultancy Services",
      publisher: { "@id": "https://empedance.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://empedance.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    // Services
    {
      "@type": "Service",
      serviceType: "Software Development & Digital Marketing",
      provider: { "@id": "https://empedance.com/#organization" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Empedance Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Editing & Production" } },
        ],
      },
    },

    // FAQ — helps capture rich snippets
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Empedance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Empedance Consultancy Services Pvt Ltd is a full-service digital agency specialising in software development, mobile apps, website development, UI/UX design, SEO, digital marketing, AI integration, and video production.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Empedance offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Empedance offers mobile app development, website development, UI/UX design, search engine optimisation (SEO), digital marketing, artificial intelligence (AI) integration, and professional video editing and shooting.",
          },
        },
        {
          "@type": "Question",
          name: "How many projects has Empedance delivered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Empedance has successfully delivered 30+ projects across various industries, supported by 25+ skilled professionals with 6+ years of industry experience.",
          },
        },
      ],
    },
  ],
};

// ─── Layout Component ─────────────────────────────────────────────────────────
export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="grid min-h-screen w-full bg-background-main lg:grid-cols-[256px_1fr]">
        <ToolsSidebar />

        <div className="min-w-0">
          <ToolsNavbar />

          <div className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-background-main px-4 py-10 md:px-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-radial"
            />

            <div className="relative">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}