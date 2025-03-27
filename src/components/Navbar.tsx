
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MenuIcon, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 glass-effect' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingCart className="h-6 w-6 text-brand-blue" />
            <span className="text-xl font-semibold text-primary">PriceHarmony</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-brand-blue transition-colors">
              Home
            </Link>
            <Link to="/trending" className="text-sm font-medium hover:text-brand-blue transition-colors">
              Trending
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-brand-blue transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-brand-blue transition-colors">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              className="rounded-full p-2 hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            
            <button 
              className="md:hidden rounded-full p-2 hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <MenuIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-effect animate-fade-in-up">
          <div className="py-4 px-6 space-y-4">
            <Link 
              to="/" 
              className="block text-sm font-medium hover:text-brand-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/trending" 
              className="block text-sm font-medium hover:text-brand-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Trending
            </Link>
            <Link 
              to="/categories" 
              className="block text-sm font-medium hover:text-brand-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/about" 
              className="block text-sm font-medium hover:text-brand-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
