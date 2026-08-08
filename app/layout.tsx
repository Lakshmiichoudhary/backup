import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Empedance",
  description: "Ride Smarter with Blue Cabs",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body  className="dark" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}