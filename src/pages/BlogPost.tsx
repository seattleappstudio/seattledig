// src/pages/BlogPost.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, ArrowRight } from "lucide-react";
import { getPostBySlug, getRelatedPosts, formatDate, blogCategories, loadMarkdownContent } from "../utils/blogUtils";
import { BlogPost as BlogPostType } from "../types/blog";

function ensureMeta(propertyOrName: { property?: string; name?: string }) {
  const selector = propertyOrName.property
    ? `meta[property="${propertyOrName.property}"]`
    : `meta[name="${propertyOrName.name}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    if (propertyOrName.property) el.setAttribute("property", propertyOrName.property);
    if (propertyOrName.name) el.setAttribute("name", propertyOrName.name);
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

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      const foundPost = getPostBySlug(slug) || null;
      setPost(foundPost);

      if (!foundPost) {
        setLoading(false);
        return;
      }

      // Load markdown if present
      if (foundPost.contentFile && foundPost.contentFile.endsWith(".md")) {
        const postContent = await loadMarkdownContent(foundPost.contentFile);
        setContent(postContent);
      } else {
        setContent(foundPost.contentHtml || "");
      }

      // ---------- SEO / Social meta (absolute URLs) ----------
      const absolutePostUrl = `${SITE_ORIGIN}/blog/${foundPost.slug}`;
      const imageIsAbsolute =
        typeof foundPost.image === "string" && /^(https?:)?\/\//i.test(foundPost.image);
      const absoluteImageUrl = foundPost.image
        ? imageIsAbsolute
          ? foundPost.image
          : `${SITE_ORIGIN}${foundPost.image.startsWith("/") ? "" : "/"}${foundPost.image}`
        : `${SITE_ORIGIN}/images/social-default.jpg`; // create this or change

      const title = foundPost.title || "Seattle Digital Studio";
      const description =
        foundPost.seo?.metaDescription || foundPost.excerpt || "Seattle Digital Studio blog post";

      // Title + meta description
      document.title = `${title} | Seattle Digital Studio`;
      const metaDesc = ensureMeta({ name: "description" });
      metaDesc.setAttribute("content", description);

      // Canonical
      setLink("canonical", absolutePostUrl);

      // Open Graph
      ensureMeta({ property: "og:type" }).setAttribute("content", "article");
      ensureMeta({ property: "og:title" }).setAttribute("content", title);
      ensureMeta({ property: "og:description" }).setAttribute("content", description);
      ensureMeta({ property: "og:url" }).setAttribute("content", absolutePostUrl);
      ensureMeta({ property: "og:image" }).setAttribute("content", absoluteImageUrl);

      if (foundPost.publishDate) {
        ensureMeta({ property: "article:published_time" }).setAttribute(
          "content",
          new Date(foundPost.publishDate).toISOString()
        );
      }

      // Twitter
      ensureMeta({ name: "twitter:card" }).setAttribute("content", "summary_large_image");
      ensureMeta({ name: "twitter:title" }).setAttribute("content", title);
      ensureMeta({ name: "twitter:description" }).setAttribute("content", description);
      ensureMeta({ name: "twitter:image" }).setAttribute("content", absoluteImageUrl);

      // JSON-LD (optional but nice for SEO)
      const ldSelector = 'script[type="application/ld+json"]#post-jsonld';
      let ld = document.querySelector(ldSelector) as HTMLScriptElement | null;
      if (!ld) {
        ld = document.createElement("script");
        ld.type = "application/ld+json";
        ld.id = "post-jsonld";
        document.head.appendChild(ld);
      }
      ld.textContent = JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description,
          image: absoluteImageUrl,
          datePublished: foundPost.publishDate ? new Date(foundPost.publishDate).toISOString() : undefined,
          mainEntityOfPage: absolutePostUrl,
          author: foundPost.author ? { "@type": "Person", name: foundPost.author } : undefined,
          publisher: {
            "@type": "Organization",
            name: "Seattle Digital Studio",
            logo: {
              "@type": "ImageObject",
              url: `${SITE_ORIGIN}/images/logo-1200x630.png`,
            },
          },
          url: absolutePostUrl,
        },
        null,
        0
      );

      // Tell Prerender.io page is ready
      (window as any).prerenderReady = true;

      // Related posts
      const related = getRelatedPosts(foundPost);
      setRelatedPosts(related);

      setLoading(false);
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return <div className="max-w-4xl mx-auto px-4 py-16">Loading…</div>;
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-pacific/5 via-white to-pacific/10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-up">
            {/* Back to Blog Link */}
            <Link
              to="/blog"
              className="inline-flex items-center text-pacific hover:text-pacific-dark transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-0.5" />
              Back to Blog
            </Link>

            {/* Title & Meta */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600">
              {post.publishDate && (
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-pacific" />
                  {formatDate(post.publishDate)}
                </span>
              )}
              {post.readTime && (
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-pacific" />
                  {post.readTime} min read
                </span>
              )}
              {post.author && (
                <span className="inline-flex items-center gap-2">
                  <User className="w-4 h-4 text-pacific" />
                  {post.author}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {post.image && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-xl shadow-md"
            loading="eager"
          />
        </div>
      )}

      {/* Content */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {content ? (
            <article
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <article className="prose prose-lg max-w-none">
              <p>{post.excerpt || post.seo?.metaDescription || ""}</p>
            </article>
          )}

          {/* Tags / Categories */}
          {post.categories?.length ? (
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.categories.map((catId) => {
                  // blogCategories is a Record<string, { id; name; color; ... }>
                  const cat = (blogCategories as any)[catId];
                  return (
                    <span
                      key={catId}
                      className="inline-flex items-center gap-2 bg-pacific/10 text-pacific px-3 py-1 rounded-full"
                    >
                      <Tag className="w-3.5 h-3.5" />
                      {cat?.name || catId}
                    </span>
                  );
                })}
              </div>
            </div>
          ) : null}

          {/* Share */}
          <div className="mt-10">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `${SITE_ORIGIN}/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pacific hover:text-pacific-dark"
            >
              <Share2 className="w-4 h-4" />
              Share on LinkedIn
            </a>
          </div>

          {/* Related Posts */}
          {relatedPosts.length ? (
            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-6">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    to={`/blog/${rp.slug}`}
                    key={rp.slug}
                    className="group block p-5 border border-gray-200 rounded-xl hover:border-pacific/40 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-pacific transition-colors">
                          {rp.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {rp.excerpt || rp.seo?.metaDescription || ""}
                        </p>
                        <span className="inline-flex items-center gap-2 text-pacific mt-3 text-sm">
                          Read more
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                      {rp.image ? (
                        <img
                          src={rp.image}
                          alt={rp.title}
                          className="w-24 h-16 object-cover rounded-md border"
                        />
                      ) : null}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
