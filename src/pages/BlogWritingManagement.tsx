import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Calendar, Target, TrendingUp, ArrowRight, Search, BarChart3, Share2, Clock } from 'lucide-react';

const BlogWritingManagement: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'Blog Writing & Management Services | Seattle Digital Studio';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional blog writing and management services. Strategic content creation, SEO optimization, editorial calendars, and content repurposing to establish thought leadership and drive business growth.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'blog writing services, content management, SEO content, editorial calendar, content strategy, professional blogging, content marketing, thought leadership content');
  }, []);

  const snapshots = [
    {
      icon: Calendar,
      title: '1. Editorial Planning',
      description: 'We begin by developing a strategic editorial calendar tailored to your business goals and audience interests. This roadmap balances evergreen content with timely topics to ensure consistent publishing and long-term engagement.',
      gradient: 'from-pacific to-pacific-dark'
    },
    {
      icon: TrendingUp,
      title: '2. Content Creation & Review',
      description: 'Our team creates an initial set of high-quality blog posts for your review, incorporating your voice and perspective. We collaborate with you to refine tone, messaging, and structure until the content is ready for publication.',
      gradient: 'from-pacific-dark to-pacific'
    },
    {
      icon: Target,
      title: '3. Publishing & Promotion',
      description: 'With your approval, we publish posts on a regular schedule to maintain momentum and visibility. As needed, we also promote content across channels to extend its reach and drive results.',
      gradient: 'from-pacific to-pacific-light'
    }
  ];

  const blogSolutions = [
    {
      icon: Search,
      title: 'SEO-optimized Content Strategy',
      description: 'Drive organic traffic with strategic content planning that establishes your brand as an industry authority.',
      bullets: [
        'Comprehensive keyword research and analysis',
        'Competitor content gap identification',
        'Topic clusters for topical authority',
        'Optimizing for GenAI and agentic AI'
      ],
      gradient: 'from-pacific to-pacific-dark'
    },
    {
      icon: Calendar,
      title: 'Monthly Content Calendars',
      description: 'Ensure consistent publishing with strategic editorial calendars aligned to your business goals.',
      bullets: [
        'Editorial calendar development',
        'Seasonal content planning',
        'Content theme coordination',
        'Publishing schedule optimization'
      ],
      gradient: 'from-pacific-dark to-pacific'
    },
    {
      icon: Share2,
      title: 'Multi-platform Publishing',
      description: 'Maximize reach with seamless content distribution across all your marketing channels.',
      bullets: [
        'Blog and website publishing',
        'Social media adaptation',
        'Email newsletter integration',
        'Social media management'
      ],
      gradient: 'from-pacific to-pacific-light'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Performance Tracking',
      description: 'Continuously optimize your content strategy with detailed performance reporting and insights.',
      bullets: [
        'Traffic and engagement metrics',
        'Conversion tracking and ROI',
        'Content performance analysis',
        'Heatmaps, scrollmaps, and sessions'
      ],
      gradient: 'from-pacific-light to-pacific'
    },
    {
      icon: Clock,
      title: 'Blog Tour Management',
      description: 'Strategic coordination of your promotional tour across blogs and podcasts.',
      bullets: [
        'Scheduling and tour planning',
        'Outreach and deadline coordination',
        'Content review and messaging alignment',
        'Audience growth and amplification'
      ],
      gradient: 'from-pacific-dark to-pacific-light'
    },
    {
      icon: Target,
      title: 'Content Repurposing',
      description: 'Transform single pieces of content into multiple formats to maximize your investment and reach.',
      bullets: [
        'Blog-to-social media adaptation',
        'Email newsletter content creation',
        'Infographic and visual content',
        'Video script development'
      ],
      gradient: 'from-pacific to-pacific-dark'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-pacific/5 via-white to-pacific/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-up">
            {/* Back to Solutions Link */}
            <Link
              to="/solutions"
              className="inline-flex items-center text-pacific hover:text-pacific-dark transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
              Back to Solutions
            </Link>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pacific to-pacific-dark rounded-xl flex items-center justify-center">
                  <FileText className="text-white" size={28} />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">Blog Writing & Management</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-charcoal mb-6">Strategic Content That Drives Results</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
               Establish your business as a thought leader with Seattle Digital Studio’s blog writing and management services. We produce high-quality, SEO-optimized content that attracts the right audience and delivers measurable results. Our approach blends industry knowledge with data-driven insights to create content that ranks and converts. From strategy development to day-to-day editorial oversight, we manage your blog so you can focus on your business. With a proven process, we ensure consistency, quality, and alignment with your goals.
              </p>
            </div>

            {/* Image */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/joe-in-park-with-book.png"
                    alt="Content creation and blog writing workspace with laptop and coffee"
                    className="w-full h-80 object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pacific to-pacific-dark rounded-full opacity-10 -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pacific-light to-pacific rounded-full opacity-5 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Solutions We Create Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Blog Solutions We Create</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive blog management services that cover every aspect of your content marketing strategy from planning to performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogSolutions.map((solution, index) => (
              <div
                key={solution.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${solution.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <solution.icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.bullets.map((bullet, bulletIndex) => (
                    <li key={bullet} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-pacific rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snapshots Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Content Creation Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three core pillars that make our blog writing and management service deliver consistent, measurable results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {snapshots.map((snapshot, index) => (
              <div
                key={snapshot.title}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${snapshot.gradient} rounded-lg flex items-center justify-center mb-6`}>
                  <snapshot.icon className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4">{snapshot.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {snapshot.description}
                </p>
              </div>
            ))}
          </div>

          {/* Related Blog Posts Link */}
          <div className="text-center mt-12 animate-slide-up">
            <Link
              to="/blog?category=blog-writing"
              className="inline-flex items-center text-pacific hover:text-pacific-dark transition-colors duration-200 text-lg font-medium group"
            >
              Related Blog Posts...
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Transform Your Content Strategy?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's discuss how our blog writing and management services can help establish your brand as a thought leader in your industry while driving qualified leads to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-pacific to-pacific-dark text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/solutions"
                className="px-8 py-4 border-2 border-pacific text-pacific font-semibold rounded-xl hover:bg-pacific hover:text-white transition-all duration-300"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogWritingManagement;