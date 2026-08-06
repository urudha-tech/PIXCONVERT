/**
 * Generates public/og-image.png — a 1200x630 branded Open Graph image.
 * Run with: node scripts/generate-og.mjs
 */
import sharp from "sharp"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = join(__dirname, "..", "public", "og-image.png")

const w = 1200
const h = 630

const svg = `
<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fafafa"/>
      <stop offset="100%" stop-color="#f0f0f0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${w}" height="${h}" fill="url(#bg)"/>

  <!-- Top accent bar -->
  <rect width="${w}" height="6" fill="#111111"/>

  <!-- Brand name -->
  <text x="80" y="260"
    font-family="Arial Black, Arial, sans-serif"
    font-size="120"
    font-weight="900"
    letter-spacing="-4"
    fill="#111111">SQUISH</text>

  <!-- Tagline -->
  <text x="84" y="320"
    font-family="Arial, sans-serif"
    font-size="32"
    fill="#555555">Free Online Image Tools</text>

  <!-- Pills row -->
  <rect x="84" y="370" width="210" height="44" rx="22" fill="#111111"/>
  <text x="189" y="398" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#ffffff" dy="0.35em">WebP Convert</text>

  <rect x="308" y="370" width="240" height="44" rx="22" fill="#111111"/>
  <text x="428" y="398" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#ffffff" dy="0.35em">Remove Background</text>

  <rect x="562" y="370" width="140" height="44" rx="22" fill="#111111"/>
  <text x="632" y="398" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#ffffff" dy="0.35em">Make PDF</text>

  <rect x="716" y="370" width="170" height="44" rx="22" fill="#111111"/>
  <text x="801" y="398" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#ffffff" dy="0.35em">Watermark</text>

  <!-- Privacy note -->
  <text x="84" y="480"
    font-family="Arial, sans-serif"
    font-size="22"
    fill="#888888">Nothing uploaded · No sign-up · Free forever</text>

  <!-- Domain -->
  <text x="84" y="528"
    font-family="Arial, sans-serif"
    font-size="20"
    fill="#aaaaaa">squish.urudha.com</text>

  <!-- Bottom accent bar -->
  <rect y="${h - 6}" width="${w}" height="6" fill="#111111"/>
</svg>`

try {
  await sharp(Buffer.from(svg)).png().toFile(out)
  console.log(`Generated ${out}`)
} catch (err) {
  // SVG compositing unavailable — create a solid branded placeholder instead
  console.warn("SVG rendering unavailable, creating solid placeholder:", err.message)
  await sharp({
    create: { width: w, height: h, channels: 3, background: { r: 250, g: 250, b: 250 } },
  })
    .png()
    .toFile(out)
  console.log(`Generated solid placeholder at ${out}`)
}
