import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Search, FileText, Users, Zap, ArrowRight, ExternalLink, Globe, Code, Lightbulb, Layout } from 'lucide-react';

const Resources: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'Resources | Seattle Digital Studio - Tech Tools, Directories & Guides';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive collection of technology and AI resources including directories, glossaries, tools, and guides for digital professionals and business owners.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'tech resources, AI glossary, Seattle tech directory, digital tools, technology guides, business resources, AI resources, tech companies directory');
  }, []);

  const resourceCategories = [
    {
      icon: MapPin,
      title: 'Directories',
      description: 'Comprehensive listings of companies, tools, and organizations in the tech ecosystem.',
      gradient: 'from-pacific to-pacific-dark',
      resources: [
        {
          name: 'Seattle AI & Tech Directory',
          description: 'Discover innovative AI and tech companies in the Pacific Northwest',
          link: '/seattle-ai-tech-directory',
          isInternal: true
        },
        {
          name: 'AngelList Startups',
          description: 'Global startup directory and investment platform',
          link: 'https://angel.co',
          isInternal: false
        },
        {
          name: 'Crunchbase',
          description: 'Business information platform for discovering companies',
          link: 'https://crunchbase.com',
          isInternal: false
        }
      ]
    },
    {
      icon: BookOpen,
      title: 'Glossaries & References',
      description: 'Essential terminology and reference materials for technology and AI concepts.',
      gradient: 'from-pacific-dark to-pacific',
      resources: [
        {
          name: 'AI Glossary',
          description: 'Comprehensive guide to artificial intelligence terminology and concepts',
          link: '/ai-glossary',
          isInternal: true
        },
        {
          name: 'MDN Web Docs',
          description: 'Complete web development documentation and tutorials',
          link: 'https://developer.mozilla.org',
          isInternal: false
        },
        {
          name: 'AWS Glossary',
          description: 'Cloud computing terms and definitions',
          link: 'https://docs.aws.amazon.com/general/latest/gr/glos-chap.html',
          isInternal: false
        }
      ]
    },
    {
      icon: Zap,
      title: 'Tools & Platforms',
      description: 'Curated collection of essential tools for digital professionals and businesses.',
      gradient: 'from-pacific to-pacific-light',
      resources: [
        {
          name: 'Make.com',
          description: 'Visual platform for workflow automation and app integration',
          link: 'https://make.com',
          isInternal: false
        },
        {
          name: 'Bubble',
          description: 'No-code platform for building web applications',
          link: 'https://bubble.io',
          isInternal: false
        },
        {
          name: 'Webflow',
          description: 'Visual web design platform for creating responsive websites',
          link: 'https://webflow.com',
          isInternal: false
        }
      ]
    },
    {
      icon: FileText,
      title: 'Guides & Tutorials',
      description: 'Step-by-step guides and educational content for learning new technologies.',
      gradient: 'from-pacific-light to-pacific',
      resources: [
        {
          name: 'freeCodeCamp',
          description: 'Free coding tutorials and certification programs',
          link: 'https://freecodecamp.org',
          isInternal: false
        },
        {
          name: 'Coursera Tech Courses',
          description: 'University-level technology and AI courses',
          link: 'https://coursera.org/browse/computer-science',
          isInternal: false
        },
        {
          name: 'GitHub Learning Lab',
          description: 'Interactive courses for learning Git and GitHub',
          link: 'https://lab.github.com',
          isInternal: false
        }
      ]
    },
    {
      icon: Users,
      title: 'Communities',
      description: 'Professional networks and communities for tech professionals and entrepreneurs.',
      gradient: 'from-pacific-dark to-pacific-light',
      resources: [
        {
          name: 'Seattle Tech Community',
          description: 'Local meetups and networking events for tech professionals',
          link: 'https://meetup.com/seattle-tech',
          isInternal: false
        },
        {
          name: 'Stack Overflow',
          description: 'Q&A community for programmers and developers',
          link: 'https://stackoverflow.com',
          isInternal: false
        },
        {
          name: 'Nucamp',
          description: 'Seattle-based in-person and virtual coding bootcamp',
          link: 'https://www.nucamp.co/',
          isInternal: false
        }
      ]
    },
    {
      icon: Layout,
      title: 'No-code Resources',
      description: 'Tools and platforms for building websites and applications without coding.',
      gradient: 'from-pacific to-pacific-dark',
      resources: [
        {
          name: 'No-code 101 with Ben Tossell',
          description: 'Video course by Makerpad founder on no-code fundamentals',
          link: 'https://appacademy.adalo.com/course/no-code-101-with-ben-tossell-founder-of-makerpad',
          isInternal: false
        },
        {
          name: 'Nocode.tech',
          description: 'Curated directory of no-code tools with guides and use-case examples',
          link: 'https://nocode.tech',
          isInternal: false
        },
        {
          name: 'Adalo',
          description: 'Mobile app builder with no-code development platform',
          link: 'https://www.adalo.com/',
          isInternal: false
        }
      ]
    }
  ];

  const featuredResources = [
    {
      icon: MapPin,
      title: 'Seattle AI & Tech Directory',
      description: 'Explore the thriving AI and technology ecosystem in Seattle and the Pacific Northwest. Discover innovative companies, startups, and tech leaders.',
      link: '/seattle-ai-tech-directory',
      isInternal: true,
      gradient: 'from-pacific to-pacific-dark',
      image: '/images/ai-direct.png'
    },
    {
      icon: BookOpen,
      title: 'AI Glossary',
      description: 'Comprehensive guide to artificial intelligence terminology, concepts, and technologies. Essential reference for understanding AI.',
      link: '/ai-glossary',
      isInternal: true,
      gradient: 'from-pacific-dark to-pacific',
      image: '/images/ai-gloss.png'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-pacific/5 via-white to-pacific/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pacific to-pacific-dark rounded-xl flex items-center justify-center">
                <Lightbulb className="text-white" size={28} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">Resources</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive collection of technology and AI resources including directories, glossaries, tools, 
              and guides to help you navigate the digital landscape and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Featured Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and comprehensive resources for technology professionals and business owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredResources.map((resource, index) => (
              <div
                key={resource.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  {resource.image ? (
                    <div className="w-full md:w-1/3">
                      <img 
                        src={resource.image} 
                        alt={resource.title} 
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 bg-gradient-to-br ${resource.gradient} rounded-xl flex items-center justify-center`}>
                      <resource.icon className="text-white" size={24} />
                    </div>
                  )}
                  
                  <div className={resource.image ? "w-full md:w-2/3" : "flex-1"}>
                    <h3 className="text-2xl font-bold text-charcoal mb-4">{resource.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {resource.description}
                    </p>
                    <Link
                      to={resource.link}
                      className="inline-flex items-center text-pacific hover:text-pacific-dark transition-colors font-medium group"
                    >
                      Explore Resource
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover curated resources organized by category to help you find exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-3">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resource.name} className="border-t border-gray-100 pt-3 first:border-t-0 first:pt-0">
                      {resource.isInternal ? (
                        <Link
                          to={resource.link}
                          className="block group"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-charcoal group-hover:text-pacific transition-colors text-sm">
                                {resource.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {resource.description}
                              </p>
                            </div>
                            <ArrowRight className="text-pacific opacity-0 group-hover:opacity-100 transition-opacity ml-2 flex-shrink-0" size={14} />
                          </div>
                        </Link>
                      ) : (
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-charcoal group-hover:text-pacific transition-colors text-sm">
                                {resource.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {resource.description}
                              </p>
                            </div>
                            <ExternalLink className="text-pacific opacity-0 group-hover:opacity-100 transition-opacity ml-2 flex-shrink-0" size={14} />
                          </div>
                        </a>
                      )}
                    </div>
                  ))}
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
            <h2 className="text-3xl font-bold text-charcoal mb-6">Need Help Finding the Right Resources?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team can help you identify the best tools, platforms, and resources for your specific business needs. 
              Get personalized recommendations and guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-pacific to-pacific-dark text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Personalized Recommendations
              </Link>
              <Link
                to="/blog"
                className="px-8 py-4 border-2 border-pacific text-pacific font-semibold rounded-xl hover:bg-pacific hover:text-white transition-all duration-300"
              >
                Read Our Tech Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;