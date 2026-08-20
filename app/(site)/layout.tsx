// app/(site)/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import "@/style/transitions.css";
import "@/style/blog.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- SEO METADATA (AI & AGENTIC AI FOCUS) ---
export const metadata: Metadata = {
  title: {
    default: "Agentic AI & AI Product Engineering Studio",
    template: "%s | Empedance AI Studio",
  },
  description:
    "Empedance specializes in Agentic AI systems, autonomous AI agents, LLM integrations, and custom AI product engineering to transform complex workflows into high-impact products.",
  keywords: [
    "Agentic AI",
    "Autonomous AI Agents",
    "AI Product Engineering",
    "LLM Integration Services",
    "AI Workflow Automation",
    "Enterprise AI Solutions",
    "Custom AI Agent Development",
    "AI Software Studio",
    "Empedance AI",
  ],
  openGraph: {
    title: "Agentic AI & Custom AI Product Engineering | Empedance",
    description:
      "We design, engineer, and deploy intelligent Agentic AI workflows, LLMs, and autonomous agents for modern products.",
    url: "https://empedance.com",
    siteName: "Empedance AI",
    type: "website",
    images: [
      {
        url: "/images/logo.png", 
        width: 1200,
        height: 630,
        alt: "Empedance Agentic AI & AI Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI & AI Product Engineering | Empedance",
    description:
      "Transforming workflows with Agentic AI, custom LLM integrations, and autonomous software solutions.",
    images: ["/images/logo.png"],
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- STRUCTURED DATA: AI SERVICE SCHEMA ---
  const aiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Agentic AI & AI Product Engineering",
    provider: {
      "@type": "Organization",
      name: "Empedance Consultancy Services Pvt Ltd",
      url: "https://empedance.com",
    },
    areaServed: "Worldwide",
    description:
      "Engineering end-to-end Agentic AI systems, LLM integrations, predictive automation, and intelligent autonomous workflow tools.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Solutions & Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Agentic AI & Autonomous Agents",
            description:
              "Multi-agent orchestration, multi-step autonomous decision engines, and tool-calling agentic systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom LLM Integration & RAG",
            description:
              "Domain-adapted large language models, retrieval-augmented generation pipelines, and secure fine-tuning.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Intelligent Workflow Automation",
            description:
              "AI-driven task automation, predictive analytics, and automated decision pipelines.",
          },
        },
      ],
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Script
        id="ai-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiServiceSchema) }}
      />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}