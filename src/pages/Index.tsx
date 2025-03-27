
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from 'lucide-react';

// Mock data for demonstration
const mockProducts = [
  {
    id: "1",
    name: "Apple iPhone 15 Pro Max - 256GB - Natural Titanium",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708",
    category: "Smartphones",
    rating: 4.8,
    reviewCount: 1248,
    lowestPrice: 1199.99,
    lowestPricePlatform: "Amazon",
    priceData: [
      {
        platform: "Amazon",
        price: 1199.99,
        originalPrice: 1299.99,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
        link: "https://amazon.com",
        delivery: "Free delivery by tomorrow",
        inStock: true
      },
      {
        platform: "Apple",
        price: 1299.00,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
        link: "https://apple.com",
        delivery: "Free delivery in 2-3 days",
        inStock: true
      },
      {
        platform: "Best Buy",
        price: 1249.99,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1280px-Best_Buy_Logo.svg.png",
        link: "https://bestbuy.com",
        delivery: "Free in-store pickup",
        inStock: true
      },
      {
        platform: "Walmart",
        price: 1229.99,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1920px-Walmart_logo.svg.png",
        link: "https://walmart.com",
        delivery: "Delivery in 3-5 days",
        inStock: true
      }
    ]
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra - 512GB - Titanium Black",
    image: "https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-ultra-s928-sm-s928bzkcmea-539652096",
    category: "Smartphones",
    rating: 4.7,
    reviewCount: 958,
    lowestPrice: 1199.99,
    lowestPricePlatform: "Samsung",
    priceData: [
      {
        platform: "Samsung",
        price: 1199.99,
        originalPrice: 1349.99,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
        link: "https://samsung.com",
        delivery: "Free express delivery",
        inStock: true
      },
      {
        platform: "Amazon",
        price: 1249.99,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
        link: "https://amazon.com",
        delivery: "Free delivery by tomorrow",
        inStock: true
      },
      {
        platform: "Best Buy",
        price: 1249.99,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1280px-Best_Buy_Logo.svg.png",
        link: "https://bestbuy.com",
        delivery: "Free shipping",
        inStock: true
      },
      {
        platform: "Walmart",
        price: 1269.99,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1920px-Walmart_logo.svg.png",
        link: "https://walmart.com",
        delivery: "Delivery in 3-5 days",
        inStock: false
      }
    ]
  },
  {
    id: "3",
    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones - Black",
    image: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_UF1000,1000_QL80_.jpg",
    category: "Headphones",
    rating: 4.6,
    reviewCount: 3542,
    lowestPrice: 329.99,
    lowestPricePlatform: "Best Buy",
    priceData: [
      {
        platform: "Best Buy",
        price: 329.99,
        originalPrice: 399.99,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1280px-Best_Buy_Logo.svg.png",
        link: "https://bestbuy.com",
        delivery: "Free shipping",
        inStock: true
      },
      {
        platform: "Amazon",
        price: 348.00,
        originalPrice: 399.99,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
        link: "https://amazon.com",
        delivery: "Free delivery in 2 days",
        inStock: true
      },
      {
        platform: "Sony",
        price: 399.99,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/2560px-Sony_logo.svg.png",
        link: "https://sony.com",
        delivery: "Free standard shipping",
        inStock: true
      },
      {
        platform: "Walmart",
        price: 349.00,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1920px-Walmart_logo.svg.png",
        link: "https://walmart.com",
        delivery: "Free shipping",
        inStock: true
      }
    ]
  }
];

const mockCategories = [
  "All Products", "Smartphones", "Laptops", "Headphones", "Cameras", "Gaming", "Home Appliances"
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter products by category and search term
  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = activeCategory === "All Products" || product.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col space-y-3 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Trending Products</h2>
              <p className="text-gray-600">Popular items with the best deals right now</p>
            </div>
            
            <div className="mt-10">
              <Tabs defaultValue="All Products" className="w-full">
                <div className="overflow-x-auto pb-2">
                  <TabsList className="mb-8 flex justify-start p-1 overflow-x-auto">
                    {mockCategories.map(category => (
                      <TabsTrigger 
                        key={category} 
                        value={category}
                        onClick={() => setActiveCategory(category)}
                        className="text-sm px-4 py-2"
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                <TabsContent value={activeCategory} className="space-y-6 mt-6">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                      <ProductCard key={product.id} {...product} />
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500">No products found in this category</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="/categories" 
                className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 transition-colors"
              >
                <span>View all categories</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">How It Works</h2>
              <p className="text-gray-600">Our AI-powered price comparison engine helps you find the best deals</p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-brand-lightBlue rounded-full flex items-center justify-center">
                  <span className="text-brand-blue text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold">Search for Products</h3>
                <p className="text-gray-600">Enter the product you're looking for in our search bar</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-brand-lightBlue rounded-full flex items-center justify-center">
                  <span className="text-brand-blue text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold">Compare Prices</h3>
                <p className="text-gray-600">See prices from multiple retailers side by side</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-brand-lightBlue rounded-full flex items-center justify-center">
                  <span className="text-brand-blue text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold">Buy with Confidence</h3>
                <p className="text-gray-600">Purchase directly from your preferred retailer</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden glass-effect">
              <div className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Save Time and Money on Every Purchase</h2>
                <p className="text-gray-600">
                  Join thousands of smart shoppers using PriceHarmony to find the best deals online.
                </p>
                <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-brand-blue px-6 py-3 text-white button-hover-effect">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
