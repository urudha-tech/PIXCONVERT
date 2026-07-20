import type { IngestedFile } from "@/types/upload"
import type { ConversionError } from "@/types/conversion"
import { isAccepted, isAlreadyWebP } from "./formats"

export interface ValidationResult {
  valid: boolean
  error?: ConversionError
}

export function validateFile(
  file: IngestedFile,
  seenNames: Set<string>
): ValidationResult {
  const { file: f, relativePath } = file

  if (f.size === 0) {
    return { valid: false, error: { code: "EMPTY_FILE", message: "File is empty." } }
  }

  if (isAlreadyWebP(f.name, f.type)) {
    return { valid: false, error: { code: "ALREADY_WEBP", message: "File is already WebP." } }
  }

  if (!isAccepted(f.name, f.type)) {
    return { valid: false, error: { code: "UNSUPPORTED_FORMAT", message: "Unsupported format." } }
  }

  const key = relativePath || f.name
  if (seenNames.has(key)) {
    return { valid: false, error: { code: "DUPLICATE", message: "Duplicate file skipped." } }
  }
  seenNames.add(key)

  return { valid: true }
}
