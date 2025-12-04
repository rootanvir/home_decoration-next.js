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
    /* PERFECT SQUARE + NO OVERFLOW */
    <div className="relative w-full aspect-square group">

      <div className="absolute inset-0 bg-black rounded-3xl p-5 lg:p-6 shadow-xl border border-gray-800/60 
                      transition-all duration-300 hover:border-orange-500/30 hover:shadow-orange-500/20
                      flex flex-col justify-between">

        {/* Top Row */}
        <div className="flex items-center justify-between">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl px-3 py-1.5 border border-gray-700/60">
            <span className="text-white font-black text-lg tracking-wider">
              {String(number).padStart(2, '0')}.
            </span>
          </div>
          <IconComponent className="w-11 h-11 text-orange-500" strokeWidth={1.8} />
        </div>

        {/* Title - clamped to 2 lines */}
        <h3 className="text-lg lg:text-xl font-bold text-white mt-4 line-clamp-2">
          {title}
        </h3>

        {/* Description - max 3 short lines, no overflow */}
        <div className="mt-3 space-y-1">
          {descLines.slice(0, 3).map((line, i) => (
            <p key={i} className="text-gray-400 text-xs lg:text-sm leading-tight line-clamp-1">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-8 left-8 w-48 h-48 bg-orange-500/20 rounded-full"></div>
      </div>
    </div>
  );
}