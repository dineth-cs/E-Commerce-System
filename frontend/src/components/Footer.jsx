import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Truck, RefreshCw, ShieldCheck, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 mt-16">
      
      {/* 1. Features Section (Top Bar) */}
      <div className="container mx-auto px-4 mb-10">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-b border-gray-700 pb-10">
            <div className="flex flex-col items-center">
               <div className="bg-gray-800 p-3 rounded-full mb-3 text-blue-400">
                  <Truck size={30} />
               </div>
               <h4 className="font-bold text-lg">Free Shipping</h4>
               <p className="text-gray-400 text-sm">On all orders over $200</p>
            </div>
            <div className="flex flex-col items-center">
               <div className="bg-gray-800 p-3 rounded-full mb-3 text-blue-400">
                  <RefreshCw size={30} />
               </div>
               <h4 className="font-bold text-lg">30 Days Returns</h4>
               <p className="text-gray-400 text-sm">Moneyback guarantee</p>
            </div>
            <div className="flex flex-col items-center">
               <div className="bg-gray-800 p-3 rounded-full mb-3 text-blue-400">
                  <ShieldCheck size={30} />
               </div>
               <h4 className="font-bold text-lg">Secure Payment</h4>
               <p className="text-gray-400 text-sm">100% protected payments</p>
            </div>
         </div>
      </div>

      {/* 2. Main Footer Links */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        
        {/* Column 1: Contact Info */}
        <div>
           <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Us</h3>
           <p className="text-gray-400 mb-4 text-sm leading-relaxed">
             NEXAMART - Mega Super Store <br/>
             510-Union Trade Center, Colombo-07
           </p>
           <div className="space-y-3">
             <div className="flex items-center text-gray-300">
                <MapPin size={18} className="mr-2 text-blue-400"/> <span>Colombo, Sri Lanka</span>
             </div>
             <div className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2 text-blue-400"/> <span>sales@nexamart.com</span>
             </div>
             <div className="flex items-center text-gray-300">
                <Phone size={18} className="mr-2 text-blue-400"/> <span>(+94) 790-234-674</span>
             </div>
           </div>
           
           {/* Social Icons */}
           <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-400 transition"><Facebook size={24}/></a>
              <a href="#" className="hover:text-blue-400 transition"><Twitter size={24}/></a>
              <a href="#" className="hover:text-blue-400 transition"><Instagram size={24}/></a>
           </div>
        </div>

        {/* Column 2: Products Links */}
        <div>
           <h3 className="text-xl font-bold mb-4 text-white">Products</h3>
           <ul className="space-y-2 text-gray-400 text-sm">
             <li><a href="#" className="hover:text-blue-400 transition">Price Drop</a></li>
             <li><a href="#" className="hover:text-blue-400 transition">New Products</a></li>
             <li><a href="#" className="hover:text-blue-400 transition">Best Sales</a></li>
             <li><a href="#" className="hover:text-blue-400 transition">Contact Us</a></li>
             <li><a href="#" className="hover:text-blue-400 transition">Sitemap</a></li>
           </ul>
        </div>

        {/* Column 3: Our Company */}
        <div>
           <h3 className="text-xl font-bold mb-4 text-white">Our Company</h3>
           <ul className="space-y-2 text-gray-400 text-sm">
             <li><a href="#" className="hover:text-blue-400 transition">Delivery</a></li>
             <li><a href="#" className="hover:text-blue-400 transition">Legal Notice</a></li>
             <li><a href="#" className="hover:text-blue-400 transition">Terms and Conditions</a></li>
             <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
             <li><a href="#" className="hover:text-blue-400 transition">Secure Payment</a></li>
           </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
           <h3 className="text-xl font-bold mb-4 text-white">Subscribe to Newsletter</h3>
           <p className="text-gray-400 text-sm mb-4">
             Subscribe to our latest newsletter to get news about special discounts.
           </p>
           <form className="flex flex-col space-y-2">
             <input 
               type="email" 
               placeholder="Your Email Address" 
               className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center font-bold">
               SUBSCRIBE <Send size={16} className="ml-2"/>
             </button>
           </form>
           <div className="mt-4 flex items-start">
             <input type="checkbox" className="mt-1 mr-2" />
             <span className="text-xs text-gray-500">I agree to the terms and conditions and the privacy policy</span>
           </div>
        </div>

      </div>

      {/* 3. Bottom Bar (Copyright) */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
           <p>© 2026 - Ecommerce NEXAMART Template</p>
           <div className="flex space-x-2 mt-2 md:mt-0">
             {/* Payment Icons (Using text for now, images can be added later) */}
             <span className="bg-white px-2 py-1 rounded text-gray-800 font-bold text-xs">VISA</span>
             <span className="bg-white px-2 py-1 rounded text-gray-800 font-bold text-xs">MasterCard</span>
             <span className="bg-white px-2 py-1 rounded text-gray-800 font-bold text-xs">PayPal</span>
           </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;