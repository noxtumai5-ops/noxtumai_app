import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://noxtum.ai"),
  title: {
    default: "NOXTUM AI — Enterprise AI Systems and Operational Transformation",
    template: "%s | NOXTUM AI"
  },
  description: "NOXTUM AI helps enterprises discover, build, and deploy high-leverage artificial intelligence systems that solve real operational bottlenecks.",
  keywords: [
    "AI Consulting",
    "AI Automation",
    "Autonomous AI Agents",
    "Decision Intelligence",
    "NOVA Engine",
    "Custom AI Solutions",
    "Enterprise AI Transformation"
  ],
  authors: [{ name: "NOXTUM AI Systems" }],
  creator: "NOXTUM AI",
  icons: {
    icon: "/noxtum-icon.png",
    shortcut: "/favicon.ico",
    apple: "/noxtum-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noxtum.ai",
    siteName: "NOXTUM AI",
    title: "NOXTUM AI — Enterprise AI Systems and Operational Transformation",
    description: "AI that solves real business problems. End-to-end cognitive architectures, autonomous multi-agent pipelines, and decision intelligence."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#030303] text-white">
        {children}
      </body>
    </html>
  );
}
