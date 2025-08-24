// netlify/edge-functions/prerender.ts

const BOT_PATTERNS = [
  /googlebot/i, /bingbot/i, /yandex/i, /duckduckbot/i, /baiduspider/i,
  /facebookexternalhit/i, // Facebook
  /linkedinbot/i,         // LinkedIn
  /twitterbot/i, /slackbot/i, /discordbot/i,
  /whatsapp/i, /telegrambot/i, /pinterestbot/i,
  /skypeuripreview/i, /embedly/i, /quora link preview/i,
  /vkShare/i, /redditbot/i
];

function isBot(ua: string) {
  return BOT_PATTERNS.some((r) => r.test(ua));
}

// Skip prerender for static assets
const STATIC_EXT = /\.(?:png|jpe?g|webp|gif|svg|ico|css|js|mjs|map|txt|xml|pdf|json|woff2?|ttf|eot|mp4|webm|ogv|mp3|ogg|wav)$/i;

export default async (req: Request, context: any) => {
  const url = new URL(req.url);
  const ua = req.headers.get("user-agent") || "";
  const isGetOrHead = req.method === "GET" || req.method === "HEAD";
  const looksStatic = STATIC_EXT.test(url.pathname);

  // Always bypass prerender for non-GET/HEAD or static assets or non-bots
  if (!isGetOrHead || looksStatic || !isBot(ua)) {
    return context.next();
  }

  try {
    const prerenderEndpoint = "https://service.prerender.io/";
    const targetUrl = url.origin + url.pathname + url.search;
    const fetchUrl = prerenderEndpoint + targetUrl;

    const token = (globalThis as any).Deno?.env?.get("PRERENDER_TOKEN") || "";

    const headers: Record<string, string> = {
      "User-Agent": ua,
      "X-Forwarded-Proto": url.protocol.replace(":", ""),
      "X-Forwarded-Host": url.host,
      "X-Original-Url": targetUrl,
      "Accept": "text/html,application/xhtml+xml,application/xml",
      "Cache-Control": "no-cache",
    };
    if (token) headers["X-Prerender-Token"] = token;

    const prerenderRes = await fetch(fetchUrl, { method: "GET", headers });

    if (prerenderRes.ok) {
      const html = await prerenderRes.text();
      return new Response(html, {
        status: 200,
        headers: {
          "content-type": "text/html; charset=utf-8",
          "x-prerender-debug": "hit",
          "cache-control": "public, max-age=600",
        },
      });
    }

    const downstream = await context.next();
    return new Response(await downstream.text(), {
      status: downstream.status,
      headers: {
        ...Object.fromEntries(downstream.headers),
        "x-prerender-debug": "miss",
      },
    });
  } catch {
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


