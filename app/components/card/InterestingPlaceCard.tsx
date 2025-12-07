'use client';

import { Home, Building2, MessageCircle, PlusCircle } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  building: Building2,
  'message-circle': MessageCircle,
  'plus-circle': PlusCircle,
};

interface InterestingPlaceCardProps {
  number: string | number;
  title: string;
  description: string | string[];
  icon?: string;
}

export default function InterestingPlaceCard({
  number = "01",
  title = "Find Interesting Place",
  description = "Short description here.",
  icon = "home"
}: InterestingPlaceCardProps) {

  const descLines = Array.isArray(description)
    ? description
    : description.split('\n').map(l => l.trim()).filter(Boolean);

  const IconComponent = iconMap[icon] || Home;

  return (
    <div className="relative w-full max-w-[340px] group">
      {/* Main Card */}
      <div className="bg-black rounded-2xl p-5 shadow-xl border border-gray-800/60 
                      transition-all duration-300 hover:border-orange-500/40 hover:shadow-orange-500/10
                      hover:-translate-y-1 flex flex-col min-h-[320px]">

        {/* Top Row */}
        <div className="flex items-center justify-between">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-gray-700/60">
            <span className="text-white font-black text-lg tracking-wider">
              {String(number).padStart(2, '0')}.
            </span>
          </div>
          <IconComponent className="w-10 h-10 text-orange-500/90" strokeWidth={1.8} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mt-6 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <div className="mt-4 space-y-2.5 flex-grow">
          {descLines.slice(0, 3).map((line, i) => (
            <p 
              key={i} 
              className="text-gray-400 text-sm leading-relaxed line-clamp-2"
            >
              {line}
            </p>
          ))}
        </div>

        {/* Subtle hover indicator */}
        <div className="mt-6 pt-4 border-t border-gray-800/60 group-hover:border-orange-500/30 transition-colors">
          <div className="flex items-center text-sm text-gray-500 group-hover:text-orange-500/70 transition-colors">
            <span className="mr-2">Learn more</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover glow effect - more subtle */}
      <div className="absolute inset-0 -z-10 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500">
        <div className="absolute top-1/4 -left-4 w-56 h-48 bg-orange-500/10 rounded-full"></div>
      </div>
    </div>
  );
}