import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Khele | Software Engineer",
  description: "Software Engineer building production SaaS platforms, AI systems, and business automation tools. TypeScript, React, Next.js, Node.js, Python, FastAPI, PostgreSQL.",
  metadataBase: new URL("https://jameskhele.github.io/james-khele-portfolio"),
  openGraph: {
    title: "James Khele | Software Engineer",
    description: "Software Engineer building production SaaS platforms, AI systems, and business automation tools.",
    url: "https://jameskhele.github.io/james-khele-portfolio/",
    siteName: "James Khele Portfolio",
    images: [
      {
        url: "https://jameskhele.github.io/james-khele-portfolio/profile.png",
        width: 800,
        height: 800,
        alt: "James Khele — Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "James Khele | Software Engineer",
    description: "Software Engineer building production SaaS platforms, AI systems, and business automation tools.",
    images: ["https://jameskhele.github.io/james-khele-portfolio/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0B] text-[#F3F4F6] selection:bg-indigo-500/30">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
