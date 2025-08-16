// src/pages/Home.tsx
import React, { useEffect } from "react";

function ensureMeta(propertyOrName: { property?: string; name?: string }) {
  const selector = propertyOrName.property
    ? `meta[property="${propertyOrName.property}"]`
    : `meta[name="${propertyOrName.name}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    if (propertyOrName.property) {
      el.setAttribute("property", propertyOrName.property);
    } else if (propertyOrName.name) {
      el.setAttribute("name", propertyOrName.name);
    }
    document.head.appendChild(el);
  }
  return el!;
}

function setLink(rel: string, href: string) {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
  return link!;
}

const SITE_ORIGIN = "https://seattledigitalstudio.com";

export default function Home() {
  useEffect(() => {
    const absoluteUrl = SITE_ORIGIN + "/";
    const title = "Seattle Digital Studio — Websites, Apps, and Content Creation";
    const description =
      "Seattle Digital Studio builds modern websites, apps, and content solutions for small businesses in the Pacific Northwest and beyond.";
    const absoluteImageUrl = `${SITE_ORIGIN}/images/social-home.jpg`; 
    // 👉 Replace with your real homepage share image (1200x630 recommended)

    // Title + description
    document.title = title;
    const metaDesc = ensureMeta({ name: "description" });
    metaDesc.setAttribute("content", description);

    // Canonical
    setLink("canonical", absoluteUrl);

    // Open Graph
    ensureMeta({ property: "og:type" }).setAttribute("content", "website");
    ensureMeta({ property: "og:title" }).setAttribute("content", title);
    ensureMeta({ property: "og:description" }).setAttribute("content", description);
    ensureMeta({ property: "og:url" }).setAttribute("content", absoluteUrl);
    ensureMeta({ property: "og:image" }).setAttribute("content", absoluteImageUrl);

    // Twitter
    ensureMeta({ name: "twitter:card" }).setAttribute("content", "summary_large_image");
    ensureMeta({ name: "twitter:title" }).setAttribute("content", title);
    ensureMeta({ name: "twitter:description" }).setAttribute("content", description);
    ensureMeta({ name: "twitter:image" }).setAttribute("content", absoluteImageUrl);

    // Optional JSON-LD
    const ldSelector = 'script[type="application/ld+json"]#home-jsonld';
    let ld = document.querySelector(ldSelector) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "home-jsonld";
      document.head.appendChild(ld);
    }
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Seattle Digital Studio",
      url: SITE_ORIGIN,
      description,
      logo: `${SITE_ORIGIN}/images/logo-1200x630.png`,
      sameAs: [
        "https://www.linkedin.com/company/seattle-digital-studio",
        "https://www.facebook.com/seattledigitalstudio",
      ],
    };
    ld.textContent = JSON.stringify(jsonLd);

    // Signal to Prerender.io
    (window as any).prerenderReady = true;
  }, []);

  return (
    <main className="container mx-auto px-4 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Seattle Digital Studio
        </h1>
        <p className="text-lg mb-8">
          Websites, app prototypes, and content creation for small businesses in the Pacific Northwest.
        </p>
        {/* Add your homepage hero/CTA here */}
      </section>
    </main>
  );
}
