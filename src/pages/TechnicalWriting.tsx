import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Users, FileText, Settings, ArrowRight, Search, Code, Globe, ClipboardList, Database, Wrench, HelpCircle, FolderOpen, RefreshCw } from 'lucide-react';

const TechnicalWriting: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'Technical Writing Services | Seattle Digital Studio - Documentation Experts';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional technical writing services including API documentation, user guides, SOPs, and knowledge base creation. Expert documentation that users actually read and use.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'technical writing services, API documentation, user guides, SOPs, standard operating procedures, knowledge base creation, technical documentation, Seattle technical writer');
  }, []);

  const snapshots = [
    {
      icon: Search,
      title: '1. Doc Planning',
      description: 'We start by understanding your audience, goals, and subject matter. This stage includes gathering source material, defining structure, and choosing the right format, ensuring the documentation aligns with your business needs and user expectations from the outset.',
      gradient: 'from-pacific to-pacific-dark'
    },
    {
      icon: Code,
      title: '2. Doc Creation',
      description: 'Using clear, concise language and consistent style, we transform complex concepts into accessible, actionable content. Whether technical guides, API references, or onboarding materials, we focus on accuracy, usability, and visual clarity to make your documentation both informative and engaging.',
      gradient: 'from-pacific-dark to-pacific'
    },
    {
      icon: Globe,
      title: '3. Doc Review',
      description: 'We collaborate with stakeholders for accuracy checks, usability testing, and style refinements. Our review process ensures the documentation is error-free, aligned with brand voice, and ready for publication—delivering a polished final product that users trust and rely on.',
      gradient: 'from-pacific to-pacific-light'
    }
  ];

  const documentationSolutions = [
    {
      icon: ClipboardList,
      title: 'Standard Operating Procedures',
      description: 'Transform your business processes into clear, actionable SOPs that ensure consistency and enable scalable operations.',
      bullets: [
        'Step-by-step process documentation',
        'Quality control checklists',
        'Role-based procedure guides',
        'Compliance and audit documentation'
      ],
      gradient: 'from-pacific to-pacific-dark'
    },
    {
      icon: Database,
      title: 'API Documentation',
      description: 'Create comprehensive developer resources that accelerate integration and reduce support burden for your technical products.',
      bullets: [
        'Interactive API reference guides',
        'Code examples and tutorials',
        'Authentication and error handling',
        'SDK and integration documentation'
      ],
      gradient: 'from-pacific-dark to-pacific'
    },
    {
      icon: HelpCircle,
      title: 'User Manuals and Guides',
      description: 'Develop user-friendly documentation that helps customers and team members succeed with your products and services.',
      bullets: [
        'Getting started guides',
        'Feature-specific tutorials',
        'Troubleshooting and FAQ sections',
        'Best practices and tips'
      ],
      gradient: 'from-pacific to-pacific-light'
    },
    {
      icon: Wrench,
      title: 'Process Documentation',
      description: 'Capture institutional knowledge and workflows to ensure business continuity and operational efficiency.',
      bullets: [
        'Workflow mapping and documentation',
        'Decision trees and flowcharts',
        'Cross-functional process guides',
        'Change management procedures'
      ],
      gradient: 'from-pacific-light to-pacific'
    },
    {
      icon: FolderOpen,
      title: 'Knowledge Base Creation',
      description: 'Build comprehensive, searchable knowledge repositories that serve as the single source of truth for your organization.',
      bullets: [
        'Centralized information architecture',
        'Search optimization and tagging',
        'Content categorization systems',
        'User access and permissions'
      ],
      gradient: 'from-pacific-dark to-pacific-light'
    },
    {
      icon: RefreshCw,
      title: 'Documentation Maintenance',
      description: 'Keep your documentation current, accurate, and valuable through ongoing review, updates, and optimization processes.',
      bullets: [
        'Regular content audits and updates',
        'Version control and change tracking',
        'User feedback integration',
        'Performance analytics and optimization'
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
                <div className="w-16 h-16 bg-gradient-to-br from-pacific to-pacific-light rounded-xl flex items-center justify-center">
                  <BookOpen className="text-white" size={28} />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">Technical Writing</h1>
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
              <h2 className="text-3xl font-bold text-charcoal mb-6">Documentation People Actually Use</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We turn complex ideas into clear, useful documentation that helps your team work smarter and keeps your users engaged. Our technical writing services make expert knowledge practical. We translate dense information into content that’s accurate, clear, and ready to use. With years of experience at top tech companies, we know how to organize information for ease of use and consistency, integrated into your tech stack effectively. Whether it’s API docs that speed up developer onboarding or user guides that cut down support requests, we help your business scale with documentation that works. We also uncover process gaps and build documentation strategies that grow alongside your product.
              </p>
            </div>

            {/* Image */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/tech-docs-solution.png"
                    alt="Technical documentation and writing workspace with documents and laptop"
                    className="w-full h-80 object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pacific to-pacific-light rounded-full opacity-10 -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pacific-light to-pacific rounded-full opacity-5 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Solutions We Create Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Documentation Solutions We Create</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical writing services that cover every aspect of your documentation needs from planning to maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationSolutions.map((solution, index) => (
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
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Documentation Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we collaborate with you to create and enhance your organization's technical and process documentation.
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
              to="/blog?category=documentation"
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
            <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Improve Your Documentation?</h2>
            <p className="text-lg text-gray-600 mb-8  leading-relaxed">
              Let's discuss how our technical writing services can help streamline your processes, reduce support burden, and improve user experience through clear, actionable documentation.
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

export default TechnicalWriting;