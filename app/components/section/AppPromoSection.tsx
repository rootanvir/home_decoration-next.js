import React from 'react';
import { Apple, Play } from 'lucide-react'; // or use lucide if you prefer
import Image from 'next/image';

export default function AppPromoSection() {
  return (
    <section >
      <div  >
        <div className='bg-white p-15 sm:p-5'>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-orange-200 via-orange-300 to-orange-500 shadow-2xl">

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: 3D House Image */}

              <div className="relative">
                <Image
                  alt='house'
                  src={'/house-3d.png'}
                  width={800}
                  height={200}
                />

              </div>

              {/* Right: Orange Card with Text & Buttons */}
              <div className="p-10 md:p-16 lg:p-20 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our App Available Now
                </h2>
                <p className="text-white/90 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-12">
                  Browse thousands of exclusive properties, book viewings, and connect with agents — all from your phone.
                </p>



                {/* App Store Buttons - Exactly like your design */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
                  <a
                    href="#"
                    className="flex items-center gap-2 bg-black text-white p-2  rounded-full rounded-full text-lg font-medium hover:bg-gray-900 transition"
                  >

                    <div>
                      <div className="text-xs leading-none pl-3">ON APPLE STORE</div>
                    </div>
                    <div className='bg-orange-500 p-3 rounded-full'>
                      <Apple className="w-8 h-8 text-white" fill='currentColor' />

                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-4 bg-black text-white p-2  rounded-full text-lg font-medium hover:bg-gray-900 transition"
                  >

                    <div>
                      <div className="text-xs leading-none pl-4">ON GOOGLE PLAY</div>

                    </div>
                    <div className='bg-orange-500 p-3 rounded-full'>
                      <Play className="w-8 h-8  text-white" fill='currentColor' />

                    </div>
                  </a>
                </div>

              </div>
            </div>

            {/* Subtle map lines in background (optional - matches your screenshot) */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
                <path d="M200 100 Q400 50, 600 150 T800 300" stroke="white" strokeWidth="3" />
                <path d="M100 400 Q300 350, 500 480 T700 550" stroke="white" strokeWidth="3" />
                <path d="M350 200 Q450 280, 600 220" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}