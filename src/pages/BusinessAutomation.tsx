import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, Zap, Bot, Target, ArrowRight, Workflow, Database, Mail, FileText, BarChart3, RefreshCw } from 'lucide-react';

const BusinessAutomation: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'Business Automation Services | Seattle Digital Studio - AI & Make.com Solutions';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional business automation services using AI and Make.com. Streamline workflows, connect apps, and save time with intelligent automation solutions for small businesses and teams.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'business automation, workflow automation, Make.com automation, AI automation, business process optimization, app integration, data synchronization, Seattle automation services');
  }, []);

  const snapshots = [
    {
      icon: Workflow,
      title: '1. Business Process Audit',
      description: 'We start by mapping your current workflows to identify inefficiencies, bottlenecks, and opportunities for automation. This detailed audit ensures we target the right processes for maximum impact, aligning automation goals with your business objectives and growth strategy.',
      gradient: 'from-pacific to-pacific-dark'
    },
    {
      icon: Bot,
      title: '2. Automation Development',
      description: 'Using platforms like Make.com, Zapier, and custom AI integrations, we design and build automation tailored to your needs. Each workflow is optimized for reliability, scalability, and ease of maintenance, ensuring smooth operation with minimal manual intervention.',
      gradient: 'from-pacific-dark to-pacific'
    },
    {
      icon: Target,
      title: '3. Client Acceptance Review',
      description: 'Before deployment, we conduct thorough testing with your team to validate performance and usability. Your feedback drives final adjustments, ensuring the automation works exactly as intended and delivers measurable results from day one.',
      gradient: 'from-pacific to-pacific-light'
    }
  ];

  const automationSolutions = [
    {
      icon: Database,
      title: 'Lead Capture & CRM Integration',
      description: 'Automatically capture, qualify, and route leads from multiple sources directly into your CRM with intelligent scoring and assignment.',
      bullets: [
        'Multi-channel lead capture automation',
        'Intelligent lead scoring and qualification',
        'Automated CRM data entry and updates',
        'Sales lead database reactivation'
      ],
      gradient: 'from-pacific to-pacific-dark'
    },
    {
      icon: Mail,
      title: 'Email & Notification Automation',
      description: 'Create sophisticated email workflows and notification systems that keep your team and customers informed at the right moments.',
      bullets: [
        'Triggered email sequences and campaigns',
        'Smart notification routing and escalation',
        'Personalized communication workflows',
        'Multi-channel messaging coordination'
      ],
      gradient: 'from-pacific-dark to-pacific'
    },
    {
      icon: RefreshCw,
      title: 'Data Sync Across Apps',
      description: 'Eliminate manual data entry by creating seamless connections between your business applications and ensuring data consistency.',
      bullets: [
        'Real-time data synchronization',
        'Cross-platform integration setup',
        'Data validation and error handling',
        'Automated backup and recovery'
      ],
      gradient: 'from-pacific to-pacific-light'
    },
    {
      icon: FileText,
      title: 'Document & Report Generation',
      description: 'Automatically generate reports, proposals, and documents using dynamic data from your business systems.',
      bullets: [
        'Automated report generation and distribution',
        'Dynamic document creation from templates',
        'Data visualization and dashboard updates',
        'Scheduled reporting and analytics'
      ],
      gradient: 'from-pacific-light to-pacific'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics & Optimization',
      description: 'Monitor automation performance and continuously optimize workflows for maximum efficiency and business impact.',
      bullets: [
        'Real-time automation monitoring',
        'Performance analytics and reporting',
        'Bottleneck identification and resolution',
        'ROI tracking and optimization'
      ],
      gradient: 'from-pacific-dark to-pacific-light'
    },
    {
      icon: Zap,
      title: 'Custom Workflow Development',
      description: 'Build tailored automation solutions that address your unique business processes and operational requirements.',
      bullets: [
        'Custom workflow design and implementation',
        'Business process optimization',
        'Integration with existing systems',
        'Scalable automation architecture'
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
                <div className="w-16 h-16 bg-gradient-to-br from-pacific-dark to-pacific-light rounded-xl flex items-center justify-center">
                  <Settings className="text-white" size={28} />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">Business Automation</h1>
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
              <h2 className="text-3xl font-bold text-charcoal mb-6">Intelligent Automation That Scales Your Business</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Streamline operations with intelligent automation that removes repetitive tasks, freeing your team to focus on strategic growth. We pair advanced AI technology with proven workflow optimization to build systems that run seamlessly in the background. From lead capture and CRM integration to document generation and data synchronization, our solutions adapt to your unique business needs. Leveraging platforms like Make.com, Zapier, and custom AI integrations, we deliver robust automation ecosystems that generate measurable ROI while staying flexible to grow with you.
              </p>
            </div>

            {/* Image */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/business-automation-solution.png"
                    alt="Business automation and workflow optimization workspace"
                    className="w-full h-80 object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pacific-dark to-pacific-light rounded-full opacity-10 -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pacific-light to-pacific rounded-full opacity-5 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Solutions We Create Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Automation Solutions We Create</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Automation services for small businesses and organizations that streamline operations, reduce manual work, and accelerate growth through intelligent process optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationSolutions.map((solution, index) => (
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
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Automation Methodology</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The standard process that ensure every automation solution we build delivers maximum business value and sustainable long-term results.
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
              to="/blog?category=automation"
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
            <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Automate Your Business Processes?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's discuss how our business automation solutions can streamline your operations, reduce manual work, and free your team to focus on strategic growth initiatives that drive real business results.
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

export default BusinessAutomation;