import type { Metadata } from "next";
import { Caudex, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FilesProvider } from "@/context/FilesContext";
import { ProcessingProvider } from "@/context/ProcessingContext";
import { RibbonBackground } from "@/components/layout/RibbonBackground";

const caudex = Caudex({
  variable: "--font-caudex",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE = "https://squish.urudha.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Squish - Free Online Image Tools",
    template: "%s | Squish",
  },
  description:
    "Free browser-based image tools: convert to WebP, remove backgrounds, compress images, make PDFs, add watermarks and more. No uploads. No sign-up. Instant results.",
  keywords: [
    "image converter", "webp converter", "remove background online", "image compressor",
    "images to pdf", "bulk image convert", "online image tools", "free image editor",
    "convert jpg to webp", "background remover", "image tools no upload",
  ],
  authors: [{ name: "Urudha", url: BASE }],
  creator: "Urudha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Squish",
    title: "Squish - Free Online Image Tools",
    description:
      "Convert to WebP, remove backgrounds, compress, make PDFs and more. All in your browser. Nothing uploaded.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Squish - Free Online Image Tools",
    description:
      "Convert to WebP, remove backgrounds, compress, make PDFs and more. All in your browser. Nothing uploaded.",
    creator: "@urudha",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caudex.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative overflow-x-hidden bg-white dark:bg-neutral-950">
        <ProcessingProvider>
          <RibbonBackground />
          <div className="relative z-10 min-h-full flex flex-col flex-1">
            <FilesProvider>
              {children}
              <footer className="border-t border-neutral-100 py-6 text-center text-xs text-neutral-400 dark:border-neutral-900 bg-white dark:bg-neutral-950">
                Squish by Urudha · Fast, private, free
              </footer>
            </FilesProvider>
          </div>
        </ProcessingProvider>
      </body>
    </html>
  );
}
