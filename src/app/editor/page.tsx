"use client"

import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { MainWorkspace } from "@/components/layout/MainWorkspace"
import { ToolInfo } from "@/components/layout/ToolInfo"
import { usePendingFiles } from "@/context/FilesContext"
import { PageCard } from "@/components/layout/PageCard"

export default function EditorPage() {
  const router = useRouter()
  const { pendingFiles, clearFiles } = usePendingFiles()

  const handleClose = () => {
    clearFiles()
    router.push("/")
  }

  return (
    <>
      <h1 className="sr-only">WebP Converter - Free Online Bulk Image Converter</h1>

      {/* Top bar */}
      <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between border-b border-neutral-100 bg-white/90 px-4 backdrop-blur-sm dark:border-neutral-900 dark:bg-neutral-950/90 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Back to home"
            className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
          >
            <X className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            WebP Converter
          </span>
        </div>
        <span className="text-xs text-neutral-400">
          {pendingFiles.length} file{pendingFiles.length !== 1 ? "s" : ""} selected
        </span>
      </header>

      {/* Workspace */}
      <PageCard>
        <div className="px-4 sm:px-6">
          <MainWorkspace initialFiles={pendingFiles} onClose={handleClose} />
        </div>
      </PageCard>

      {/* SEO content below workspace */}
      <div className="mx-3 sm:mx-[18%] mb-6">
        <div className="px-4 sm:px-6">
          <ToolInfo
            heading="Free Online WebP Converter"
            description="Squish converts JPG, PNG, HEIC, AVIF and GIF images to WebP in bulk — directly in your browser. WebP files are 25-80% smaller than JPEG with the same visual quality, making them ideal for websites and apps. No uploads, no account, no limits."
            features={[
              { title: "Up to 80% Smaller", body: "WebP outperforms JPEG and PNG on file size. Convert your entire image library and cut your site's bandwidth." },
              { title: "Batch + ZIP Support", body: "Drop hundreds of images or a ZIP archive. Convert all at once and download results as a ZIP preserving folder structure." },
              { title: "Lossless or Lossy", body: "Choose lossless for pixel-perfect output or lossy with custom quality (1-100) for the smallest possible file size." },
            ]}
          />
        </div>
      </div>
    </>
  )
}
