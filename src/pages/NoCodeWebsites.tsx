import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Palette, Zap, Shield, ArrowRight } from 'lucide-react';

const NoCodeWebsites: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'No-Code and Low-Code Website Development | Seattle Digital Studio - Professional Web Design';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional no-code website development services using WordPress and modern frameworks. Beautiful, responsive websites with custom design, SEO optimization, and ongoing maintenance.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'no-code websites, WordPress development, professional web design, responsive websites, SEO-optimized websites, website maintenance, Seattle web development, custom website design');
  }, []);

  const snapshots = [
    {
      icon: Palette,
      title: '1. Analysis, Designing, and Prototyping',
      description: 'Every website reflects your unique brand identity with custom design elements, carefully chosen color palettes, and typography that speaks to your target audience. We craft bespoke designs that differentiate your business and convert visitors into customers through strategic design choices.',
      gradient: 'from-pacific to-pacific-dark'
    },
    {
      icon: Zap,
      title: '2. Website Implementation',
      description: 'Using modern no-code, low-code, and prompt-based tools, we bring your design to life with responsive layouts, optimized performance, and scalable architecture. Every feature is implemented to meet your business needs while keeping the site easy to update and maintain.',
      gradient: 'from-pacific-dark to-pacific'
    },
    {
      icon: Shield,
      title: '3. Testing, Review, and Refinement',
      description: 'Before launch, we rigorously test functionality, responsiveness, and load performance across devices and browsers. Feedback is gathered for refinements, ensuring your site is polished, error-free, and fully ready to impress and convert visitors from day one.',
      gradient: 'from-pacific to-pacific-light'
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
                <div className="w-16 h-16 bg-gradient-to-br from-pacific-light to-pacific-dark rounded-xl flex items-center justify-center">
                  <Globe className="text-white" size={28} />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">No-code & Low-code Websites</h1>
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
              <h2 className="text-3xl font-bold text-charcoal mb-6">Beautiful Websites Built for Success</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Establish your professional online presence with expertly crafted no-code websites that blend striking design with powerful functionality. We build beautiful, conversion-focused sites using WordPress, low-code platform like Bubble.io, or cutting-edge "vibe coding" (prompt-based web engineering with 20% or less custom coding). Our streamlined approach removes the complexity and high costs of traditional development while delivering enterprise-grade results that scale with your business. From sleek one-page marketing sites to robust e-commerce platforms and full membership portals, we manage everything—from initial design concepts to deployment and ongoing maintenance. Every site is built with SEO best practices, mobile responsiveness, and user experience optimization at its core.
              </p>
            </div>

            {/* Image */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/no-code-web-app-solution2.png"
                    alt="Professional web development workspace with laptop and design mockups"
                    className="w-full h-80 object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pacific-light to-pacific-dark rounded-full opacity-10 -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pacific-light to-pacific rounded-full opacity-5 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Website Solutions We Create</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From simple landing pages to complex e-commerce platforms, we build websites that drive results for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'One-page Websites',
                description: 'Perfect for service businesses, consultants, and professionals who need a clean, focused online presence that converts visitors into leads.',
                features: ['Hero section with clear value proposition', 'Service/product showcase', 'Contact forms and CTAs', 'Mobile-optimized design']
              },
              {
                title: 'Marketing Landing Pages',
                description: 'High-converting landing pages designed to capture leads, promote specific offers, and drive targeted marketing campaigns.',
                features: ['A/B testing ready', 'Lead capture optimization', 'Analytics integration', 'Fast loading speeds']
              },
              {
                title: 'E-commerce Sites',
                description: 'Full-featured online stores with secure payment processing, inventory management, and customer account functionality.',
                features: ['Secure payment processing', 'Inventory management', 'Customer accounts', 'Order tracking']
              },
              {
                title: 'WordPress Sites',
                description: 'Content-rich websites with easy-to-use content management systems, perfect for blogs, news sites, and growing businesses.',
                features: ['Easy content management', 'SEO optimization', 'Plugin ecosystem', 'Regular updates']
              },
              {
                title: 'Membership Sites',
                description: 'Exclusive member portals with user authentication, content gating, and subscription management capabilities.',
                features: ['User authentication', 'Content protection', 'Subscription billing', 'Member dashboards']
              },
              {
                title: 'Portfolio Sites',
                description: 'Showcase your work with stunning portfolio websites that highlight your expertise and attract ideal clients.',
                features: ['Project galleries', 'Case study layouts', 'Client testimonials', 'Contact integration']
              }
            ].map((type, index) => (
              <div
                key={type.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-charcoal mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-pacific rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
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
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Website Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three typical methodology that ensure every website we create delivers exceptional performance and lasting value.
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
              to="/blog?category=development"
              className="inline-flex items-center text-pacific hover:text-pacific-dark transition-colors duration-200 text-lg font-medium group"
            >
              Related Blog Posts...
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage the best modern tools and platforms to create websites that are both powerful and easy to maintain.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'WordPress', description: 'Content management and flexibility' },
              { name: 'React/TypeScript', description: 'Modern web applications' },
              { name: 'GitHub', description: 'Version control and deployment' },
              { name: 'Webflow', description: 'Visual development platform' },
              { name: 'WooCommerce', description: 'E-commerce solutions' },
              { name: 'Netlify', description: 'Fast, secure hosting' },
              { name: 'Bolt.new', description: 'Prompt-based prototyping' },
              { name: 'Google Analytics', description: 'Performance tracking' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <h3 className="font-bold text-charcoal mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Launch Your Website?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's discuss your vision and create a website that not only looks amazing but drives real business results. From concept to launch, we'll handle every detail.
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

export default NoCodeWebsites;