// netlify/edge-functions/prerender.ts
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
  /applebot/i,
];

function isBot(ua: string) {
  return BOT_PATTERNS.some((r) => r.test(ua));
}

export default async (request: Request, context: any) => {
  try {
    const ua = request.headers.get("user-agent") || "";
    const isGetOrHead = request.method === "GET" || request.method === "HEAD";

    // Only prerender for GET/HEAD from known bots
    if (!isGetOrHead || !isBot(ua)) {
      return context.next();
    }

    const token = Deno.env.get("PRERENDER_TOKEN");
    if (!token) {
      // No token configured — fall back to SPA
      const downstream = await context.next();
      return new Response(await downstream.text(), {
        status: downstream.status,
        headers: {
          ...Object.fromEntries(downstream.headers),
          "x-prerender-debug": "no-token",
        },
      });
    }

    const prerenderUrl = "https://service.prerender.io/" + request.url;
    const resp = await fetch(prerenderUrl, {
      headers: {
        "X-Prerender-Token": token,
        "User-Agent": ua,
      },
    });

    if (resp.ok) {
      const html = await resp.text();
      return new Response(html, {
        status: resp.status,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=600",
          "x-prerender-debug": "hit",
        },
      });
    }

    // Fallback to normal SPA if prerender fails
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
