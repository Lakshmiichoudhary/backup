// app/contact/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";

// --- SEO METADATA (CONTACT & LOCAL BENGALURU FOCUS) ---
export const metadata: Metadata = {
  title: "Contact Us & Project Inquiry | Empedance Bengaluru",
  description:
    "Get in touch with Empedance. Reach out for project requirements, AI engineering inquiries, or career opportunities at our Bengaluru office in HSR Layout.",
  keywords: [
    "Contact Empedance",
    "Empedance Bengaluru Office",
    "Hire Empedance",
    "Empedance HSR Layout",
    "Empedance Email",
    "Empedance HR Contact",
    "Product Engineering Agency Bengaluru",
    "AI Development Studio Contact",
  ],
  alternates: {
    canonical: "https://empedance.com/contact",
  },
  openGraph: {
    title: "Contact Empedance | Start Your Project",
    description:
      "Looking to build web apps, mobile apps, or agentic AI solutions? Fill out the form or reach out to our team in HSR Layout, Bengaluru.",
    url: "https://empedance.com/contact",
    siteName: "Empedance",
    type: "website",
    images: [
      {
        url: "/images/og-contact.jpg", // Specialized contact preview image
        width: 1200,
        height: 630,
        alt: "Contact Empedance Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Empedance",
    description:
      "Get a callback for your web, mobile, or AI engineering projects. Reach us at help@empedance.com.",
    images: ["/images/og-contact.jpg"],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- STRUCTURED DATA: CONTACT PAGE & LOCAL BUSINESS SCHEMA ---
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://empedance.com/contact#webpage",
        url: "https://empedance.com//contact-us",
        name: "Contact Empedance",
        description: "Inquiry and contact details for Empedance Consultancy Services.",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://empedance.com/#organization",
        name: "Empedance Consultancy Services Pvt Ltd",
        url: "https://empedance.com",
        logo: "https://empedance.com/icons/logo.svg",
        email: "help@empedance.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4th Floor, Bhive Workspace, HSR Layout Sector - 6",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560012",
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "help@empedance.com",
            availableLanguage: ["English"],
          },
          {
            "@type": "ContactPoint",
            contactType: "human resources",
            email: "hr@empedance.com",
            availableLanguage: ["English"],
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}