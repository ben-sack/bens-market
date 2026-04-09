export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

export const assetUrl = (filename: string, t = 0.01) =>
  `/assets/${filename}#t=${t}`

export const px = (v: number) => `${v}px`
