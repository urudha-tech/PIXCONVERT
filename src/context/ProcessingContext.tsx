"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

const ProcessingContext = createContext<{
  isProcessing: boolean
  setIsProcessing: (v: boolean) => void
}>({ isProcessing: false, setIsProcessing: () => {} })

export function ProcessingProvider({ children }: { children: ReactNode }) {
  const [isProcessing, setIsProcessing] = useState(false)
  return (
    <ProcessingContext.Provider value={{ isProcessing, setIsProcessing }}>
      {children}
    </ProcessingContext.Provider>
  )
}

export function useProcessing() {
  return useContext(ProcessingContext)
}
