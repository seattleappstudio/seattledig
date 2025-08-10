import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Search, Hash, ChevronDown, ChevronUp } from 'lucide-react';

const AIGlossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set());

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'AI Glossary | Seattle Digital Studio - Artificial Intelligence Terms & Definitions';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive AI glossary with definitions of artificial intelligence terms, machine learning concepts, and technology terminology. Essential reference for understanding AI.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'AI glossary, artificial intelligence terms, machine learning definitions, AI terminology, tech glossary, AI concepts, deep learning terms');
  }, []);

  // AI terms with the provided definitions
  const aiTerms = [
    {
      term: "Agentic AI",
      definition: "Agentic AI refers to systems that can independently plan, decide, and act in pursuit of defined goals. These systems are capable of adapting their actions based on feedback and environment, often with minimal human oversight.",
      category: "General"
    },
    {
      term: "Algorithm",
      definition: "An algorithm is a finite set of instructions used to solve problems or perform computations. In AI, algorithms power everything from learning patterns in data to making predictions and recommendations.",
      category: "General"
    },
    {
      term: "API (Application Programming Interface)",
      definition: "An API is a set of protocols that allows different software applications to communicate. APIs are commonly used to integrate AI services into existing platforms or workflows.",
      category: "Technical"
    },
    {
      term: "Artificial General Intelligence (AGI)",
      definition: "AGI is a theoretical form of AI capable of performing any cognitive task that a human can, across all domains. It remains a long-term goal in artificial intelligence research.",
      category: "General"
    },
    {
      term: "Artificial Intelligence (AI)",
      definition: "AI refers to technologies that mimic human cognitive processes like reasoning, learning, and problem-solving. It includes subfields such as machine learning, computer vision, and natural language processing.",
      category: "General"
    },
    {
      term: "Automation",
      definition: "Automation is the use of technology to perform tasks with limited or no human input. AI enhances automation by enabling systems to learn, adapt, and make decisions based on data.",
      category: "Applications"
    },
    {
      term: "AutoML (Automated Machine Learning)",
      definition: "AutoML tools automate the development of machine learning models, handling tasks such as feature selection and hyperparameter tuning, making AI more accessible to non-experts.",
      category: "Machine Learning"
    },
    {
      term: "Bias (in AI)",
      definition: "Bias in AI refers to systematic errors in model outputs caused by imbalanced or flawed training data. Bias can result in unfair or inaccurate decisions and must be actively mitigated.",
      category: "Ethics"
    },
    {
      term: "Chatbot",
      definition: "A chatbot is a software application that simulates human conversation via text or voice. Chatbots often use natural language processing to interpret queries and provide relevant responses.",
      category: "Applications"
    },
    {
      term: "ChatGPT",
      definition: "ChatGPT is a conversational AI developed by OpenAI using GPT (Generative Pre-trained Transformer) architecture. It generates human-like responses and is widely used for writing, coding, and customer support.",
      category: "Products"
    },
    {
      term: "Classification",
      definition: "Classification is a supervised learning task where input data is categorized into predefined classes. It's commonly used in email filtering, image tagging, and medical diagnosis.",
      category: "Machine Learning"
    },
    {
      term: "Claude",
      definition: "Claude is a large language model developed by Anthropic, focused on safe and aligned behavior. It uses \"constitutional AI\" to prioritize helpful, honest, and harmless outputs.",
      category: "Products"
    },
    {
      term: "Clustering",
      definition: "Clustering is an unsupervised learning technique that groups similar data points based on patterns. It's often used for segmentation in marketing and exploratory analysis.",
      category: "Machine Learning"
    },
    {
      term: "Cognitive Services",
      definition: "Cognitive services are prebuilt AI models offered via cloud platforms that handle tasks such as language translation, image recognition, and sentiment analysis through APIs.",
      category: "Services"
    },
    {
      term: "Computer Vision",
      definition: "Computer vision enables machines to interpret visual information such as photos or video. It powers applications like facial recognition, object detection, and medical imaging.",
      category: "Subfields"
    },
    {
      term: "Copilot (Microsoft Copilot)",
      definition: "Microsoft Copilot integrates generative AI into Microsoft 365 apps, enhancing productivity in Word, Excel, and Outlook through automated writing, analysis, and summarization.",
      category: "Products"
    },
    {
      term: "Data Augmentation",
      definition: "Data augmentation involves modifying training data to increase its diversity. Techniques like flipping, cropping, or adding noise help models generalize better and avoid overfitting.",
      category: "Machine Learning"
    },
    {
      term: "Data Labeling",
      definition: "Data labeling is the process of tagging raw data with categories to make it usable for supervised learning. Accurate labels are essential for model performance and reliability.",
      category: "Data"
    },
    {
      term: "Data Pipeline",
      definition: "A data pipeline automates the flow of data through collection, cleaning, transformation, and storage. It's essential for preparing data before it's used in machine learning or analytics.",
      category: "Data"
    },
    {
      term: "Deep Learning",
      definition: "Deep learning is a subset of machine learning that uses multi-layered neural networks to learn complex patterns. It excels at processing unstructured data like images, audio, and text.",
      category: "Machine Learning"
    },
    {
      term: "Embedding",
      definition: "An embedding converts data—like text or images—into numerical vectors that preserve semantic relationships. Embeddings are used in search, recommendation engines, and natural language processing.",
      category: "Technical"
    },
    {
      term: "Explainability",
      definition: "Explainability refers to the ability to understand and interpret how an AI system reaches its decisions. It's vital for trust, auditing, and regulatory compliance.",
      category: "Ethics"
    },
    {
      term: "Feature Engineering",
      definition: "Feature engineering involves selecting, modifying, or creating input variables to improve a model's accuracy. It's a key part of the machine learning pipeline.",
      category: "Machine Learning"
    },
    {
      term: "Fine-tuning",
      definition: "Fine-tuning is the process of adapting a pre-trained model to a specific task using a smaller dataset. It improves performance on domain-specific applications.",
      category: "Machine Learning"
    },
    {
      term: "Foundation Model",
      definition: "A foundation model is a large model trained on broad data that can be adapted for many downstream tasks. GPT-4 and Claude are examples of foundation models used across industries.",
      category: "Machine Learning"
    },
    {
      term: "Generative AI",
      definition: "Generative AI refers to systems that produce new content—text, images, audio, or code—by learning from patterns in training data. It powers tools like ChatGPT and image generators.",
      category: "Applications"
    },
    {
      term: "Gemini (Google)",
      definition: "Gemini is Google's next-generation AI model, integrated into products like Gmail and Google Docs. It supports text, images, and code generation, and succeeds Google Bard.",
      category: "Products"
    },
    {
      term: "Groq",
      definition: "Groq is a company that builds ultra-fast AI inference chips and infrastructure. It enables real-time response from large language models with extremely low latency for enterprise applications.",
      category: "Companies"
    },
    {
      term: "Hallucination (AI)",
      definition: "Hallucination occurs when AI generates plausible but false or fabricated information. It's a known limitation of generative models and impacts trustworthiness.",
      category: "Limitations"
    },
    {
      term: "Hyperparameter Tuning",
      definition: "Hyperparameter tuning is the process of selecting the best configuration settings for a model to maximize its performance, often using techniques like grid search or Bayesian optimization.",
      category: "Machine Learning"
    },
    {
      term: "Inference",
      definition: "Inference in AI refers to using a trained model to generate predictions or outputs based on new data. It's the operational phase of machine learning deployment.",
      category: "Technical"
    },
    {
      term: "Label (in ML)",
      definition: "A label is a known output or category assigned to a data point during supervised learning. Labels help models learn the correct relationship between inputs and desired outcomes.",
      category: "Machine Learning"
    },
    {
      term: "Large Language Model (LLM)",
      definition: "A large language model is a deep learning model trained on massive text datasets to understand and generate human language. LLMs like GPT-4 or Claude are used for writing, coding, and reasoning tasks.",
      category: "Machine Learning"
    },
    {
      term: "LLaMA (Meta)",
      definition: "LLaMA is a family of open-weight language models developed by Meta. Designed for transparency and efficiency, it allows researchers and developers to customize and deploy powerful AI models with fewer restrictions.",
      category: "Products"
    },
    {
      term: "Machine Learning (ML)",
      definition: "Machine learning is a subfield of AI focused on algorithms that learn from data to improve performance over time. It includes supervised, unsupervised, and reinforcement learning techniques.",
      category: "Subfields"
    },
    {
      term: "Mistral",
      definition: "Mistral is an AI company developing lightweight, open-weight language models optimized for performance and customization. Its models are gaining traction among developers seeking flexible alternatives to proprietary LLMs.",
      category: "Companies"
    },
    {
      term: "Model (AI Model)",
      definition: "An AI model is a mathematical representation of relationships in data, trained to perform tasks like classification or prediction. It's the core of most machine learning systems.",
      category: "Technical"
    },
    {
      term: "Model Drift",
      definition: "Model drift occurs when the real-world data that an AI model encounters changes over time, reducing its accuracy. Drift requires ongoing monitoring and periodic retraining.",
      category: "Technical"
    },
    {
      term: "Natural Language Processing (NLP)",
      definition: "NLP is a field of AI focused on the interaction between computers and human language. It enables tasks like translation, summarization, and sentiment analysis.",
      category: "Subfields"
    },
    {
      term: "Neural Network",
      definition: "A neural network is a machine learning model inspired by the human brain. It consists of layers of connected nodes and is particularly effective at detecting patterns in complex data.",
      category: "Machine Learning"
    },
    {
      term: "Overfitting",
      definition: "Overfitting happens when a model learns the training data too well, including noise, and performs poorly on new data. It is a common issue that affects generalization.",
      category: "Machine Learning"
    },
    {
      term: "Perplexity AI",
      definition: "Perplexity AI is an AI-powered search engine that combines language models with real-time web data to answer questions with citations. It bridges traditional search with conversational AI.",
      category: "Products"
    },
    {
      term: "Pi (Inflection AI)",
      definition: "Pi is a conversational AI assistant created by Inflection AI. It emphasizes emotional intelligence and dialogue over utility, aiming to provide personal support and empathetic interaction.",
      category: "Products"
    },
    {
      term: "Predictive Analytics",
      definition: "Predictive analytics uses historical and real-time data along with machine learning models to anticipate future outcomes. It helps in planning, forecasting, and decision-making.",
      category: "Applications"
    },
    {
      term: "Pretraining",
      definition: "Pretraining is the process of training a model on a general dataset before adapting it to a specific task. This gives the model foundational knowledge that enhances fine-tuning.",
      category: "Machine Learning"
    },
    {
      term: "Prompt Engineering",
      definition: "Prompt engineering is the practice of designing inputs that guide language models toward useful or accurate outputs. It's key for getting consistent results from tools like ChatGPT or Claude.",
      category: "Technical"
    },
    {
      term: "Recommendation Engine",
      definition: "A recommendation engine is an AI system that suggests products or content to users based on behavior, preferences, or similarities. It powers personalization in platforms like Netflix and Amazon.",
      category: "Applications"
    },
    {
      term: "Reinforcement Learning",
      definition: "Reinforcement learning is a type of machine learning where an agent learns by taking actions in an environment and receiving rewards or penalties based on performance.",
      category: "Machine Learning"
    },
    {
      term: "Retrieval-Augmented Generation (RAG)",
      definition: "RAG combines generative AI with external data sources. Before responding, the model retrieves relevant documents to improve accuracy and reduce hallucinations.",
      category: "Technical"
    },
    {
      term: "Robotic Process Automation (RPA)",
      definition: "RPA involves software bots that automate repetitive digital tasks by mimicking user actions. When combined with AI, it enables more intelligent and dynamic workflows.",
      category: "Applications"
    },
    {
      term: "Sentiment Analysis",
      definition: "Sentiment analysis uses natural language processing to detect emotional tone in text. It's commonly used to analyze customer feedback, reviews, or social media.",
      category: "Applications"
    },
    {
      term: "Supervised Learning",
      definition: "Supervised learning trains a model on labeled data so it can learn the relationship between inputs and outputs. It's widely used in classification and regression tasks.",
      category: "Machine Learning"
    },
    {
      term: "Token",
      definition: "A token is a unit of language (word, subword, or character) processed by AI models. Tokenization helps break down text for more efficient model input and analysis.",
      category: "Technical"
    },
    {
      term: "Training Data",
      definition: "Training data is the labeled or structured data used to teach an AI model. High-quality training data is critical to building accurate and unbiased models.",
      category: "Data"
    },
    {
      term: "Transfer Learning",
      definition: "Transfer learning reuses a model trained on one task for another related task. It accelerates AI development by reducing the need for large task-specific datasets.",
      category: "Machine Learning"
    },
    {
      term: "Unsupervised Learning",
      definition: "Unsupervised learning trains models on data without labeled outputs. It allows systems to find patterns or groupings, often used in clustering and anomaly detection.",
      category: "Machine Learning"
    },
    {
      term: "Vector Database",
      definition: "A vector database stores and retrieves data in high-dimensional vector form, typically used for semantic search, recommendations, and working with embeddings.",
      category: "Data"
    },
    {
      term: "Workflow Automation",
      definition: "Workflow automation uses AI or scripting tools to streamline multistep business processes. It reduces manual labor and increases efficiency across operations.",
      category: "Applications"
    }
  ];

  // Get unique letters from terms
  const availableLetters = Array.from(new Set(aiTerms.map(term => term.term.charAt(0).toUpperCase()))).sort();

  // Filter terms based on search and letter selection
  const filteredTerms = aiTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter = selectedLetter === 'all' || term.term.charAt(0).toUpperCase() === selectedLetter;
    return matchesSearch && matchesLetter;
  });

  // Toggle term expansion
  const toggleTerm = (term: string) => {
    const newExpanded = new Set(expandedTerms);
    if (newExpanded.has(term)) {
      newExpanded.delete(term);
    } else {
      newExpanded.add(term);
    }
    setExpandedTerms(newExpanded);
  };

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-pacific/5 via-white to-pacific/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-up">
            {/* Back to Resources Link */}
            <Link
              to="/resources"
              className="inline-flex items-center text-pacific hover:text-pacific-dark transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
              Back to Resources
            </Link>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pacific-dark to-pacific rounded-xl flex items-center justify-center">
                  <BookOpen className="text-white" size={28} />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">AI Glossary</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive guide to artificial intelligence terminology, concepts, and technologies. 
                Essential reference for understanding AI and machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search terms and definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pacific focus:border-transparent"
              />
            </div>

            {/* Letter Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-gray-700 mr-2">Filter by letter:</span>
              <button
                onClick={() => setSelectedLetter('all')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedLetter === 'all'
                    ? 'bg-pacific text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {availableLetters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedLetter === letter
                      ? 'bg-pacific text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''} found
            {searchTerm && ` for "${searchTerm}"`}
            {selectedLetter !== 'all' && ` starting with "${selectedLetter}"`}
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No terms found</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm
                  ? `No terms match your search for "${searchTerm}"`
                  : 'No terms available for the selected letter'}
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLetter('all');
                }}
                className="text-pacific hover:text-pacific-dark transition-colors"
              >
                Clear filters and view all terms
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTerms.map((item, index) => (
                <div
                  key={item.term}
                  className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => toggleTerm(item.term)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-pacific focus:ring-inset"
                    aria-expanded={expandedTerms.has(item.term)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-bold text-charcoal">
                          {item.term}
                        </h3>
                        <span className="px-2 py-1 bg-pacific/10 text-pacific text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    {expandedTerms.has(item.term) ? (
                      <ChevronUp className="text-pacific flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-pacific flex-shrink-0" size={20} />
                    )}
                  </button>
                  
                  {expandedTerms.has(item.term) && (
                    <div className="px-6 pb-4 animate-slide-up">
                      <p className="text-gray-600 leading-relaxed">
                        {item.definition}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Need Help Understanding AI for Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team can help you understand how AI and automation can benefit your specific business needs. 
              Get expert guidance on implementing AI solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-pacific to-pacific-dark text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get AI Consultation
              </Link>
              <Link
                to="/resources"
                className="px-8 py-4 border-2 border-pacific text-pacific font-semibold rounded-xl hover:bg-pacific hover:text-white transition-all duration-300"
              >
                Browse More Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIGlossary;