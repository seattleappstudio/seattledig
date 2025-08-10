import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Zap, Layers, Smartphone, ArrowRight, Rocket, Wrench, Target, Users, Link2, Monitor } from 'lucide-react';

const MicroappDevelopment: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'Microapp Development Services | Seattle Digital Studio - Rapid Prototyping';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional microapp development services using no-code platforms like Bubble and Webflow. Rapid prototyping, MVP development, and custom web applications built fast and launched lean.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'microapp development, no-code app development, rapid prototyping, MVP development, Bubble apps, Webflow development, custom web applications, Seattle app development');
  }, []);

  const snapshots = [
    {
      icon: Zap,
      title: '1. Define the Problem',
      description: 'We start by understanding your business challenge in depth. Through a short discovery session, we identify pain points, clarify user needs, and propose a practical solution that aligns with your goals. This step ensures we build the right thing from the start.',
      gradient: 'from-pacific to-pacific-dark'
    },
    {
      icon: Layers,
      title: '2. Prototype and Refine',
      description: 'Next, we develop a functional prototype that brings the proposed solution to life. Using agile, no-code methods, we focus on core functionality and user experience. You’ll be able to interact with the prototype early and help us fine-tune features before final development.',
      gradient: 'from-pacific-dark to-pacific'
    },
    {
      icon: Smartphone,
      title: '3. Deliver and Validate',
      description: 'After incorporating your feedback, we complete the build and polish the app for launch. The final product is tested, documented, and ready for real-world use. We ensure the solution is not only functional but meets your standards for usability, performance, and value.',
      gradient: 'from-pacific to-pacific-light'
    }
  ];

  const appSolutions = [
    {
      icon: Rocket,
      title: 'Rapid Prototyping',
      description: 'Bring your app idea to life in just a few weeks with functional, testable prototypes built through AI-assisted, "vibe" development methods.',
      bullets: [
        'Launch MVPs in 2–4 weeks',
        'Interactive prototypes for early feedback',
        'Real-world testing with real users',
        'Fast iteration to refine product-market fit'
      ],
      gradient: 'from-pacific to-pacific-dark'
    },
    {
      icon: Wrench,
      title: 'No-code/Low-code Solutions',
      description: 'Build powerful applications without traditional coding using modern platforms that deliver enterprise-quality results.',
      bullets: [
        'Bubble.io for complex web apps',
        'Webflow for content-driven sites',
        'Adalo for mobile-first solutions',
        'Airtable for database-driven apps'
      ],
      gradient: 'from-pacific-dark to-pacific'
    },
    {
      icon: Target,
      title: 'MVP Validation Tools',
      description: 'Validate your business concept with minimal investment using strategic testing tools and user feedback systems.',
      bullets: [
        'A/B testing implementation',
        'User analytics integration',
        'Feedback collection systems',
        'Market validation metrics'
      ],
      gradient: 'from-pacific to-pacific-light'
    },
    {
      icon: Users,
      title: 'Lean, Purpose-Built Web Apps',
      description: 'Quickly launch focused, functional web apps designed to solve real business problems through AI-assisted, prompt-based development.',
      bullets: [
        'Rapid prototyping and deployment',
        'Adaptable to many business use cases',
        'User-focused design with minimal complexity',
        'Fast iteration based on real-time feedback'
      ],
      gradient: 'from-pacific-light to-pacific'
    },
    {
      icon: Link2,
      title: 'Integration with Existing Systems',
      description: 'Seamlessly connect your new microapp with current business tools and workflows for maximum operational efficiency.',
      bullets: [
        'API integrations and webhooks',
        'CRM and database connections',
        'Payment processing integration',
        'Third-party service connections'
      ],
      gradient: 'from-pacific-dark to-pacific-light'
    },
    {
      icon: Monitor,
      title: 'Mobile App Development',
      description: 'Deliver seamless, high-performance mobile apps built for iOS and Android with a native or cross-platform approach.',
      bullets: [
        'Mobile-first user interface design',
        'Optimized performance for mobile devices',
        'Native device feature integration',
        'App store deployment support'
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
                <div className="w-16 h-16 bg-gradient-to-br from-pacific-dark to-pacific rounded-xl flex items-center justify-center">
                  <Code className="text-white" size={28} />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">Microapp Development</h1>
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
              <h2 className="text-3xl font-bold text-charcoal mb-6">Fast, Focused App Solutions</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Microapps are lightweight, single-purpose applications designed to solve specific business problems quickly and efficiently. At Seattle Digital Studio, we build these focused tools using modern no-code and low-code platforms, or with AI-assisted full-code approaches (similar to "vibe coding,") allowing us to deliver functional prototypes in weeks rather than months. Whether you need an internal tool, a customer-facing utility, or a lean MVP, our microapp development service combines speed, usability, and cost-effectiveness to help your business move faster with less complexity.
              </p>
            </div>

            {/* Image */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/micro-app-solution.png"
                    alt="Mobile app development workspace with wireframes and prototypes"
                    className="w-full h-80 object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pacific-dark to-pacific rounded-full opacity-10 -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pacific-light to-pacific rounded-full opacity-5 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Solutions We Create Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">App Solutions We Create</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive microapp development services that cover every aspect of bringing your app idea from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appSolutions.map((solution, index) => (
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
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Development Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three key processes that drive our microapp development for maximum impact and rapid deployment.
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Launch Your App Idea?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's discuss how our microapp development services can help you validate your concept and get to market quickly with a functional, user-friendly application.
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

export default MicroappDevelopment;