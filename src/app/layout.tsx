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
    "Free online image tools: compress images, convert to WebP, remove backgrounds, reduce image size, make PDFs, add watermarks and more. No uploads. No sign-up. Instant results.",
  keywords: [
    // converters
    "image converter", "webp converter", "convert jpg to webp", "convert png to webp",
    "bulk image converter", "image format converter", "online image converter free",
    // compression / size
    "image compressor", "compress image online", "reduce image size", "image size reducer",
    "compress jpg online", "compress png online", "reduce photo size", "image optimizer",
    "make image smaller", "resize image online free", "image file size reducer",
    // background removal
    "remove background online", "background remover", "remove image background free",
    "background eraser", "transparent background maker", "cut out background",
    // editor
    "free image editor", "best image editor online", "photo editor online free",
    "crop image online", "rotate image online", "image editor no download",
    // PDF
    "images to pdf", "jpg to pdf", "png to pdf", "combine images into pdf",
    "convert photos to pdf online free",
    // watermark
    "add watermark to image", "watermark photo online", "batch watermark images",
    // EXIF / metadata
    "exif viewer", "image metadata viewer", "remove exif data", "strip gps from photo",
    // video
    "images to video", "video to images", "extract frames from video",
    // general
    "online image tools", "free photo tools", "image tools no upload", "browser image tools",
    // brand
    "squish", "squish image", "squish image tool", "squish compressor", "squish image editor",
    "squish convert image", "squish remove background", "squish webp", "squish pdf",
    "squish photo editor", "squish image converter", "squish background remover",
    "urudha squish", "squish.urudha.com",
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
