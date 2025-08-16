const BOT_PATTERNS = [
  /googlebot/i,
  /bingbot/i,
  /yandex/i,
  /duckduckbot/i,
  /baiduspider/i,
  /facebookexternalhit/i,
  /LinkedInBot/i,
  /Twitterbot/i,
  /Slackbot/i,
  /Discordbot/i,
  /WhatsApp/i,
  /TelegramBot/i,
  /Pinterestbot/i,
  /SkypeUriPreview/i,
  /Applebot/i,
];

function isBot(ua: string) {
  return BOT_PATTERNS.some((r) => r.test(ua));
}

export default async (request: Request, context: any) => {
  try {
    const ua = request.headers.get("user-agent") || "";
    const accept = request.headers.get("accept") || "";
    const isHtmlGet = (request.method === "GET" || request.method === "HEAD") && accept.includes("text/html");

    if (!isHtmlGet || !isBot(ua)) return context.next();

    const token = Deno.env.get("PRERENDER_TOKEN");
    if (!token) return context.next(); // Fall back to SPA if token missing

    const prerenderUrl = "https://service.prerender.io/" + request.url;
    const resp = await fetch(prerenderUrl, { headers: { "X-Prerender-Token": token, "User-Agent": ua } });

    if (!resp.ok) return context.next();

    const html = await resp.text();
    return new Response(html, {
      status: resp.status,
      headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, max-age=600" },
    });
  } catch {
    return context.next();
  }
};
