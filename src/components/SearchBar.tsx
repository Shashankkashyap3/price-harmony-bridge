
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (term: string) => void;
  className?: string;
}

const SearchBar = ({ 
  placeholder = "Search for products...", 
  onSearch = () => {}, 
  className = "" 
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`${className} relative max-w-3xl w-full mx-auto transition-all duration-300 ${
        isFocused 
          ? 'ring-2 ring-brand-blue/30 shadow-lg' 
          : 'ring-1 ring-gray-200 shadow'
      }`}
    >
      <div className="relative flex items-center rounded-full overflow-hidden glass-effect">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full px-5 py-4 outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
          aria-label="Search input"
        />
        <button
          type="submit"
          className={`absolute right-1 rounded-full p-3 transition-colors ${
            searchTerm 
              ? 'bg-brand-blue text-white hover:bg-brand-blue/90' 
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
          aria-label="Search button"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute -bottom-6 left-0 right-0 flex justify-center space-x-2 text-xs text-gray-500">
        <span>Popular:</span>
        <button 
          type="button" 
          onClick={() => {
            setSearchTerm('Smartphones');
            onSearch('Smartphones');
          }}
          className="hover:text-brand-blue transition-colors"
        >
          Smartphones
        </button>
        <span>•</span>
        <button 
          type="button"
          onClick={() => {
            setSearchTerm('Laptops');
            onSearch('Laptops');
          }}
          className="hover:text-brand-blue transition-colors"
        >
          Laptops
        </button>
        <span>•</span>
        <button 
          type="button"
          onClick={() => {
            setSearchTerm('Headphones');
            onSearch('Headphones');
          }}
          className="hover:text-brand-blue transition-colors"
        >
          Headphones
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
