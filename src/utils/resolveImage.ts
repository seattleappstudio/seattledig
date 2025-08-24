// src/utils/resolveImage.ts
// Flexible resolvers for images under /public/images (no moves/renames required).
// - Use resolvePublicImage() for on-page <img> (WEBP-first for modern browsers).
// - Use resolveOgImagePath() for OG/Twitter meta (JPG/PNG-first for LinkedIn/X).

// On-page: prefer WEBP for smaller files; still works if JPG/PNG provided
const EXTS_PAGE = ["webp", "jpg", "jpeg", "png"];
// Social: prefer JPG/PNG because some scrapers ignore WEBP
const EXTS_OG = ["jpg", "jpeg", "png", "webp"];

function normalize(p: string) {
  if (!p) return "";
  if (/^https?:\/\//i.test(p)) return p;          // absolute URL (CDN etc.)
  return p.startsWith("/") ? p : "/" + p;          // ensure leading slash
}

function hasExtension(s: string) {
  return /\.[a-z0-9]+$/i.test(s);
}

/**
 * Resolve a public image path for on-page rendering.
 * Accepts:
 *  - "blog/advertising-team"          (no extension)
 *  - "blog/advertising-team.jpg"      (has extension)
 *  - "images/blog/hero.png"           (full path under /public)
 *  - "/images/hero.webp"              (rooted path)
 *  - "https://cdn.example.com/img.jpg" (absolute URL)
 */
export function resolvePublicImage(input: string, baseDir = "/images/"): string {
  if (!input) return "/images/fallback-social.jpg";

  // Absolute URL
  if (/^https?:\/\//i.test(input)) return input;

  // Already a rooted /images path
  if (input.startsWith("images/") || input.startsWith("/images/")) {
    return normalize(input);
  }

  // Provided with extension → prefix with baseDir
  if (hasExtension(input)) {
    return normalize(baseDir + input.replace(/^\/+/, ""));
  }

  // No extension → try WEBP by default for on-page usage
  const name = input.replace(/^\/+/, "");
  return normalize(`${baseDir}${name}.${EXTS_PAGE[0]}`); // .webp
}

/**
 * Resolve a public image path optimized for OG/Twitter tags.
 * Prefers JPG/PNG to maximize compatibility with LinkedIn/X.
 * Accepts same inputs as resolvePublicImage().
 */
export function resolveOgImagePath(input: string, baseDir = "/images/"): string {
  if (!input) return "/images/fallback-social.jpg";

  // Absolute URL
  if (/^https?:\/\//i.test(input)) return input;

  // Already a rooted /images path
  if (input.startsWith("images/") || input.startsWith("/images/")) {
    return normalize(input);
  }

  // Provided with extension → prefix with baseDir
  if (hasExtension(input)) {
    return normalize(baseDir + input.replace(/^\/+/, ""));
  }

  // No extension → prefer JPG for OG/Twitter
  const name = input.replace(/^\/+/, "");
  return normalize(`${baseDir}${name}.${EXTS_OG[0]}`); // .jpg
}


