import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";
import "@/style/transitions.css";
import "@/style/blog.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// --- SEO METADATA ---
export const metadata: Metadata = {
  metadataBase: new URL("https://empedance.com"),

  title: {
    default: "Empedance | AI & Product Engineering Studio",
    template: "%s | Empedance",
  },

  description:
    "Empedance is a full-stack digital product studio. We engineer web & mobile apps, UI/UX design, agentic AI, SEO, video production, and ready-to-launch platforms from Pune, India.",

  keywords: [
    "Empedance",
    "Empedance Consultancy Services",
    "Product Engineering Studio",
    "AI Development Agency",
    "Agentic AI Integration",
    "UI UX Design Studio Pune",
    "Web Development Company India",
    "Mobile App Development",
    "WhatsApp Business Automation",
    "White Label Software Platforms",
    "Digital Product Studio Pune",
  ],

  authors: [{ name: "Empedance Consultancy Services Pvt Ltd" }],
  creator: "Empedance",
  publisher: "Empedance Consultancy Services Pvt Ltd",

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Empedance | End-to-End Product Engineering & AI Studio",
    description:
      "From idea to launch — we design, engineer, and scale web apps, mobile apps, AI integrations, and white-label platforms.",
    url: "https://empedance.com",
    siteName: "Empedance",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png", 
        width: 1200,
        height: 630,
        alt: "Empedance - AI & Digital Product Engineering Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Empedance | Digital Product Engineering Studio",
    description:
      "Web & mobile apps, UI/UX, AI, SEO, and video — engineered end to end.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // --- STRUCTURED DATA (JSON-LD) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Empedance Consultancy Services Pvt Ltd",
    alternateName: "Empedance",
    url: "https://empedance.com",
    logo: "https://empedance.com/icons/logo.svg",
    email: "hello@empedance.com",
    description:
      "Full-stack product engineering studio crafting web & mobile apps, UI/UX, AI integration, and white-label platforms.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@empedance.com",
      contactType: "customer service",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-Integrated Product Engineering",
            description: "Agentic AI, LLM integration, and automation workflows.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description: "Research-driven interfaces and complete design systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web & Mobile App Development",
            description: "High-performance web applications and native mobile apps.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Digital Marketing",
            description: "Search engine optimization and digital growth solutions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Video Production & Editing",
            description: "End-to-end video production and post-production.",
          },
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="dark" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}