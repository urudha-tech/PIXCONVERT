import type { ConversionOptions } from "@/types/conversion"
import { isHeic } from "./formats"

export interface ClientConvertResult {
  buffer: ArrayBuffer
  targetMissed: boolean
}

async function decodeToCanvas(source: File | Blob): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(source)
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      canvas.getContext("2d")!.drawImage(img, 0, 0)
      URL.revokeObjectURL(url)
      resolve(canvas)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error("Failed to decode image — unsupported or corrupted file."))
    }
    img.src = url
  })
}

async function fileToCanvas(file: File): Promise<HTMLCanvasElement> {
  if (isHeic(file.name) || file.type === "image/heic" || file.type === "image/heif") {
    const heic2any = (await import("heic2any")).default
    const result = await heic2any({ blob: file, toType: "image/png" })
    const blob = Array.isArray(result) ? result[0] : result
    return decodeToCanvas(blob as Blob)
  }
  return decodeToCanvas(file)
}

function encodeCanvas(canvas: HTMLCanvasElement, quality: number): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) { reject(new Error("WebP encoding failed")); return }
        blob.arrayBuffer().then(resolve).catch(reject)
      },
      "image/webp",
      quality / 100,
    )
  })
}

async function binarySearch(canvas: HTMLCanvasElement, targetSizeKb: number): Promise<ClientConvertResult> {
  const targetBytes = targetSizeKb * 1024
  let lo = 1, hi = 100
  let best: ArrayBuffer | undefined

  for (let i = 0; i < 8; i++) {
    const mid = Math.round((lo + hi) / 2)
    const buf = await encodeCanvas(canvas, mid)
    if (buf.byteLength <= targetBytes) { best = buf; lo = mid + 1 }
    else { hi = mid - 1 }
    if (lo > hi) break
  }

  if (!best) {
    return { buffer: await encodeCanvas(canvas, 1), targetMissed: true }
  }
  return { buffer: best, targetMissed: false }
}

export async function convertFileToWebP(
  file: File,
  options: ConversionOptions,
): Promise<ClientConvertResult> {
  const canvas = await fileToCanvas(file)

  if (options.targetSizeKb && !options.lossless) {
    return binarySearch(canvas, options.targetSizeKb)
  }

  const quality = options.lossless ? 100 : options.quality
  const buffer = await encodeCanvas(canvas, quality)
  return { buffer, targetMissed: false }
}

export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const uint8 = new Uint8Array(buffer)
  let binary = ""
  const chunk = 8192
  for (let i = 0; i < uint8.length; i += chunk) {
    binary += String.fromCharCode(...Array.from(uint8.subarray(i, i + chunk)))
  }
  return btoa(binary)
}
