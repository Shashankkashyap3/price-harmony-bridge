
import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[80%] rounded-full bg-brand-lightBlue opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[80%] rounded-full bg-brand-lightOrange opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight">
              Find the <span className="text-gradient">Best Price</span> Across All Platforms
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Compare prices from major retailers instantly and save money on your purchases.
            </p>
          </div>
          
          <div className="pt-4">
            <SearchBar 
              placeholder="Search for products like 'iPhone 14', 'Nike Air'..." 
              onSearch={(term) => console.log('Searching for:', term)}
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 pt-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
              <span>Compare 100+ stores</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
              <span>Price history tracking</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
              <span>AI-powered price predictions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
