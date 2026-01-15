import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard'; // අලුතින් හදපු Card එක import කළා
import { Smartphone, Shirt, Dumbbell, Home as HomeIcon, BookOpen } from 'lucide-react';

const categories = [
  { name: 'Electronics', count: '250 products', icon: <Smartphone size={40} className="text-blue-600"/> },
  { name: 'Fashion', count: '180 products', icon: <Shirt size={40} className="text-pink-500"/> },
  { name: 'Sports', count: '120 products', icon: <Dumbbell size={40} className="text-orange-500"/> },
  { name: 'Home', count: '95 products', icon: <HomeIcon size={40} className="text-green-500"/> },
  { name: 'Books', count: '85 products', icon: <BookOpen size={40} className="text-purple-500"/> },
];

// Dummy Products Data (PDF එකේ විදියට)
const featuredProducts = [
  { id: 1, name: "Premium Wireless Headphones", price: 199.99, rating: 5, reviews: 128, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", discount: 10 },
  { id: 2, name: "Smart Watch Pro Series", price: 299.99, oldPrice: 350.00, rating: 4, reviews: 256, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
  { id: 3, name: "Coffee Maker Deluxe", price: 89.99, rating: 4, reviews: 156, image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&q=80" },
  { id: 4, name: "Running Shoes Elite", price: 129.99, rating: 5, reviews: 342, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", discount: 15 },
  { id: 5, name: "Designer Leather Bag", price: 149.99, rating: 4, reviews: 88, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80" },
  { id: 6, name: "Modern Desk Lamp", price: 59.99, rating: 3, reviews: 67, image: "https://images.unsplash.com/photo-1507473888900-52e1adad54cd?w=500&q=80" },
  { id: 7, name: "Yoga Mat Premium", price: 49.99, rating: 5, reviews: 203, image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&q=80" },
  { id: 8, name: "Portable Speaker", price: 79.99, rating: 4, reviews: 112, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80" },
];

const Home = () => {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
                <p className="text-gray-500 mt-2">Browse our wide selection of products</p>
            </div>
            <a href="#" className="text-blue-600 font-semibold hover:underline">View All</a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer border border-gray-100 flex flex-col items-center text-center group">
              <div className="bg-gray-50 p-4 rounded-full mb-4 group-hover:scale-110 transition duration-300">
                {cat.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-800">{cat.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Featured Products Section (NEW) */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
                <p className="text-gray-500 mt-2">Check out our most popular items</p>
            </div>
            <a href="#" className="text-blue-600 font-semibold hover:underline">View All</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
           {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
           ))}
        </div>
      </div>

    </div>
  );
};

export default Home;