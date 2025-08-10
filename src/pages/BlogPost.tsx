import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, ArrowRight } from 'lucide-react';
import { getPostBySlug, getRelatedPosts, formatDate, parseMarkdown, getCategoryColor, blogCategories, loadMarkdownContent } from '../utils/blogUtils';
import { BlogPost as BlogPostType } from '../types/blog';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (slug) {
        const foundPost = getPostBySlug(slug);
        if (foundPost) {
          setPost(foundPost);
          setRelatedPosts(getRelatedPosts(foundPost));
          
          // Load content from markdown file or use inline content
          let postContent = '';
          if (foundPost.contentFile) {
            postContent = await loadMarkdownContent(foundPost.contentFile);
          } else if (foundPost.content) {
            postContent = foundPost.content;
          }
          setContent(postContent);
          
          // Update document title and meta description
          document.title = `${foundPost.title} | Seattle Digital Studio`;
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', foundPost.seo.metaDescription);
          }
          
          // Add/update keywords meta tag
          let keywordsMeta = document.querySelector('meta[name="keywords"]');
          if (!keywordsMeta) {
            keywordsMeta = document.createElement('meta');
            keywordsMeta.setAttribute('name', 'keywords');
            document.head.appendChild(keywordsMeta);
          }
          keywordsMeta.setAttribute('content', foundPost.seo.keywords.join(', '));
          
          // Add Open Graph tags
          let ogTitle = document.querySelector('meta[property="og:title"]');
          if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
          }
          ogTitle.setAttribute('content', foundPost.title);
          
          let ogDescription = document.querySelector('meta[property="og:description"]');
          if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
          }
          ogDescription.setAttribute('content', foundPost.excerpt);
          
          let ogImage = document.querySelector('meta[property="og:image"]');
          if (!ogImage) {
            ogImage = document.createElement('meta');
            ogImage.setAttribute('property', 'og:image');
            document.head.appendChild(ogImage);
          }
          ogImage.setAttribute('content', foundPost.image);
          
          let ogType = document.querySelector('meta[property="og:type"]');
          if (!ogType) {
            ogType = document.createElement('meta');
            ogType.setAttribute('property', 'og:type');
            document.head.appendChild(ogType);
          }
          ogType.setAttribute('content', 'article');
        }
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pacific"></div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

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
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
              Back to Blog
            </Link>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((categoryId) => (
                <Link
                  key={categoryId}
                  to={`/blog?category=${categoryId}`}
                  className="px-3 py-1 text-sm font-medium rounded-full text-white hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: getCategoryColor(categoryId) }}
                >
                  {blogCategories[categoryId]?.name || categoryId}
                </Link>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{post.readingTime} min read</span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center hover:text-pacific transition-colors"
              >
                <Share2 size={18} className="mr-2" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-xl animate-scale-in">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none animate-slide-up"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
            style={{
              '--tw-prose-body': '#374151',
              '--tw-prose-headings': '#111827',
              '--tw-prose-links': '#1CA9C9',
              '--tw-prose-bold': '#111827',
              '--tw-prose-counters': '#6B7280',
              '--tw-prose-bullets': '#D1D5DB',
              '--tw-prose-hr': '#E5E7EB',
              '--tw-prose-quotes': '#111827',
              '--tw-prose-quote-borders': '#E5E7EB',
              '--tw-prose-captions': '#6B7280',
              '--tw-prose-code': '#111827',
              '--tw-prose-pre-code': '#E5E7EB',
              '--tw-prose-pre-bg': '#1F2937',
              '--tw-prose-th-borders': '#D1D5DB',
              '--tw-prose-td-borders': '#E5E7EB',
            } as React.CSSProperties}
          />
        </div>
      </article>

      {/* Tags */}
      {post.tags.length > 0 && (
        <section className="py-8 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center flex-wrap gap-2">
              <Tag size={18} className="text-gray-500 mr-2" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {relatedPost.categories.slice(0, 2).map((categoryId) => (
                        <span
                          key={categoryId}
                          className="px-2 py-1 text-xs font-medium rounded-full text-white"
                          style={{ backgroundColor: getCategoryColor(categoryId) }}
                        >
                          {blogCategories[categoryId]?.name || categoryId}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-charcoal mb-3 line-clamp-2">
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="hover:text-pacific transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>{formatDate(relatedPost.publishDate)}</span>
                      <span>{relatedPost.readingTime} min read</span>
                    </div>
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-pacific hover:text-pacific-dark transition-colors text-sm font-medium group"
                    >
                      Read More
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our digital solutions can help accelerate your growth and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-pacific to-pacific-dark text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/blog"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;