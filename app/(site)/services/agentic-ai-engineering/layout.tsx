// app/services/agentic-ai-engineering/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";

// --- SEO METADATA (AGENTIC AI SERVICE FOCUS) ---
export const metadata: Metadata = {
  title: "AI & Agentic AI Engineering Services | Empedance",
  description:
    "Production-grade Agentic AI, autonomous multi-step agents, RAG knowledge systems, LLM copilots, and LLM Ops. We design and deploy accurate, observable AI systems.",
  keywords: [
    "Agentic AI Engineering",
    "Autonomous AI Agents",
    "LLM Copilots",
    "RAG Knowledge Systems",
    "Intelligent Workflow Automation",
    "Predictive Data Products",
    "LLM Ops & Evaluation",
    "LangChain LlamaIndex Studio",
    "Enterprise AI Development",
    "Empedance AI Services",
  ],
  alternates: {
    canonical: "https://empedance.com/services/agentic-ai-engineering",
  },
  openGraph: {
    title: "AI & Agentic AI Engineering Services | Empedance",
    description:
      "Ship intelligent products — not demos. Production-ready LLMs, multi-step autonomous agents, and RAG architectures engineered end to end.",
    url: "https://empedance.com/services/agentic-ai-engineering",
    siteName: "Empedance",
    type: "website",
    images: [
      {
        url: "/images/og-agentic-ai.jpg", // Specialized service preview image
        width: 1200,
        height: 630,
        alt: "Empedance Agentic AI Engineering Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Agentic AI Engineering Services | Empedance",
    description:
      "Production-grade AI copilots, autonomous agents, RAG, and LLM Ops built for real-world reliability.",
    images: ["/images/og-agentic-ai.jpg"],
  },
};

export default function AgenticAILayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- STRUCTURED DATA: SERVICE & FAQ SCHEMA ---
  const aiServiceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://empedance.com/services/agentic-ai-engineering#webpage",
        url: "https://empedance.com/services/agentic-ai-engineering",
        name: "AI & Agentic AI Engineering Services",
        description:
          "End-to-end engineering of AI Copilots, Agentic Workflows, RAG Systems, Intelligent Automation, and LLM Ops.",
      },
      {
        "@type": "Service",
        "@id": "https://empedance.com/services/agentic-ai-engineering#service",
        name: "AI & Agentic AI Engineering",
        serviceType: "Artificial Intelligence Development",
        provider: {
          "@type": "Organization",
          "@id": "https://empedance.com/#organization",
          name: "Empedance Consultancy Services Pvt Ltd",
          url: "https://empedance.com",
        },
        description:
          "We embed LLMs, autonomous agents, and predictive intelligence into production products with 100% observability, tracing, and guardrails.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Deliverables & Solutions",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Copilots & Assistants",
                description:
                  "In-product copilots grounded on custom knowledge bases with retrieval, tool execution, and guardrails.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Agentic Workflows",
                description:
                  "Autonomous, multi-step agents that plan, invoke tools, and execute complex business tasks.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "RAG & Knowledge Systems",
                description:
                  "Retrieval-augmented generation pipelines across internal documents, tickets, and databases.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Intelligent Automation",
                description:
                  "AI processing pipelines that classify, extract, summarize, and route data straight into your stack.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Predictive & Data Products",
                description:
                  "Forecasting, scoring, and recommendation engines built on proprietary data.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "LLM Ops & Evaluation",
                description:
                  "Prompt management, tracing, safety filtering, cost control, and eval metrics.",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://empedance.com/services/agentic-ai-engineering#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you add AI to our existing product?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We integrate AI capabilities directly into existing Web and Mobile applications using custom APIs, SDKs, and modular microservices.",
            },
          },
          {
            "@type": "Question",
            name: "How do you keep AI outputs accurate and safe?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We implement robust evaluation benchmarks against golden datasets, deterministic guardrails, structured output validation, and complete execution tracing.",
            },
          },
          {
            "@type": "Question",
            name: "Which models do you use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We work with top model providers including OpenAI, Anthropic, Gemini, as well as open-source LLMs tailored to your accuracy, privacy, and cost requirements.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="agentic-ai-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiServiceSchema) }}
      />
      {children}
    </>
  );
}