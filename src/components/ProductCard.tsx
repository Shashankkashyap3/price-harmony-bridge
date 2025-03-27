
import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import PriceCompare from './PriceCompare';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  lowestPrice: number;
  lowestPricePlatform: string;
  priceData: {
    platform: string;
    price: number;
    originalPrice?: number;
    logo: string;
    link: string;
    delivery?: string;
    inStock: boolean;
  }[];
}

const ProductCard = ({
  id,
  name,
  image,
  category,
  rating,
  reviewCount,
  lowestPrice,
  lowestPricePlatform,
  priceData
}: ProductCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div className="group w-full rounded-xl overflow-hidden glass-effect hover:shadow-glass-hover transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        {/* Product image */}
        <div className="w-full md:w-1/4 aspect-square md:aspect-auto bg-white p-6 flex items-center justify-center">
          <img 
            src={image} 
            alt={name} 
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        {/* Product details */}
        <div className="w-full md:w-3/4 p-5 flex flex-col">
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs text-brand-blue bg-brand-lightBlue/30 px-2 py-0.5 rounded-full">
                  {category}
                </span>
                <h3 className="mt-2 text-lg font-semibold line-clamp-2">{name}</h3>
              </div>
              
              <div className="flex items-center space-x-1 text-sm">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(rating) 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : i < rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-500">({reviewCount})</span>
              </div>
            </div>
            
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Best price from</p>
                <div className="mt-1 flex items-center space-x-2">
                  <span className="price-tag font-semibold text-xl">${lowestPrice.toFixed(2)}</span>
                  <span className="text-sm text-gray-600">on {lowestPricePlatform}</span>
                </div>
              </div>
              
              <button
                onClick={toggleExpand}
                className="mt-3 sm:mt-0 flex items-center justify-center px-4 py-2 rounded-lg bg-brand-blue text-white button-hover-effect"
              >
                <span>{expanded ? 'Hide Options' : 'Compare Prices'}</span>
                {expanded ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          
          {/* Expanded price comparison */}
          {expanded && (
            <div className="mt-6 pt-4 border-t border-gray-200 animate-fade-in">
              <PriceCompare prices={priceData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
