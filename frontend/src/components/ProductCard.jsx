import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 group">
      {/* Product Image Section */}
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
        {/* Discount Badge */}
        {product.discount && (
           <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
             {product.discount}% OFF
           </span>
        )}
      </div>

      {/* Product Details Section */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 truncate">{product.name}</h3>
        
        {/* Ratings */}
        <div className="flex items-center mt-1 text-yellow-500">
           {[...Array(5)].map((_, i) => (
             <Star key={i} size={14} fill={i < product.rating ? "currentColor" : "none"} className={i < product.rating ? "text-yellow-400" : "text-gray-300"} />
           ))}
           <span className="text-gray-400 text-xs ml-1">({product.reviews})</span>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center mt-3">
          <div>
             <span className="text-xl font-bold text-gray-900">${product.price}</span>
             {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">${product.oldPrice}</span>
             )}
          </div>
          <button className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition">
             <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;