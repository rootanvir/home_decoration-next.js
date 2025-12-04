import React from 'react';

interface City {
  properties: number;
  title: string;
  description: string;
}

interface CitiesShowcaseProps {
  cities: City[];
  map?: React.ReactNode;
}

const CitiesShowcase: React.FC<CitiesShowcaseProps> = ({
  cities,
  map = (
    <div className="w-full h-64 bg-gray-900/60 rounded-xl border-2 border-dashed border-gray-700/40 flex items-center justify-center text-gray-600 text-sm font-medium">
      Map will be here
    </div>
  ),
}) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row relative">
      {/* Left Sidebar – becomes top on mobile */}
      <div className="w-full lg:w-96 bg-[#111111] lg:rounded-r-3xl p-8 lg:p-10 flex flex-col lg:h-screen">
        {/* Centered Content */}
        <div className="flex-1 flex items-center justify-center lg:justify-start">
          <div className="text-left space-y-8 lg:space-y-10 max-w-xs">
            <div className="h-1 w-12 bg-orange-500 rounded-full" />
            <h1 className="text-4xl lg:text-4xl font-bold leading-tight">Explore Best Cities</h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="w-full bg-[#1a1a1a] hover:bg-[#222222] transition-all duration-300 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg">
              VIEW ALL CITIES →
            </button>
          </div>
        </div>

        {/* Map – always at bottom of sidebar */}
        <div className="pb-8 lg:pb-10 px-2 hidden lg:block">
          <div className="bg-[#0d0d0d]/70 backdrop-blur-md rounded-2xl p-6 border border-gray-800/40">
            {map}
          </div>
        </div>
      </div>

      {/* Main Area – City Cards */}
      <div className="flex-1 flex flex-col items-center justify-end pb-20 px-8 lg:px-20">
        {/* Mobile: Stack vertically | Desktop: Horizontal with gap */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {cities.map((city, index) => (
            <div key={index} className="text-center lg:text-center">
              <div className="inline-flex px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-semibold mb-8 shadow-lg text-sm lg:text-base">
                {city.properties} PROPERTIES
              </div>
              <h2 className="text-5xl lg:text-5xl font-bold mb-4 leading-tight">
                {city.title}
              </h2>
              <p className="text-gray-500 text-lg max-w-xs mx-auto leading-relaxed">
                {city.description}
              </p>
              <div className="h-px w-20 bg-orange-500 mx-auto mt-6" />
            </div>
          ))}
        </div>

        {/* Map on Mobile – shown below cities */}
        <div className="w-full max-w-md mt-12 lg:hidden">
          <div className="bg-[#0d0d0d]/70 backdrop-blur-md rounded-2xl p-6 border border-gray-800/40">
            {map}
          </div>
        </div>
      </div>

      {/* Pagination Dots – Responsive positioning */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-12 lg:translate-x-0 flex items-center gap-2">
        {cities.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${
              index === 1
                ? 'w-10 h-1.5 bg-orange-500'
                : 'w-1.5 h-1.5 bg-gray-700'
            } rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default CitiesShowcase;