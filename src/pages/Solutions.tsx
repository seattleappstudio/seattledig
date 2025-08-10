import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Code, BookOpen, Globe, CheckCircle, ArrowRight, Settings, FileSignature } from 'lucide-react';

const Solutions: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'Digital Solutions | Seattle Digital Studio - Content, Apps, Automation';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive digital solutions including blog writing & management, microapp development, technical writing, no-code websites, and business automation. Expert services for growing businesses.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'digital solutions, blog writing services, microapp development, technical writing, no-code websites, business automation, content management, Seattle digital agency');
  }, []);

  const solutions = [
    {
      icon: FileText,
      title: 'Blog Writing & Management',
      description: 'Consistent, high-quality blog content tailored to your business. Monthly retainers and full-service blog setup for professionals and small teams.',
      features: [
        'SEO-optimized content strategy',
        'Monthly content calendars',
        'Multi-platform publishing',
        'Analytics and performance tracking',
        'Editorial calendar management',
        'Content repurposing across channels'
      ],
      gradient: 'from-pacific to-pacific-dark',
      image: '/images/joe-in-park-with-book.png',
      imageAlt: 'Man reading AI Business Automation book on tablet while sitting on park bench',
      link: '/solutions/blog-writing-management'
    },
    {
      icon: Code,
      title: 'Microapp Development',
      description: 'Custom one-page apps and MVP prototypes using no-code platforms like Bubble. Built fast, launched lean.',
      features: [
        'Rapid prototype development',
        'No-code/low-code solutions',
        'MVP validation tools',
        'User experience optimization',
        'Integration with existing systems',
        'Mobile-responsive design'
      ],
      gradient: 'from-pacific-dark to-pacific',
      image: '/images/micro-app-solution.png',
      imageAlt: 'Web App Development - Professional coding and app development workspace',
      link: '/solutions/microapp-development'
    },
    {
      icon: BookOpen,
      title: 'Technical Writing',
      description: 'Enterprise-grade documentation — SOPs, user guides, developer docs, and more. Perfect for SaaS startups and internal teams.',
      features: [
        'Standard Operating Procedures',
        'API documentation',
        'User manuals and guides',
        'Process documentation',
        'Knowledge base creation',
        'Documentation maintenance'
      ],
      gradient: 'from-pacific to-pacific-light',
      image: '/images/tech-docs-solution.png',
      imageAlt: 'Technical Documentation - Professional technical writing and documentation workspace',
      link: '/solutions/technical-writing'
    },
    {
      icon: Globe,
      title: 'No-code Websites',
      description: 'Beautiful, easy-to-maintain websites made with care on WordPress or React/TypeScript sites deployed from GitHub.',
      features: [
        'One-page websites',
        'Marketing landing pages',
        'High-conversion e-commerce sites',
        'WordPress content management',
        'Membership sites',
        'Custom design and branding'
      ],
      gradient: 'from-pacific-light to-pacific-dark',
      image: '/images/no-code-web-app-solution2.png',
      imageAlt: 'No-code Website Development - Professional working on website with city view',
      link: '/solutions/no-code-websites'
    },
    {
      icon: Settings,
      title: 'Business Automation',
      description: 'Low-code automation for business processes — connect apps, streamline workflows, and save time. Perfect for small teams, consultants, and digital service providers.',
      features: [
        'AI-powered workflow automation',
        'Lead capture and CRM integration',
        'Email and notification automation',
        'Data sync across apps',
        'Document and report generation',
        'Ongoing scenario optimization'
      ],
      gradient: 'from-pacific-dark to-pacific-light',
      image: '/images/business-automation-solution.png',
      imageAlt: 'Business Automation - Professional workflow automation and process optimization',
      link: '/solutions/business-automation'
    },
    {
      icon: FileSignature,
      title: 'Career Marketing Portfolios',
      description: 'Polished, strategically crafted career assets — tell your story, elevate your brand, and stand out in competitive markets. Ideal for executives, consultants, and job seekers at all levels.',
      features: [
        'Professional resumes',
        'LinkedIn profiles and bios',
        'One-page networking briefs',
        'Messaging alignment across platforms',
        'Executive branding and positioning',
        'Modular updates for future opportunities'
      ],
      gradient: 'from-pacific to-pacific-dark',
      image: '/images/networking-event.png',
      imageAlt: 'Career Marketing - Professionals networking at an upscale business event',
      link: '/solutions/digital-career-marketing'
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-pacific/5 via-white to-pacific/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">Our Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital services designed to accelerate your business growth through expert content creation, 
              rapid app development, professional documentation, beautiful websites, and intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <solution.icon className="text-white" size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-charcoal mb-4">{solution.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="text-pacific flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={solution.link}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pacific to-pacific-dark text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                    >
                      {(solution.title === 'No-code Websites' || solution.title === 'Business Automation' || solution.title === 'Career Marketing Portfolios') ? 'Get Started' : 'Read More'}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                    {(solution.title !== 'No-code Websites' && solution.title !== 'Business Automation' && solution.title !== 'Career Marketing Portfolios') && (
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 border-2 border-pacific text-pacific font-semibold rounded-lg hover:bg-pacific hover:text-white transition-all duration-300"
                      >
                        Get Started
                      </Link>
                    )}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={solution.image}
                      alt={solution.imageAlt}
                      className="w-full h-80 object-cover"
                    />
                    {/* Decorative overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pacific to-pacific-dark rounded-full opacity-10 -z-10"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pacific-light to-pacific rounded-full opacity-5 -z-10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Let's discuss how our solutions can accelerate your growth and streamline your operations. 
              Schedule a consultation today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific to-pacific-dark text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;