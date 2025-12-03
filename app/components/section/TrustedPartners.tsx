import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TrustedPartners = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Title - Left Title */}
          <div className="flex-shrink-0 text-center lg:text-left translate-x-[-25px]">
            <h2 className="text-2xl  font-bold text-gray-900">Our Trusted</h2>
            <h2 className="text-2xl   font-bold text-gray-900 ">Partners</h2>
            <div className="h-0.5 w-20 bg-orange-500 mt-4 mx-auto lg:mx-0 rounded-full"></div>
          </div>

          {/* Carousel Area */}
          <div className="flex-1 w-full relative">

            {/* Left Arrow - Responsive & Safe */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
              w-10 h-10 md:w-12 md:h-12 
              bg-white rounded-full shadow-xl rounded-full 
              flex items-center justify-center 
              hover:shadow-2xl transition-shadow
              -translate-x-4 md:-translate-x-16">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
            </button>

            {/* Right Arrow - Responsive & Safe */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
              w-10 h-10 md:w-12 md:h-12 
              bg-white rounded-full shadow-xl 
              flex items-center justify-center 
              hover:shadow-2xl transition-shadow
              translate-x-4 md:translate-x-16">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
            </button>

            {/* Long Card Container */}
            <div className="bg-white rounded-3xl shadow-lg py-8 md:py-10 px-8 md:px-20 overflow-hidden">
              <div className="flex items-center justify-center gap-10 md:gap-20 flex-wrap md:flex-nowrap">
                {/* Logos - Responsive */}
                {[
                  "Logo 1", "jQuery", "envato", "N"
                ].map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-32 h-16 md:w-36 md:h-20 
                      bg-gray-100 border border-gray-200 rounded-2xl 
                      flex items-center justify-center 
                      hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-600 font-semibold text-lg md:text-xl">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedPartners;