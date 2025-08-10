import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, BookOpen, Facebook, ChevronDown } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Solutions', 
      href: '/solutions',
      hasDropdown: true,
      children: [
        { name: 'Blog Writing & Management', href: '/solutions/blog-writing-management' },
        { name: 'Microapp Development', href: '/solutions/microapp-development' },
        { name: 'Technical Writing', href: '/solutions/technical-writing' },
        { name: 'No-code Websites', href: '/solutions/no-code-websites' },
        { name: 'Business Automation', href: '/solutions/business-automation' },
        { name: 'Digital Career Documents', href: '/solutions/digital-career-marketing' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isActiveParent = (item: any) => {
    if (item.children) {
      return item.children.some((child: any) => location.pathname === child.href) || location.pathname === item.href;
    }
    return location.pathname === item.href;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="transition-transform group-hover:scale-105">
                <img
                  src="/images/seattle-digital-studio-logo1.png"
                  alt="Seattle Digital Studio"
                  className="h-10 w-auto"
                />
              </div>
              <span className="text-xl font-bold text-charcoal">Seattle Digital Studio</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative flex items-center">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
                      onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                          isActiveParent(item)
                            ? 'text-pacific bg-pacific/10'
                            : 'text-charcoal hover:text-pacific hover:bg-pacific/5'
                        }`}
                      >
                        {item.name}
                        <ChevronDown 
                          className={`ml-1 transition-transform duration-200 ${
                            isSolutionsDropdownOpen ? 'rotate-180' : ''
                          }`} 
                          size={16} 
                        />
                      </Link>
                      
                      {/* Dropdown Menu with Bridge */}
                      {isSolutionsDropdownOpen && (
                        <div className="absolute top-full left-0 pt-2">
                          {/* Invisible bridge to prevent gap */}
                          <div className="w-64 h-2 bg-transparent"></div>
                          <div className="w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-fade-in">
                            {item.children?.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                                  isActive(child.href)
                                    ? 'text-pacific bg-pacific/10 font-medium'
                                    : 'text-charcoal hover:text-pacific hover:bg-pacific/5'
                                }`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                        isActive(item.href)
                          ? 'text-pacific bg-pacific/10'
                          : 'text-charcoal hover:text-pacific hover:bg-pacific/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-charcoal hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                      isActiveParent(item)
                        ? 'text-pacific bg-pacific/10'
                        : 'text-charcoal hover:text-pacific hover:bg-pacific/5'
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown size={16} />}
                  </Link>
                  
                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            isActive(child.href)
                              ? 'text-pacific bg-pacific/10 font-medium'
                              : 'text-gray-600 hover:text-pacific hover:bg-pacific/5'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/images/seattle-digital-studio-logo1.png"
                  alt="Seattle Digital Studio"
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">Seattle Digital Studio</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Expert digital solutions for content, microapps, websites, and AI automation — led by tech veteran Joe Perez.
              </p>
            </div>

            {/* Learn More Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Learn More</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/solutions/blog-writing-management"
                    className="text-gray-300 hover:text-pacific transition-colors duration-200"
                  >
                    Blog Writing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/microapp-development"
                    className="text-gray-300 hover:text-pacific transition-colors duration-200"
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/technical-writing"
                    className="text-gray-300 hover:text-pacific transition-colors duration-200"
                  >
                    Tech Docs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/no-code-websites"
                    className="text-gray-300 hover:text-pacific transition-colors duration-200"
                  >
                    No-code Websites
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/business-automation"
                    className="text-gray-300 hover:text-pacific transition-colors duration-200"
                  >
                    AI Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-pacific transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="space-y-2 text-gray-300">
                <p>(206) 507-7315</p>
                <p>hello@seattledigitalstudio.com</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://facebook.com/seattledig/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pacific transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://x.com/seattledig" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pacific transition-colors duration-200"
                  aria-label="Follow us on X"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/seattledig/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pacific transition-colors duration-200"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="/blog" 
                  className="text-gray-300 hover:text-pacific transition-colors duration-200"
                  aria-label="Read our blog"
                >
                  <BookOpen size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Joe Perez DBA Seattle Digital Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;