"use client"

import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { MainWorkspace } from "@/components/layout/MainWorkspace"
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
    </>
  )
}
