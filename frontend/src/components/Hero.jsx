import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-2">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 space-y-6">
            <span className="text-red-500 font-bold uppercase tracking-wider text-sm">
              Free Shipping
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Free Delivery Now <br />
              On Your First Order
            </h1>
            <p className="text-gray-600 text-lg">
              Don't miss out on our special offers. Valid for orders over $200.
            </p>
            
            {/* Countdown Timer (Dummy Static Time based on PDF) */}
            <div className="flex space-x-4 my-6">
               <div className="bg-white p-3 rounded-lg shadow-sm text-center min-w-[70px]">
                  <span className="block text-2xl font-bold text-gray-800">03</span>
                  <span className="text-xs text-gray-500">Hours</span>
               </div>
               <div className="bg-white p-3 rounded-lg shadow-sm text-center min-w-[70px]">
                  <span className="block text-2xl font-bold text-gray-800">43</span>
                  <span className="text-xs text-gray-500">Mins</span>
               </div>
               <div className="bg-white p-3 rounded-lg shadow-sm text-center min-w-[70px]">
                  <span className="block text-2xl font-bold text-gray-800">05</span>
                  <span className="text-xs text-gray-500">Secs</span>
               </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center transition duration-300 shadow-lg">
              Shop Now <ArrowRight className="ml-2" size={20} />
            </button>
          </div>

          {/* Right Side: Hero Image Placeholder */}
          <div className="md:w-1/2 flex justify-center">
            {/* අපි දැනට Placeholder Image එකක් දාමු. පස්සේ ඔයාගේ Images දාගන්න පුළුවන් */}
            <img 
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Shopping Hero" 
              className="rounded-2xl shadow-2xl object-cover h-[400px] w-full max-w-md"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;