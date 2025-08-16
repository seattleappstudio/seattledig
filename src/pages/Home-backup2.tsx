import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Smartphone, Bot, Globe, Star, Quote, DollarSign, Zap, Clock, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'Seattle Digital Studio | Expert Digital Solutions by Joe Perez';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert digital solutions for content creation, microapp development, technical writing, no-code websites, and AI automation. Led by tech veteran Joe Perez with 20+ years at Microsoft, Amazon, and Google.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'Seattle digital studio, content creation, microapp development, technical writing, no-code websites, business automation, AI automation, Make.com, Joe Perez, Seattle web development, digital solutions');
    
    // Add Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Seattle Digital Studio | Expert Digital Solutions by Joe Perez');
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Expert digital solutions for content creation, microapp development, technical writing, no-code websites, and AI automation. Led by tech veteran Joe Perez.');
    
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');
  }, []);

  const services = [
    {
      icon: FileText,
      title: 'Content Creation & Management',
      description: 'From blogs to newsletters to tech docs, we create content that sings and dances for your business.',
      gradient: 'from-pacific to-pacific-dark',
      image: '/images/what-we-do-content.png',
      imageAlt: 'Person writing content on laptop with coffee and notebook',
      link: '/solutions/blog-writing-management'
    },
    {
      icon: Smartphone,
      title: 'App & Microapp Development',
      description: 'Launch fast with one-page prototypes and fully functional modern software applications.',
      gradient: 'from-pacific-dark to-pacific',
      image: '/images/what-we-do-microapps.png',
      imageAlt: 'Mobile app development mockups and wireframes on desk',
      link: '/solutions/microapp-development'
    },
    {
      icon: Globe,
      title: 'No-code Websites',
      description: 'Beautiful, professional websites built with WordPress, no-code, or next-gen platforms.',
      gradient: 'from-pacific to-pacific-light',
      image: '/images/what-we-do-websites.png',
      imageAlt: 'Professional website design and development workspace',
      link: '/solutions/no-code-websites'
    },
    {
      icon: Bot,
      title: 'AI & Make.com Automation',
      description: 'Automate workflows and scale smarter using ChatGPT & Make.com with your own stack.',
      gradient: 'from-pacific-light to-pacific-dark',
      image: '/images/what-we-do-ai.png',
      imageAlt: 'AI automation and workflow visualization on computer screen',
      link: '/solutions/business-automation'
    },
  ];

  const pricingOptions = [
    {
      icon: FileText,
      title: 'Blog Writing & Management',
      price: 'From $750 setup + $250/mo. (optional)',
      description: 'We set up new blogs or manage existing blogs. Consistent, high-quality blog content tailored to your audience. Monthly retainers available for content planning, writing, and publishing.',
      gradient: 'from-pacific to-pacific-dark',
      features: ['Content planning', 'SEO optimization', 'Content management', 'Publishing support'],
      link: '/solutions/blog-writing-management'
    },
    {
      icon: Smartphone,
      title: 'Microapp Development',
      price: 'From $2,000 setup + $250/mo. (optional)',
      description: 'Launch a one-page app or clickable prototype. Built fast on no-code platforms or full-code, prompt-based platforms—ideal for MVPs, one-use apps, and single-purpose tools.',
      gradient: 'from-pacific-dark to-pacific',
      features: ['Rapid prototyping', 'No-code platforms', 'Based on React+TypeScript', 'Mobile responsive'],
      link: '/solutions/microapp-development'
    },
    {
      icon: Globe,
      title: 'No-code Websites',
      price: 'From $1,500 setup + $250/mo. (optional)',
      description: 'Beautiful, professional websites built with traditional CMS, modern no-code platforms, or next-generation code-gen tools. Perfect for businesses that need a fully functional website fast.',
      gradient: 'from-pacific to-pacific-light',
      features: ['Custom design', 'Mobile responsive', 'Fast-loading performance', 'SEO-optimized effectiveness'],
      link: '/solutions/no-code-websites'
    },
    {
      icon: Zap,
      title: 'Business Automation',
      price: 'From $1,000 setup + $250/month (optional)',
      description: 'Automate repetitive tasks and streamline workflows using Make.com and AI tools. We build and deploy the automations fast. Optional  staff training and  monthly support is available.',
      gradient: 'from-pacific-light to-pacific',
      features: ['Workflow automation', 'AI integration', 'Fast turnarounds', 'Monthly support'],
      link: '/solutions/business-automation'
    }
  ];

  const testimonials = [
    {
      quote: "Joe's expertise in automation transformed our workflow efficiency by 300%. His technical depth combined with clear communication made the project seamless.",
      author: "Sarah Johnson",
      role: "Operations Director, TechStart Inc.",
      rating: 5,
    },
    {
      quote: "The microapp prototype Joe delivered helped us validate our concept and secure Series A funding. His rapid development approach was exactly what we needed.",
      author: "Michael Chen",
      role: "CEO, InnovateLab",
      rating: 5,
    },
    {
      quote: "Outstanding technical writing and documentation. Joe took our complex processes and made them crystal clear for our entire team.",
      author: "Emily Rodriguez",
      role: "Product Manager, CloudSync",
      rating: 5,
    },
    {
      quote: "The AI automation solutions Joe implemented saved us 15 hours per week. Our team can now focus on strategic work instead of repetitive tasks.",
      author: "David Kim",
      role: "Founder, GrowthHack Solutions",
      rating: 5,
    },
    {
      quote: "Joe's content strategy doubled our organic traffic in just 4 months. His understanding of both technical SEO and compelling storytelling is unmatched.",
      author: "Lisa Thompson",
      role: "Marketing Director, EcoTech Innovations",
      rating: 5,
    },
    {
      quote: "Working with Seattle Digital Studio was a game-changer. Joe delivered a fully functional prototype that impressed our investors and customers alike.",
      author: "Robert Martinez",
      role: "CTO, FinanceFlow",
      rating: 5,
    },
  ];

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentTestimonialIndex * testimonialsPerPage;
    return testimonials.slice(startIndex, startIndex + testimonialsPerPage);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image - Much More Visible */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/seattle-skyline.png"
            alt="Seattle skyline with Space Needle and Mount Rainier"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10">
          <div className="max-w-4xl animate-slide-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Seattle Digital Studio
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 max-w-3xl leading-relaxed mb-8 font-medium drop-shadow-md">
              Expert digital solutions for content, microapps, websites, and AI automation — led by tech veteran Joe Perez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pacific to-pacific-dark text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-xl"
              >
                Let's Work Together
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section with Seattle Digital Studio Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8">About the Studio</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Seattle Digital Studio offers high-impact content creation, AI-powered business automation, and rapid microapp prototyping tailored to the needs of small businesses and independent professionals. We help our clients scale efficiently by delivering clear, actionable documentation, lean and effective no-code/low-code apps, and content that engages and converts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2025 by digital strategist Joe Perez, Seattle Digital Studio brings enterprise-level expertise to small teams—without the overhead. Our approach blends cutting-edge AI technology with a deep understanding of small business realities, making sophisticated digital solutions both accessible and practical.
              </p>
            </div>

            {/* Seattle Digital Studio Image */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/seattle-digital-studio.png"
                    alt="Seattle Digital Studio - Professional digital solutions workspace"
                    className="w-full h-auto object-cover"
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to help your business thrive in the modern landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                    <service.icon className="text-white" size={20} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-pacific transition-colors">
                    <Link to={service.link} className="hover:text-pacific transition-colors">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Services */}
          <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animate-slide-up text-center">
            <h3 className="text-xl font-bold text-charcoal mb-4">Additional Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-pacific rounded-full mr-2 flex-shrink-0"></div>
                <Link to="/solutions/technical-writing" className="text-gray-700 hover:text-pacific transition-colors">
                  Technical Writing
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-pacific rounded-full mr-2 flex-shrink-0"></div>
                <Link to="/solutions/digital-career-marketing" className="text-gray-700 hover:text-pacific transition-colors">
                  Digital Career Documents
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-pacific rounded-full mr-2 flex-shrink-0"></div>
                <Link to="/contact" className="text-gray-700 hover:text-pacific transition-colors">
                  Custom digital solutions (ask us)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="flex items-center justify-center mb-4">
              <DollarSign className="text-pacific mr-2" size={32} />
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">Our Pricing</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple, transparent pricing for small teams and professionals.<br />
              We believe in delivering enterprise-quality results at small business–friendly prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pricingOptions.map((option, index) => (
              <div
                key={option.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-pacific/20 transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${option.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <option.icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{option.title}</h3>
                <div className="text-2xl font-bold text-pacific mb-3">{option.price}</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {option.description}
                </p>
                <div className="space-y-2 mb-4">
                  {option.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-pacific rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  to={option.link}
                  className="inline-flex items-center text-pacific hover:text-pacific-dark transition-colors text-sm font-medium group"
                >
                  Learn More
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* Pricing CTA */}
          <div className="text-center animate-slide-up">
            <div className="bg-gradient-to-br from-pacific/5 to-pacific-dark/5 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-charcoal mb-3">Need something custom?</h3>
              <p className="text-gray-600 mb-6">
                Most clients spend between <span className="font-semibold text-pacific">$1,000 and $,000</span> depending on their needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pacific to-pacific-dark text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                Let's Work Together
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio Section with Joe Perez Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Joe Perez Photo - Left side on desktop */}
            <div className="animate-scale-in order-2 lg:order-1">
              <div className="relative">
                <div className="w-full max-w-md mx-auto lg:max-w-none">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pacific/10 to-pacific-dark/10 p-2">
                    <img
                      src="/images/joe-for-sds-homepage.png"
                      alt="Joe Perez - Founder of Seattle Digital Studio"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pacific to-pacific-dark rounded-full opacity-10 -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pacific-light to-pacific rounded-full opacity-5 -z-10"></div>
              </div>
            </div>

            {/* Content - Right side on desktop */}
            <div className="animate-slide-up order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">Meet Joe Perez</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Joe Perez is Founder and Digital Solutions Manager at Seattle Digital Studio. His background includes a decade of experience as Principal of a boutique editorial consultancy combined with extensive experience as an individual contributor to software development teams at Microsoft, Google, Electronic Arts, and Grafana Labs. He is an Honors graduate of Harvard University and holds a Graduate Certificate in Integral Leadership from the Leadership Institute of Seattle (LIOS). 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Seattle Digital Studio is Joe's latest venture to bring elite digital craftsmanship to small-to-midsize businesses, non-profit organizations, and solopreneurs. By leveraging up-to-the-minute AI technology, the Studio aims to offer high-quality services significantly less than the cost of traditional technical and creative firms.  The agency offers services including microapp development, business automation, no-code and low-code websites, content creation, technical writing, and digital personal career portfolios.
              </p>
              
              {/* Credentials */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-charcoal">Joe Perez</h3>
                  <div className="flex space-x-1 ml-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>
                <p className="text-pacific font-semibold mb-3">Founder & Digital Solutions Manager</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Extensive experience at Microsoft, Amazon, Google, and Grafana Labs</p>
                  <p>• Expert in technical writing and technical content creation</p>
                  <p>• AI automation and workflow optimization manager</p>
                  <p>• Rapid web app prototyping and MVP development</p>
                  <p>• Worked with 200+ Seattle professionals on Résumés and LinkedIn profiles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the businesses and professionals who've transformed their operations with our solutions.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mb-8 space-x-4">
              <button
                onClick={prevTestimonials}
                className="w-12 h-12 bg-gradient-to-r from-pacific to-pacific-dark text-white rounded-full flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="group-hover:-translate-x-0.5 transition-transform" size={20} />
              </button>
              
              {/* Page Indicators */}
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonialIndex
                        ? 'bg-pacific scale-125'
                        : 'bg-gray-300 hover:bg-pacific/50'
                    }`}
                    aria-label={`Go to testimonials page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonials}
                className="w-12 h-12 bg-gradient-to-r from-pacific to-pacific-dark text-white rounded-full flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                aria-label="Next testimonials"
              >
                <ChevronRight className="group-hover:translate-x-0.5 transition-transform" size={20} />
              </button>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[400px]">
              {getCurrentTestimonials().map((testimonial, index) => (
                <div
                  key={`${currentTestimonialIndex}-${index}`}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Quote className="text-pacific mb-4" size={24} />
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-charcoal">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;