import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, Users, Zap, Search, ExternalLink, ArrowRight, Globe, Tag } from 'lucide-react';

const SeattleAITechDirectory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'Seattle AI & Tech Directory | Seattle Digital Studio - Local Tech Companies';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive directory of Seattle AI and tech companies. Discover local startups, established tech firms, and AI innovators in the Pacific Northwest tech ecosystem.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'Seattle tech companies, Seattle AI companies, Pacific Northwest tech, Seattle startups, tech directory, AI directory, Seattle tech ecosystem, Washington tech companies');
  }, []);

  const categories = [
    { id: 'startups', name: 'Startups', count: 15 },
    { id: 'consultants', name: 'Consultants', count: 5 },
    { id: 'tools', name: 'Tools & Platforms', count: 10 },
    { id: 'investors', name: 'Investors', count: 8 },
    { id: 'research', name: 'Research', count: 4 },
    { id: 'groups', name: 'Groups', count: 1 }
  ];

  const companies = [
    {
      id: 1,
      name: "Avanade AI",
      description: "Focuses on enterprise AI and cloud consulting services with a focus on Microsoft AI tools and integration strategies.",
      category: "consultants",
      website: "https://www.avanade.com/",
      location: "Seattle, WA"
    },
    {
      id: 2,
      name: "Fresh Consulting",
      description: "Pursues computing advances to create intelligent machines that complement human reasoning to augment and enrich our experience and competencies.",
      category: "consultants",
      website: "https://www.freshconsulting.com/",
      location: "Bellevue, WA"
    },
    {
      id: 3,
      name: "Scalability",
      description: "Offers consulting for digital marketing, content strategy, and analytics.",
      category: "consultants",
      website: "https://www.scalability.agency/",
      location: "Seattle, WA"
    },
    {
      id: 4,
      name: "Slalom AI",
      description: "Designs and implements cloud-first AI and automation strategies for enterprise clients across industries.",
      category: "consultants",
      website: "https://www.slalom.com/us/en/services/artificial-intelligence",
      location: "Seattle, WA"
    },
    {
      id: 5,
      name: "West Monroe AI Consulting",
      description: "Helps businesses integrate AI into their operations with a focus on practical outcomes and enterprise readiness.",
      category: "consultants",
      website: "https://www.westmonroe.com/offices/seattle",
      location: "Chicago, IL (office in Seattle, WA)"
    },
    {
      id: 6,
      name: "Amperity",
      description: "Provides AI-powered customer data platforms to unify and analyze enterprise customer data for personalized marketing and insights.",
      category: "startups",
      website: "https://amperity.com/",
      location: "Kirkland, WA"
    },
    {
      id: 7,
      name: "BirchAI (Sagility Health)",
      description: "Specializes in automating medical documentation and patient communications.",
      category: "startups",
      website: "https://www.birchai.com/",
      location: "Seattle, WA"
    },
    {
      id: 8,
      name: "Defined.ai",
      description: "Offers a marketplace for high-quality training data and AI model building, with roots in Portugal and strong operations in Seattle.",
      category: "startups",
      website: "https://www.defined.ai/",
      location: "Seattle, WA"
    },
    {
      id: 9,
      name: "Enzzo",
      description: "Operates in the AI-driven hardware development space, providing tools to streamline product design and manufacturing.",
      category: "tools",
      website: "https://enzzo.ai/",
      location: "Seattle, WA"
    },
    {
      id: 10,
      name: "Evisort",
      description: "Provides AI-powered contract management and document automation tools for enterprise legal teams. Significant Seattle expansion post-funding.",
      category: "tools",
      website: "https://www.evisort.com/",
      location: "Seattle, WA"
    },
    {
      id: 11,
      name: "Falkon AI",
      description: "Offers an AI-powered sales and marketing analytics platform built by ex-Amazon and Tableau employees. Backed by Madrona Venture Group.",
      category: "startups",
      website: "https://www.falkon.ai/",
      location: "Seattle, WA"
    },
    {
      id: 12,
      name: "Gradial",
      description: "Uses generative AI to help businesses maintain up-to-date digital content.",
      category: "tools",
      website: "https://www.gradial.com/",
      location: "Seattle, WA"
    },
    {
      id: 13,
      name: "Healionics",
      description: "Develops artificial blood vessels for dialysis patients.",
      category: "startups",
      website: "https://healionics.com/",
      location: "Seattle, WA"
    },
    {
      id: 14,
      name: "Humanly",
      description: "Provides a conversational AI tool for recruiting and candidate screening.",
      category: "tools",
      website: "https://www.humanly.io/",
      location: "Seattle, WA"
    },
    {
      id: 15,
      name: "Kaskada (DataStax)",
      description: "Serves the data science and machine learning industries, helping users create and operate predictive models with event-based data.",
      category: "startups",
      website: "https://www.kaskada.com/",
      location: "Seattle, WA"
    },
    {
      id: 16,
      name: "Lexion",
      description: "Provides AI-powered contract lifecycle management tools.",
      category: "tools",
      website: "https://www.lexion.ai/",
      location: "Seattle, WA"
    },
    {
      id: 17,
      name: "Mason",
      description: "Combines IoT and AI to deliver smart device management and provisioning for enterprises. Funded by Coatue and Kleiner Perkins.",
      category: "startups",
      website: "https://www.bymason.com/",
      location: "Seattle, WA"
    },
    {
      id: 18,
      name: "Oleria",
      description: "Offers adaptive AI-driven cybersecurity platforms. Founded by former AWS security leaders, backed by Salesforce Ventures.",
      category: "startups",
      website: "https://www.oleria.com/",
      location: "Bellevue, WA"
    },
    {
      id: 19,
      name: "PreemptiveAI",
      description: "Offers real-time diagnostic solutions powered by AI.",
      category: "startups",
      website: "https://www.preemptiveai.com/",
      location: "Seattle, WA"
    },
    {
      id: 20,
      name: "Protect AI (Palo Alto Networks)",
      description: "Helps companies monitor and protect AI systems from cyberattacks.",
      category: "startups",
      website: "https://protectai.com/",
      location: "Seattle, WA"
    },
    {
      id: 21,
      name: "Pulumi",
      description: "Integrates AI to assist developers with automated code generation and ops insights.",
      category: "startups",
      website: "https://www.pulumi.com/",
      location: "Seattle, WA"
    },
    {
      id: 22,
      name: "Read AI",
      description: "Specializes in enhancing virtual meetings through its AI-powered tools.",
      category: "tools",
      website: "https://www.read.ai/",
      location: "Seattle, WA"
    },
    {
      id: 23,
      name: "Runway AI",
      description: "Offers generative video tools using AI, with a satellite office in Seattle supporting core product development.",
      category: "tools",
      website: "https://runwayml.com/",
      location: "Seattle, WA"
    },
    {
      id: 24,
      name: "Sanctuary AI",
      description: "Specializing in general-purpose humanoid robots powered by advanced AI. Maintains a Seattle tech office for U.S. expansion.",
      category: "startups",
      website: "https://www.sanctuary.ai/",
      location: "Vancouver, BC"
    },
    {
      id: 25,
      name: "SeekOut",
      description: "Provides AI talent intelligence platform founded by ex-Microsoft engineers.",
      category: "tools",
      website: "https://www.seekout.com/",
      location: "Seattle, WA"
    },
    {
      id: 26,
      name: "WellSaid Labs",
      description: "Offers an AI-powered voice generation platform.",
      category: "tools",
      website: "https://www.wellsaidlabs.com/",
      location: "Seattle, WA"
    },
    {
      id: 27,
      name: "Flying Fish Partners",
      description: "Focuses specifically on AI and ML startups in the Pacific Northwest.",
      category: "investors",
      website: "https://www.flyingfish.vc/about-us",
      location: "Seattle, WA"
    },
    {
      id: 28,
      name: "Madrona Venture Group",
      description: "Invests primarily in AI and automation.",
      category: "investors",
      website: "https://www.madrona.com/",
      location: "Seattle, WA"
    },
    {
      id: 29,
      name: "M12 (Microsoft's VC arm)",
      description: "Invests with a tight relationship with the Copilot ecosystem.",
      category: "investors",
      website: "https://m12.vc/",
      location: "Seattle, WA"
    },
    {
      id: 30,
      name: "Seven Peaks Ventures",
      description: "Invests in AI, no-code, and automation.",
      category: "investors",
      website: "https://sevenpeaksventures.com/",
      location: "Bend, OR"
    },
    {
      id: 31,
      name: "Unlock Venture Partners",
      description: "Offers an early-stage fund with Seattle office; active in AI startup seed rounds.",
      category: "investors",
      website: "https://www.unlockvp.com/",
      location: "Seattle, WA"
    },
    {
      id: 32,
      name: "Voyager Capital",
      description: "Invests in cloud infrastructure and automation startups in the PNW.",
      category: "investors",
      website: "https://www.voyagercapital.com/",
      location: "Seattle, WA"
    },
    {
      id: 33,
      name: "FUSE VC",
      description: "Invests in B2B SaaS, data infrastructure, and AI platforms.",
      category: "investors",
      website: "https://fuse.vc/",
      location: "Seattle, WA"
    },
    {
      id: 34,
      name: "Pioneer Square Labs",
      description: "Offers a startup studio and fund with AI and no-code incubations.",
      category: "investors",
      website: "https://www.pioneersquarelabs.com/",
      location: "Seattle, WA"
    },
    {
      id: 35,
      name: "AI House",
      description: "Offers an AI incubator hub launched as a public-private joint venture.",
      category: "research",
      website: "https://www.ai2incubator.com/ai-house",
      location: "Seattle, WA"
    },
    {
      id: 36,
      name: "Allen Institute for AI (AI2)",
      description: "Focused on large-scale open models, data, robotics, and conservation.",
      category: "research",
      website: "https://allenai.org/",
      location: "Seattle, WA"
    },
    {
      id: 37,
      name: "University of Washington NLP Group",
      description: "Offers a world-renowned team of AI researchers.",
      category: "research",
      website: "https://nlp.washington.edu/",
      location: "Seattle, WA"
    },
    {
      id: 38,
      name: "Microsoft Research AI",
      description: "Focused on NLP, Copilot, and generative AI.",
      category: "research",
      website: "https://www.microsoft.com/en-us/research/research-area/artificial-intelligence/",
      location: "Seattle, WA"
    },
    {
      id: 39,
      name: "Seattle AI Society",
      description: "Brings together AI builders, founders, and enthusiasts.",
      category: "groups",
      website: "https://www.seattleaisociety.org/",
      location: "Seattle, WA"
    }
  ];

  // Filter companies based on selected category and sort appropriately
  const filteredCompanies = (() => {
    let filtered = selectedCategory === 'all' 
      ? companies 
      : companies.filter(company => company.category === selectedCategory);
    
    // Sort alphabetically by name when "All" is selected
    if (selectedCategory === 'all') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return filtered;
  })();

  // Get category color
  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      startups: 'bg-blue-500',
      consultants: 'bg-green-500',
      tools: 'bg-purple-500',
      investors: 'bg-orange-500',
      research: 'bg-red-500',
      groups: 'bg-teal-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  // Get category display name
  const getCategoryDisplayName = (category: string): string => {
    const names: Record<string, string> = {
      startups: 'Startup',
      consultants: 'Consultant',
      tools: 'Tool & Platform',
      investors: 'Investor',
      research: 'Research',
      groups: 'Group'
    };
    return names[category] || category;
  };

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-pacific/5 via-white to-pacific/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pacific to-pacific-dark rounded-xl flex items-center justify-center">
                <MapPin className="text-white" size={28} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">Seattle AI & Tech Directory</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the thriving AI and technology ecosystem in Seattle and the Pacific Northwest. 
              Connect with innovative companies, startups, and tech leaders shaping the future.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-3xl font-bold text-pacific mb-2">39</div>
              <div className="text-gray-600">Companies Listed</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-pacific mb-2">15</div>
              <div className="text-gray-600">AI Startups</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-pacific mb-2">8</div>
              <div className="text-gray-600">Investors</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-pacific mb-2">6</div>
              <div className="text-gray-600">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search companies..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pacific focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore Seattle's diverse tech ecosystem across different industries and specializations.
            </p>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-pacific text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All ({companies.length})
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-pacific text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Companies List Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              {selectedCategory === 'all' 
                ? 'All Companies' 
                : `${categories.find(c => c.id === selectedCategory)?.name} Companies`}
            </h2>
            <p className="text-lg text-gray-600">
              {filteredCompanies.length} companies found
              {selectedCategory === 'all' && ' (sorted alphabetically)'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompanies.map((company, index) => (
              <div
                key={company.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-charcoal hover:text-pacific transition-colors group"
                      >
                        {company.name}
                        <ExternalLink size={16} className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(company.category)}`}>
                        <Tag size={12} className="mr-1" />
                        {getCategoryDisplayName(company.category)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {company.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1 flex-shrink-0" />
                    <span>{company.location}</span>
                  </div>
                  
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-pacific hover:text-pacific-dark transition-colors text-sm font-medium group"
                  >
                    <Globe size={14} className="mr-1" />
                    Visit Website
                    <ExternalLink size={12} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No companies found</h3>
              <p className="text-gray-500 mb-4">
                No companies match the selected category.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-pacific hover:text-pacific-dark transition-colors"
              >
                View all companies
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pacific/5 to-pacific-dark/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <div className="w-16 h-16 bg-gradient-to-br from-pacific to-pacific-dark rounded-xl flex items-center justify-center mx-auto mb-6">
              <Zap className="text-white" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Growing Directory</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're continuously expanding this directory with more Seattle AI and tech companies. 
              This resource will continue to grow as we discover and add more innovative companies 
              in the Pacific Northwest tech ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-pacific to-pacific-dark text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Submit Your Company
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

export default SeattleAITechDirectory;