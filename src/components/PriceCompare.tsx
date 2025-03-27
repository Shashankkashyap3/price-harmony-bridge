
import React from 'react';
import { ExternalLink, AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';

interface PriceInfo {
  platform: string;
  price: number;
  originalPrice?: number;
  logo: string;
  link: string;
  delivery?: string;
  inStock: boolean;
}

interface PriceCompareProps {
  prices: PriceInfo[];
  currency?: string;
}

const PriceCompare = ({ prices, currency = "$" }: PriceCompareProps) => {
  // Sort prices from lowest to highest
  const sortedPrices = [...prices].sort((a, b) => a.price - b.price);
  const lowestPrice = sortedPrices[0]?.price || 0;
  
  return (
    <div className="space-y-3 w-full animate-fade-in">
      <h3 className="text-sm font-medium text-gray-500">Available from {prices.length} sellers</h3>
      
      <div className="space-y-2">
        {sortedPrices.map((item, index) => (
          <div 
            key={item.platform}
            className={`relative group rounded-lg border p-3 ${
              index === 0 
                ? 'border-brand-blue/30 bg-brand-lightBlue/10' 
                : 'border-gray-200 hover:border-gray-300'
            } transition-all duration-200`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex-shrink-0 rounded overflow-hidden bg-white p-1">
                  <img 
                    src={item.logo} 
                    alt={item.platform} 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium">{item.platform}</h4>
                    {index === 0 && (
                      <span className="ml-2 text-xs bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded-full">
                        Best Price
                      </span>
                    )}
                  </div>
                  
                  {item.delivery && (
                    <p className="text-xs text-gray-500 mt-0.5">{item.delivery}</p>
                  )}
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-1.5">
                  {item.originalPrice && item.originalPrice > item.price && (
                    <span className="text-sm line-through text-gray-400">
                      {currency}{item.originalPrice.toFixed(2)}
                    </span>
                  )}
                  
                  <span className={`font-semibold ${index === 0 ? 'text-brand-blue' : ''}`}>
                    {currency}{item.price.toFixed(2)}
                  </span>
                </div>
                
                {!item.inStock && (
                  <div className="flex items-center text-red-500 text-xs mt-0.5">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    <span>Out of stock</span>
                  </div>
                )}
              </div>
            </div>
            
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={`View on ${item.platform}`}
            >
              <span className="sr-only">View on {item.platform}</span>
            </a>
            
            <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <div className="flex items-center text-xs text-brand-blue">
                <span className="mr-1">Visit</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </div>
            
            {item.price < (lowestPrice * 1.05) && index > 0 && (
              <div className="absolute top-2 right-2 flex items-center text-xs text-green-600">
                <TrendingDown className="h-3 w-3 mr-0.5" />
                <span>Good deal</span>
              </div>
            )}
            
            {item.price > (lowestPrice * 1.2) && (
              <div className="absolute top-2 right-2 flex items-center text-xs text-amber-600">
                <TrendingUp className="h-3 w-3 mr-0.5" />
                <span>+{Math.round((item.price - lowestPrice) / lowestPrice * 100)}%</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <p className="text-xs text-gray-500 italic">
        * Prices may vary. Last updated {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PriceCompare;
