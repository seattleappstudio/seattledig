import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'Contact Us | Seattle Digital Studio - Get Your Free Consultation';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Seattle Digital Studio for expert digital solutions. Get a free consultation for content creation, app development, technical writing, websites, and business automation services.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'contact Seattle Digital Studio, free consultation, digital solutions quote, Joe Perez contact, Seattle web development, business automation consultation');
  }, []);

  const services = [
    'Blog Writing & Management',
    'Microapp Development',
    'Technical Writing',
    'No-code Websites',
    'Business Automation',
    'Other',
    "I Don't Know"
  ];

  const faqs = [
    {
      question: "What does Seattle Digital Studio do?",
      answer: "We specialize in digital content creation, no-code app development, and AI-powered automation for small businesses and professionals. Our services include blog writing and management, microapp development, technical documentation, no-code websites, and business process automation using platforms like Make.com and AI tools."
    },
    {
      question: "Who do you work with?",
      answer: "We work with solopreneurs, consultants, startups, nonprofits, and small teams ready to scale their digital operations. Our clients range from individual professionals looking to establish thought leadership through content to growing businesses needing automation solutions to streamline their operations."
    },
    {
      question: "What kinds of apps do you build?",
      answer: "We create lightweight web apps and internal tools using no-code, low-code, and AI-assisted full code methods. These include customer portals, internal dashboards, lead capture systems, workflow automation tools, and MVP prototypes. Our focus is on rapid development and practical solutions that solve real business problems."
    },
    {
      question: "Do you offer content writing services?",
      answer: "Yes! We write technical documentation, blog posts, SOPs, and customer-facing content. Our content services include strategic blog writing and management, API documentation, user guides, standard operating procedures, marketing copy, and thought leadership articles. Any AI-assisted content is fully designed, reviewed, and edited with a professional writer in the loop."
    },
    {
      question: "How much do your services cost?",
      answer: "Projects start at $500 plus a setup fee with a business process audit, with flexible pricing for one-off builds or ongoing support. Blog writing and management typically runs 500-$1,000/month, microapp development ranges from $3,500-$10,000 depending on complexity, and automation setups start at $500 (for up to 3 workflows) with optional monthly maintenance. We provide detailed quotes based on your specific requirements."
    },
    {
      question: "How long do projects typically take?",
      answer: "Most projects are delivered within 1–3 weeks, depending on complexity and scope. Microapps and documentation projects often complete in 1-2 months, while comprehensive automation setups or complex web applications generally take at least 6 weeks. Blog writing operates on monthly cycles with 4-8 posts per month on an ongoing basis."
    },
    {
      question: "Do you guarantee your work?",
      answer: "We offer this satisfaction guarantee: If you are dissatisfied with our work we will rework it for free within 30 days of project delivery, subject to terms and conditions. This covers functionality issues, content revisions, and ensuring deliverables meet the agreed-upon specifications. But we don't add features for free if you change your mind about what you want. We're committed to your success and stand behind the quality of our work."
    },
    {
      question: "What's your tech stack?",
      answer: "We use modern, reliable platforms including Bubble and Webflow for app prototyping, WordPress and React with TypeScript for websites, Make.com and Zapier for automation, and various LLM-based tools for content optimization and vibe coding. Our tool selection prioritizes ease of maintenance, scalability, and long-term viability for your business."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer ongoing support packages for all our services. This includes monthly blog writing retainers, automation monitoring and optimization, website maintenance, and documentation updates. Support packages are tailored to your needs and can include everything from minor updates to strategic consulting."
    }
  ];

  // Validation rules
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (value.trim().length > 50) return 'Name must be less than 50 characters';
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return 'Name can only contain letters, spaces, hyphens, and apostrophes';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
        if (value.length > 100) return 'Email must be less than 100 characters';
        return '';
      
      case 'service':
        if (!value) return 'Please select a service';
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
        return '';
      
      default:
        return '';
    }
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle field blur (for real-time validation)
  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  // Handle field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing (if field was touched)
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setTouched(allTouched);

    // Validate form
    if (!validateForm()) {
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        element?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', service: '', message: '' });
      setErrors({});
      setTouched({});
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get field error display
  const getFieldError = (field: string): string => {
    return touched[field] ? errors[field] || '' : '';
  };

  // Get field classes
  const getFieldClasses = (field: string, baseClasses: string): string => {
    const hasError = touched[field] && errors[field];
    const isValid = touched[field] && !errors[field] && formData[field as keyof typeof formData];
    
    let classes = baseClasses;
    if (hasError) {
      classes += ' border-red-500 focus:ring-red-500 focus:border-red-500';
    } else if (isValid) {
      classes += ' border-green-500 focus:ring-green-500 focus:border-green-500';
    } else {
      classes += ' border-gray-300 focus:ring-pacific focus:border-transparent';
    }
    
    return classes;
  };

  // Toggle FAQ item
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-pacific/5 via-white to-pacific/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's discuss how we can help accelerate your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Send us a message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-scale-in">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                      className={getFieldClasses('name', 'w-full px-4 py-3 rounded-lg transition-colors')}
                      placeholder="Your full name"
                      aria-describedby={getFieldError('name') ? 'name-error' : undefined}
                    />
                    {getFieldError('name') && (
                      <div id="name-error" className="mt-2 flex items-center text-red-600 text-sm">
                        <AlertCircle size={16} className="mr-1 flex-shrink-0" />
                        {getFieldError('name')}
                      </div>
                    )}
                    {touched.name && !errors.name && formData.name && (
                      <div className="mt-2 flex items-center text-green-600 text-sm">
                        <CheckCircle size={16} className="mr-1 flex-shrink-0" />
                        Looks good!
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      className={getFieldClasses('email', 'w-full px-4 py-3 rounded-lg transition-colors')}
                      placeholder="your.email@example.com"
                      aria-describedby={getFieldError('email') ? 'email-error' : undefined}
                    />
                    {getFieldError('email') && (
                      <div id="email-error" className="mt-2 flex items-center text-red-600 text-sm">
                        <AlertCircle size={16} className="mr-1 flex-shrink-0" />
                        {getFieldError('email')}
                      </div>
                    )}
                    {touched.email && !errors.email && formData.email && (
                      <div className="mt-2 flex items-center text-green-600 text-sm">
                        <CheckCircle size={16} className="mr-1 flex-shrink-0" />
                        Valid email address
                      </div>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={() => handleBlur('service')}
                      className={getFieldClasses('service', 'w-full px-4 py-3 rounded-lg transition-colors appearance-none bg-white')}
                      aria-describedby={getFieldError('service') ? 'service-error' : undefined}
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {getFieldError('service') && (
                      <div id="service-error" className="mt-2 flex items-center text-red-600 text-sm">
                        <AlertCircle size={16} className="mr-1 flex-shrink-0" />
                        {getFieldError('service')}
                      </div>
                    )}
                    {touched.service && !errors.service && formData.service && (
                      <div className="mt-2 flex items-center text-green-600 text-sm">
                        <CheckCircle size={16} className="mr-1 flex-shrink-0" />
                        Service selected
                      </div>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      className={getFieldClasses('message', 'w-full px-4 py-3 rounded-lg transition-colors resize-none')}
                      placeholder="Tell us about your project or how we can help..."
                      aria-describedby={getFieldError('message') ? 'message-error' : undefined}
                    />
                    <div className="mt-1 flex justify-between items-center">
                      <div>
                        {getFieldError('message') && (
                          <div id="message-error" className="flex items-center text-red-600 text-sm">
                            <AlertCircle size={16} className="mr-1 flex-shrink-0" />
                            {getFieldError('message')}
                          </div>
                        )}
                        {touched.message && !errors.message && formData.message && (
                          <div className="flex items-center text-green-600 text-sm">
                            <CheckCircle size={16} className="mr-1 flex-shrink-0" />
                            Great message!
                          </div>
                        )}
                      </div>
                      <span className={`text-sm ${formData.message.length > 1000 ? 'text-red-600' : 'text-gray-500'}`}>
                        {formData.message.length}/1000
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-pacific to-pacific-dark text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </>
                    )}
                  </button>

                  {/* Form Footer */}
                  <p className="text-sm text-gray-500 text-center">
                    * Required field.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="animate-scale-in">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pacific to-pacific-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                    <p className="text-gray-600">(206) 507-7315</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pacific to-pacific-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Text</h3>
                    <p className="text-gray-600">(206) 507-7315</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pacific to-pacific-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                    <p className="text-gray-600">hello@seattledigitalstudio.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pacific to-pacific-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Location</h3>
                    <p className="text-gray-600">Seattle, Washington</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pacific/5 to-pacific-dark/5 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-charcoal mb-4">Response Time</h3>
                <p className="text-gray-600 mb-4">
                  We typically respond to e-mail inquiries within 24 hours during our business hours. 
                  For urgent matters, please call or text directly.
                </p>
                <p className="text-sm text-gray-500">
                  Business Hours: Monday - Thursday, 9:00 AM - 4:00 PM PST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our services, pricing, and process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-pacific focus:ring-inset"
                  aria-expanded={openFaqIndex === index}
                >
                  <h3 className="text-lg font-semibold text-charcoal pr-4">
                    {faq.question}
                  </h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="text-pacific flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-pacific flex-shrink-0" size={20} />
                  )}
                </button>
                
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 animate-slide-up">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Footer */}
          <div className="text-center mt-12 animate-slide-up">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help.
            </p>
            <a
              href="mailto:hello@seattledigitalstudio.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pacific to-pacific-dark text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;