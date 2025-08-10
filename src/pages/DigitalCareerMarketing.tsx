import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileSignature, Users, Target, CheckCircle, ArrowRight, FileText, Briefcase, Award, Globe, MessageSquare } from 'lucide-react';

const DigitalCareerMarketing: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'Digital Career Marketing Documents | Seattle Digital Studio';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional career marketing documents including resumes, LinkedIn profiles, networking briefs, and executive branding. Strategic career assets that tell your story and elevate your professional brand.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'career marketing, professional resume, LinkedIn profile, executive branding, networking brief, career documents, professional branding, career advancement');
  }, []);

  const documentSolutions = [
    {
      icon: FileText,
      title: 'Professional Resumes',
      description: 'Strategic, achievement-focused resumes that position you for your target roles and pass through applicant tracking systems.',
      bullets: [
        'ATS-optimized formatting and keywords',
        'Achievement-focused content strategy',
        'Industry-specific positioning',
        'Executive and professional versions'
      ],
      gradient: 'from-pacific to-pacific-dark'
    },
    {
      icon: Globe,
      title: 'LinkedIn Profiles',
      description: 'Comprehensive LinkedIn optimization that improves visibility, establishes authority, and attracts the right opportunities.',
      bullets: [
        'Keyword-optimized headline and summary',
        'Achievement-focused experience section',
        'Strategic skills selection',
        'Recommendation strategy'
      ],
      gradient: 'from-pacific-dark to-pacific'
    },
    {
      icon: Briefcase,
      title: 'One-page Networking Briefs',
      description: 'Concise, powerful documents that make it easy for your network to understand your value and make effective introductions.',
      bullets: [
        'Clear professional positioning',
        'Key achievements and differentiators',
        'Target role and company specifications',
        'Conversation-starting elements'
      ],
      gradient: 'from-pacific to-pacific-light'
    },
    {
      icon: MessageSquare,
      title: 'Professional Bios',
      description: 'Compelling professional narratives for websites, speaking engagements, and company profiles that establish your authority.',
      bullets: [
        'Multiple length options (short, medium, long)',
        'Engaging narrative structure',
        'Achievement highlights',
        'Personality elements that build connection'
      ],
      gradient: 'from-pacific-light to-pacific'
    },
    {
      icon: Award,
      title: 'Executive Branding',
      description: 'Comprehensive executive positioning strategy that aligns your personal brand with your career aspirations.',
      bullets: [
        'Executive value proposition development',
        'Leadership narrative creation',
        'Board and advisory positioning',
        'Executive digital presence strategy'
      ],
      gradient: 'from-pacific-dark to-pacific-light'
    },
    {
      icon: FileSignature,
      title: 'Cover Letters & Follow-ups',
      description: 'Persuasive communications that complement your resume and advance your candidacy throughout the hiring process.',
      bullets: [
        'Customizable cover letter templates',
        'Interview follow-up messages',
        'Networking and introduction emails',
        'Offer negotiation communications'
      ],
      gradient: 'from-pacific to-pacific-dark'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'In-depth Interview',
      description: 'We conduct a comprehensive interview to understand your career history, achievements, strengths, and aspirations. This conversation forms the foundation for all your career marketing documents.'
    },
    {
      number: '02',
      title: 'Document Portfolio Creation',
      description: 'Based on your interview, we create a complete portfolio of complementary documents tailored to your specific career goals and target opportunities.'
    },
    {
      number: '03',
      title: 'Client Review',
      description: 'You review all documents and provide feedback. We ensure every detail accurately reflects your experience and aligns with your professional goals.'
    },
    {
      number: '04',
      title: 'Document Delivery',
      description: 'We deliver your finalized documents in multiple digital formats, ready for immediate use in your job search or professional advancement efforts.'
    },
    {
      number: '05',
      title: 'Implementation Support (Optional)',
      description: 'For clients who want additional assistance, we offer guidance on implementing your career marketing strategy, from optimizing your online profiles to leveraging your new documents effectively.'
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
                  <FileSignature className="text-white" size={28} />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">Digital Career Marketing Documents</h1>
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
              <h2 className="text-3xl font-bold text-charcoal mb-6">Elevate Your Professional Brand</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In today’s competitive job market, generic resumes and outdated LinkedIn profiles won’t get you noticed. Led by Joe Perez—Certified Professional Resume Writer and former Principal of Writing Wolf—our Digital Career Marketing Documents service delivers polished, strategically crafted assets that tell your unique professional story and position you for the roles you truly want. We combine deep industry insight with powerful personal branding to showcase your most impressive achievements and align every detail with your target opportunities. Whether you’re an executive seeking board positions, a professional in career transition, or a specialist aiming to advance, one of our comprehensive Career Marketing Portfolios ensures you stand out for all the right reasons.
              </p>
            </div>

            {/* Image */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/networking-event.png"
                    alt="Career Marketing - Professionals networking at an upscale business event"
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

      {/* Document Solutions We Create Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Career Documents We Create</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive career marketing documents that position you for success in competitive professional markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentSolutions.map((solution, index) => (
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

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven, systematic approach to creating powerful career marketing documents that get results.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className="flex flex-col md:flex-row gap-6 items-start animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pacific to-pacific-dark rounded-xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Related Blog Posts Link */}
          <div className="text-center mt-12 animate-slide-up">
            <Link
              to="/blog?category=career-marketing"
              className="inline-flex items-center text-pacific hover:text-pacific-dark transition-colors duration-200 text-lg font-medium group"
            >
              Related Blog Posts...
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our career marketing documents have helped professionals advance their careers and secure their dream opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "You have provided exactly what I needed someone to do and that is totally re-do the entire look and feel of my resume. I've had a ton of interest and have been interviewed at Google, Amazon, and Microsoft.",
                name: "George M.",
                role: "IT Executive"
              },
              {
                quote: "Joe helped me to transition from a private sector job managing a warehouse into a second career in an entirely different field. I am making more money, have better benefits, and finally I love my work. Having a top quality resume definitely helped!",
                name: "Steven B.",
                role: "Career Changer"
              },
              {
                quote: "Joe is the guy who managed to take my steaming pile of bat guano (which I called a resume) and turn it into a true curriculum vitae.",
                name: "Kyle M.",
                role: "Marketing Director"
              }
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6 text-pacific">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11L8 17H5L7 11H5V8H10V11ZM19 11L17 17H14L16 11H14V8H19V11Z" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
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
            <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Elevate Your Professional Brand?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's discuss how our digital career marketing documents can help you stand out in competitive markets and attract the opportunities you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-pacific to-pacific-dark text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/blog?category=career-marketing"
                className="px-8 py-4 border-2 border-pacific text-pacific font-semibold rounded-xl hover:bg-pacific hover:text-white transition-all duration-300"
              >
                Read Career Marketing Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalCareerMarketing;