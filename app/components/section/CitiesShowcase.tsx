import React from 'react';

const CitiesShowcase: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex relative">
            {/* Left Sidebar */}

            <div className="w-96 bg-[#111111] rounded-r-3xl p-10 flex flex-col relative overflow-hidden h-screen">
                {/* Centered Content – Takes all available space except bottom map */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-left space-y-10 max-w-xs">
                        {/* Orange Line */}
                        <div className="h-1 w-12 bg-orange-500 rounded-full" />

                        {/* Title */}
                        <h1 className="text-4xl font-bold leading-tight">Explore Best Cities</h1>

                        {/* Description */}
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        {/* Button */}
                        <button className="w-full bg-[#1a1a1a] hover:bg-[#222222] transition-all duration-300 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg">
                            VIEW ALL CITIES →
                        </button>
                    </div>
                </div>

                {/* Map – Always at the Bottom */}
                <div className="pb-10 px-2">
                    <div className="bg-[#0d0d0d]/70 backdrop-blur-md rounded-2xl p-6 border border-gray-800/40">
                        <div className="w-full h-64 bg-gray-900/60 rounded-xl border-2 border-dashed border-gray-700/40 flex items-center justify-center text-gray-600 text-sm font-medium">
                            Map will be here
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Area - City Cards */}
            <div className="flex-1 flex items-end justify-center pb-20 px-20 gap-32 relative">
                {/* New York Card */}
                <div className="text-center">
                    <div className="inline-flex px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-semibold mb-8 shadow-lg">
                        26 PROPERTIES
                    </div>
                    <h2 className="text-5xl font-bold mb-4">Explore NewYork</h2>
                    <p className="text-gray-500 text-lg max-w-xs mx-auto leading-relaxed">
                        Constant care and attention to the patients makes good record
                    </p>
                    <div className="h-px w-20 bg-orange-500 mx-auto mt-6" />
                </div>

                {/* Rome Card */}
                <div className="text-center">
                    <div className="inline-flex px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-semibold mb-8 shadow-lg">
                        15 PROPERTIES
                    </div>
                    <h2 className="text-5xl font-bold mb-4">Awesome Rome</h2>
                    <p className="text-gray-500 text-lg max-w-xs mx-auto leading-relaxed">
                        Constant care and attention to the patients makes good record
                    </p>
                    <div className="h-px w-20 bg-orange-500 mx-auto mt-6" />
                </div>
            </div>


            {/* Bottom-Right Mobile Page Indicator */}
            <div className="absolute bottom-8 right-12 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
                <div className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
                <div className="w-10 h-1.5 bg-orange-500 rounded-full" />
                <div className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
            </div>
        </div>
    );
};

export default CitiesShowcase;