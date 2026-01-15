import React, { useState } from 'react';
import { ShoppingCart, User, Bell, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-bold text-2xl tracking-wide">NEXAMART</span>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 mx-8 relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="absolute right-0 top-0 mt-2 mr-3 text-gray-500">
              <Search size={20} />
            </button>
          </div>

          {/* Right Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative cursor-pointer hover:text-blue-200 transition">
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </div>

            <div className="relative cursor-pointer hover:text-blue-200 transition">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">5</span>
            </div>

            <div className="flex items-center cursor-pointer hover:text-blue-200 transition space-x-2">
              <User size={24} />
              <span className="text-sm font-medium">Login</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 pb-4 px-4">
            <div className="flex items-center bg-white rounded-lg mt-2 px-3 py-2">
                 <input 
                    type="text" 
                    placeholder="Search..." 
                    className="flex-1 bg-transparent outline-none text-gray-800"
                 />
                 <Search size={20} className="text-gray-500"/>
            </div>
            <div className="flex flex-col space-y-3 mt-4">
                <a href="#" className="flex items-center space-x-2 hover:bg-blue-600 p-2 rounded">
                    <Bell size={20} /> <span>Notifications</span>
                </a>
                <a href="#" className="flex items-center space-x-2 hover:bg-blue-600 p-2 rounded">
                    <ShoppingCart size={20} /> <span>My Cart</span>
                </a>
                <a href="#" className="flex items-center space-x-2 hover:bg-blue-600 p-2 rounded">
                    <User size={20} /> <span>Profile</span>
                </a>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;