// netlify/edge-functions/prerender.ts
// Deno/Edge runtime (TypeScript)
const BOT_PATTERNS = [
  /googlebot/i,
  /bingbot/i,
  /yandex/i,
  /duckduckbot/i,
  /baiduspider/i,
  /facebookexternalhit/i, // Facebook
  /linkedinbot/i,         // LinkedIn
  /twitterbot/i,
  /slackbot/i,
  /discordbot/i,
  /whatsapp/i,
  /telegrambot/i,
  /pinterestbot/i,
  /skypeuripreview/i,
  /embedly/i,
  /quora link preview/i,
  /vkShare/i,
  /redditbot/i
];

function isBot(ua: string) {
  return BOT_PATTERNS.some((r) => r.test(ua));
}

export default async (req: Request, context: any) => {
  try {
    const ua = req.headers.get("user-agent") || "";
    const isGetOrHead = req.method === "GET" || req.method === "HEAD";

    // Only prerender for GET/HEAD from known bots
    if (!isGetOrHead || !isBot(ua)) return context.next();

    // Build prerender URL
    const originalUrl = new URL(req.url);
    const prerenderEndpoint = "https://service.prerender.io/"; // or your own prerender service
    const targetUrl = new URL(originalUrl.pathname + originalUrl.search, originalUrl.origin).toString();
    const fetchUrl = prerenderEndpoint + targetUrl;

    const token = (globalThis as any).Deno?.env?.get("PRERENDER_TOKEN") || "";
    const headers: Record<string, string> = {
      "User-Agent": ua,
      "X-Forwarded-Proto": originalUrl.protocol.replace(":", ""),
      "X-Forwarded-Host": originalUrl.host,
      "X-Original-Url": targetUrl,
      "Accept": "text/html,application/xhtml+xml,application/xml",
      "Cache-Control": "no-cache"
    };
    if (token) headers["X-Prerender-Token"] = token;

    const prerenderRes = await fetch(fetchUrl, {
      method: "GET",
      headers,
    });

    // If prerender works, return it
    if (prerenderRes.ok) {
      const html = await prerenderRes.text();
      return new Response(html, {
        status: 200,
        headers: {
          "content-type": "text/html; charset=utf-8",
          "x-prerender-debug": "hit",
          // Let platforms cache for a bit; tune to your liking
          "cache-control": "public, max-age=600"
        },
      });
    }

    // Fallback to normal app if prerender misses
    const downstream = await context.next();
    return new Response(await downstream.text(), {
      status: downstream.status,
      headers: {
        ...Object.fromEntries(downstream.headers),
        "x-prerender-debug": "miss",
      },
    });
  } catch (err) {
    const downstream = await context.next();
    return new Response(await downstream.text(), {
      status: downstream.status,
      headers: {
        ...Object.fromEntries(downstream.headers),
        "x-prerender-debug": "error",
      },
    });
  }
};
