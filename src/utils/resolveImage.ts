// src/utils/resolveImage.ts
// Flexible resolvers for images under /public/images (no moves/renames required).

// For on-page <img>, WEBP first is fine (modern browsers)
// For OG/Twitter, prefer JPG/PNG because LinkedIn often skips WEBP
const EXTS_PAGE = ["webp", "jpg", "jpeg", "png"];
const EXTS_OG   = ["jpg", "jpeg", "png", "webp"];

function normalize(p: string) {
  if (!p) return "";
  if (/^https?:\/\//i.test(p)) return p;
  return p.startsWith("/") ? p : "/" + p;
}

function hasExtension(s: string) {
  return /\.[a-z0-9]+$/i.test(s);
}

/** Default resolver for on-page images (<img src=...>) */
export function resolvePublicImage(input: string, baseDir = "/images/"): string {
  if (!input) return "/images/fallback-social.jpg";
  if (/^https?:\/\//i.test(input)) return input;

  if (input.startsWith("images/") || input.startsWith("/images/")) {
    return normalize(input);
  }
  if (hasExtension(input)) {
    return normalize(baseDir + input.replace(/^\/+/, ""));
  }

  const name = input.replace(/^\/+/, "");
  // WEBP first for page rendering; <img onError> can still swap to fallback
  return normalize(`${baseDir}${name}.${EXTS_PAGE[0]}`);
}

/** Safer path builder for OG/Twitter tags (prefer JPG/PNG over WEBP) */
export function resolveOgImagePath(input: string, baseDir = "/images/"): string {
  if (!input) return "/images/fallback-social.jpg";
  if (/^https?:\/\//i.test(input)) return input;

  if (input.startsWith("images/") || input.startsWith("/images/")) {
    return normalize(input);
  }
  if (hasExtension(input)) {
    return normalize(baseDir + input.replace(/^\/+/, ""));
  }

  const name = input.replace(/^\/+/, "");
  // Prefer JPG/PNG to maximize compatibility with LinkedIn
  return normalize(`${baseDir}${name}.${EXTS_OG[0]}`); // .jpg
}

