import type { Metadata } from "next";
import "@/style/blog.css";

export const metadata: Metadata = {
  title: " How to Make a Business Plan: A Step-by-Step Guide",
  description:
    "Our detailed step-by-step guide will teach you how to create a business plan. Ideal for entrepreneurs and business owners seeking expert help",
  keywords: "How to Make a Business Plan,Empedace",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
