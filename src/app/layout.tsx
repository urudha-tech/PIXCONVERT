import type { Metadata } from "next";
import { Caudex, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FilesProvider } from "@/context/FilesContext";

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
        {/* Global ribbon background */}
        <div className="pointer-events-none fixed inset-0 z-0 select-none bg-white dark:bg-neutral-950" aria-hidden>
          {[-8, 7, 22, 37, 52, 67, 82, 97, 112, 127, 142].map((top, i) => (
            <div
              key={i}
              className={`absolute left-[-50%] w-[200%] ${i % 2 === 1 ? (Math.floor(i / 2) % 2 === 0 ? "ribbon-scroll-right" : "ribbon-scroll-left") : ""}`}
              style={{
                top: `${top}%`,
                height: "120px",
                transform: "rotate(-12deg)",
                transformOrigin: "center center",
                ...(i % 2 === 1
                  ? Math.floor(i / 2) % 2 === 0
                    ? {
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' fill='black'/%3E%3Cpolygon points='0,0 60,60 0,120 22,120 82,60 22,0' fill='white'/%3E%3Cpolygon points='60,0 120,60 60,120 82,120 142,60 82,0' fill='white'/%3E%3C/svg%3E")`,
                        backgroundSize: "120px 120px",
                        backgroundRepeat: "repeat-x",
                      }
                    : {
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' fill='black'/%3E%3Cpolygon points='120,0 60,60 120,120 98,120 38,60 98,0' fill='white'/%3E%3Cpolygon points='60,0 0,60 60,120 38,120 -22,60 38,0' fill='white'/%3E%3C/svg%3E")`,
                        backgroundSize: "120px 120px",
                        backgroundRepeat: "repeat-x",
                      }
                  : { background: "black" }),
              }}
            />
          ))}
        </div>
        <div className="relative z-10 min-h-full flex flex-col flex-1">
          <FilesProvider>
            {children}
            <footer className="border-t border-neutral-100 py-6 text-center text-xs text-neutral-400 dark:border-neutral-900 bg-white dark:bg-neutral-950">
              Squish by Urudha · Fast, private, free
            </footer>
          </FilesProvider>
        </div>
      </body>
    </html>
  );
}
