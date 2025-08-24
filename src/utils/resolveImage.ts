// Flexible resolver for images living under /public/images (no moves needed).
// Accepts:
//  - "blog/advertising-team"         (no extension)
//  - "blog/advertising-team.jpg"     (has extension)
//  - "images/blog/hero.png"          (full path under /public)
//  - "/images/hero.webp"             (rooted path)
//  - "https://cdn.example.com/x.jpg" (absolute URL)

const EXTS = ["webp", "jpg", "jpeg", "png"];

function normalize(p: string) {
  if (!p) return "";
  if (/^https?:\/\//i.test(p)) return p;
  return p.startsWith("/") ? p : "/" + p;
}

/** Resolve a path for an asset in /public/images by default. */
export function resolvePublicImage(input: string, baseDir = "/images/"): string {
  if (!input) return "/images/fallback-social.jpg";

  // Absolute URL
  if (/^https?:\/\//i.test(input)) return input;

  const hasExt = /\.[a-z0-9]+$/i.test(input);

  // Already points into /images → keep as-is
  if (input.startsWith("images/") || input.startsWith("/images/")) {
    return normalize(input);
  }

  // Subpath like "blog/foo.jpg" → prefix with /images/
  if (hasExt) {
    return normalize(baseDir + input.replace(/^\/+/, ""));
  }

  // No extension provided → prefer .webp; onError will fall back to a site-wide default
  const name = input.replace(/^\/+/, "");
  return normalize(`${baseDir}${name}.${EXTS[0]}`);
}

