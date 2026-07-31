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

export const metadata: Metadata = {
  title: "Squish — Fast image tools",
  description:
    "Convert, compress, crop, remove backgrounds and more. All in your browser. Nothing uploaded.",
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
