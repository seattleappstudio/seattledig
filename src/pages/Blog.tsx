import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen, Calendar, ArrowRight, Search, Filter, Clock, User, Tag } from 'lucide-react';
import { getAllPosts, getFeaturedPosts, getPostsByCategory, searchPosts, blogCategories, formatDate, getCategoryColor } from '../utils/blogUtils';
import { BlogPost } from '../types/blog';
import RSSFeedGenerator from '../components/RSSFeedGenerator';
import { resolvePublicImage } from "../utils/resolveImage";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchParams] = useSearchParams();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = 'Blog | Seattle Digital Studio - Digital Marketing & Tech Insights';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert insights on digital transformation, content strategy, automation, and modern business solutions. Read the latest from Seattle Digital Studio\'s blog on tech trends and business growth.');
    }
    
    // Add/update keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'digital marketing blog, tech insights, business automation, content strategy, SEO tips, web development, AI automation, Make.com tutorials, technical writing');
    
    const allPosts = getAllPosts();
    setPosts(allPosts);
    
    // Check for category parameter in URL
    const categoryParam = searchParams.get('category');
    if (categoryParam && blogCategories[categoryParam]) {
      setSelectedCategory(categoryParam);
    } else {
      setFilteredPosts(allPosts);
    }
  }, [searchParams]);

  // Handle search and filtering
  useEffect(() => {
    let filtered = posts;

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = searchPosts(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => 
        post.categories.includes(selectedCategory)
      );
    }

    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory, posts]);

  const featuredPosts = getFeaturedPosts();
  const categories = Object.values(blogCategories);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsFilterOpen(false);
    
    // Update URL without causing a page reload
    const newSearchParams = new URLSearchParams(searchParams);
    if (categoryId === 'all') {
      newSearchParams.delete('category');
    } else {
      newSearchParams.set('category', categoryId);
    }
    
    // Update URL
    const newUrl = newSearchParams.toString() 
      ? `${window.location.pathname}?${newSearchParams.toString()}`
      : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setIsFilterOpen(false);
    
    // Clear URL parameters
    window.history.replaceState({}, '', window.location.pathname);
  };

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-pacific/5 via-white to-pacific/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pacific to-pacific-dark rounded-xl flex items-center justify-center">
                <BookOpen className="text-white" size={28} />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">Insights from the Studio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert insights on digital transformation, content strategy, automation, and modern business solutions.
            </p>
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
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pacific focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter size={16} className="mr-2" />
                Filters
              </button>

              <div className={`${isFilterOpen ? 'flex' : 'hidden'} lg:flex flex-wrap gap-2`}>
                <button
                  onClick={() => handleCategoryClick('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-pacific text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Posts
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    style={{
                      backgroundColor: selectedCategory === category.id ? category.color : undefined
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {(searchQuery || selectedCategory !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-pacific hover:text-pacific-dark transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== 'all' && ` in ${blogCategories[selectedCategory]?.name}`}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && selectedCategory === 'all' && !searchQuery && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resolvePublicImage(post.image)}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/images/fallback-social.jpg";
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((categoryId) => (
                        <span
                          key={categoryId}
                          className="px-2 py-1 text-xs font-medium rounded-full text-white"
                          style={{ backgroundColor: getCategoryColor(categoryId) }}
                        >
                          {blogCategories[categoryId]?.name || categoryId}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-3 line-clamp-2">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:text-pacific transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.readingTime} min read
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(post.publishDate)}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-charcoal">
              {selectedCategory === 'all' ? 'All Articles' : `${blogCategories[selectedCategory]?.name} Articles`}
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500 mb-4">
                {searchQuery
                  ? `No articles match your search for "${searchQuery}"`
                  : 'No articles in this category yet'}
              </p>
              <button
                onClick={clearFilters}
                className="text-pacific hover:text-pacific-dark transition-colors"
              >
                Clear filters and view all articles
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((categoryId) => (
                        <button
                          key={categoryId}
                          onClick={() => handleCategoryClick(categoryId)}
                          className="px-2 py-1 text-xs font-medium rounded-full text-white hover:opacity-80 transition-opacity"
                          style={{ backgroundColor: getCategoryColor(categoryId) }}
                        >
                          {blogCategories[categoryId]?.name || categoryId}
                        </button>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-3 line-clamp-2">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:text-pacific transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.readingTime} min read
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(post.publishDate)}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-pacific hover:text-pacific-dark transition-colors font-medium group"
                    >
                      Read More
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* RSS Feed Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600">
              Never miss our latest insights and updates. Subscribe to our RSS feed or follow us on social media.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RSSFeedGenerator />
            
            <div className="bg-gradient-to-br from-charcoal/5 to-charcoal/10 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-charcoal mb-4">Follow Us</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Connect with us on social media for real-time updates, behind-the-scenes content, and industry insights.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/company/seattledig/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/seattledig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  X (Twitter)
                </a>
                <Link
                  to="https://facebook.com/seattledig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-pacific text-white text-sm font-medium rounded-lg hover:bg-pacific-dark transition-colors"
                >
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;