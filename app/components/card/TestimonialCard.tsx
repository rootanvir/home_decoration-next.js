'use client'; // Remove if not using Next.js App Router

import { useEffect, useState } from 'react';

interface TestimonialCardProps {
  number:number;
  avatarUrl?: string;
  name: string;
  username?: string;
  quote: string;
  timestamp?: string | number | Date;
  verified?: boolean;
}

export default function TestimonialCard({
  avatarUrl,
  name,
  quote,
  number,
}: TestimonialCardProps) {
  // Simple "time ago" without any library
  const [timeAgo, setTimeAgo] = useState('');



  // Simple X (Twitter) icon as SVG
  const XIcon = ({ size = 20 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-orange-500"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  // Verified badge SVG
  const VerifiedBadge = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2">
      <path d="M22.5 12.5c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10c.425 0 .846-.027 1.26-.08.219 1.734 1.577 3.08 3.24 3.08 1.795 0 3.25-1.455 3.25-3.25 0-1.663-1.346-3.02-3.08-3.24-.053-.414-.08-.835-.08-1.26Z" />
      <path d="M10.243 16.243l7.07-7.07-1.414-1.414-5.656 5.657-3.536-3.536-1.414 1.414 4.95 4.95Z" fill="white" />
    </svg>
  );

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        {/* Header */}
        <div className="relative mb-8">
          {/* Avatar + Name */}
          <div className="flex items-center gap-4">
            <img
              src={avatarUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
              alt={name}
              className="w-14 h-14 rounded-full object-cover shadow-xl ring-4 ring-white"
            />
            <span className="text-xl font-bold text-gray-900">{name}</span>
          </div>

          {/* Top-Right Toggle Dots — Floating outside the card (exactly like your image) */}
<div className="absolute -top-5 -right-5 z-50">
  <div className="flex items-center   px-3 py-2  gap-4">
    <div className="w-4 h-2 bg-gray-300 rounded-2xl"></div>
    <div className="w-7 h-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl -ml-4 shadow-xl border-4 border-white"></div>
  </div>
</div>
        </div>



        <hr />

        {/* Quote */}
        <blockquote className="relative my-6 text-lg text-gray-800 leading-relaxed">
          <span className="absolute -left-2 -top-4 text-8xl text-gray-200 select-none">“</span>
          <p className="relative pl-10 pr-12">{quote}</p>
          <span className="absolute -right-8 -bottom-8 text-8xl text-gray-200 select-none rotate-180">“</span>
        </blockquote>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between w-full text-sm font-medium">
            <span className="font-bold text-black text-sm border border-gray-300 px-6 py-2.5 rounded-xl 
                  bg-white 
                  shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
                  hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] 
                  transition-shadow duration-200">
              Via X-Twitter
            </span>
            {/* Stretched dotted line */}
            <span className="mx-4  border border-gray-100 flex-1" />

            <span className="text-orange-500 font-bold text-base bg-black rounded-lg py-2 px-3">{number}</span>
          </div>
        </div>

      </div>
    </div>
  );
}