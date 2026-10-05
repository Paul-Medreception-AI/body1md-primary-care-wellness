import fs from 'fs'
import path from 'path'

// Pixel size of a file in public/, read from its header at build time (server components only).
// Lets a photo render at its own shape instead of being cropped into a fixed box, without a
// hand-kept size table that goes stale the first time an image is added. JPEG and PNG only;
// anything else (or a missing file) returns null and the caller falls back to a cropped frame.
export function imageSize(publicPath: string): { width: number; height: number } | null {
  try {
    const b = fs.readFileSync(path.join(process.cwd(), 'public', publicPath.replace(/^\//, '')))
    if (b.readUInt32BE(0) === 0x89504e47) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) }
    if (b[0] === 0xff && b[1] === 0xd8) {
      let i = 2
      while (i < b.length) {
        if (b[i] !== 0xff) { i++; continue }
        const marker = b[i + 1]
        const len = b.readUInt16BE(i + 2)
        // SOF0..SOF15 carry the frame size, except DHT (C4), JPG (C8) and DAC (CC).
        if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
          return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) }
        }
        i += 2 + len
      }
    }
  } catch {}
  return null
}
