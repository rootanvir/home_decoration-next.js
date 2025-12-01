'use client';

import { Home, Building2 } from 'lucide-react';

interface InterestingPlaceCardProps {
  number: string | number;        // e.g. "01", "02", 1, 2...
  title: string;
  description: string | string[]; // Accept string or array of lines
  icon?: 'home' | 'building' | 'both'; // Optional icon control
}

export default function InterestingPlaceCard({
  number = "01",
  title = "Find Interesting Place",
  description = "Proin dapibus nisl ornare diam varius tempus.\nAenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.",
  icon = 'both'
}: InterestingPlaceCardProps) {

  // Convert description to array of lines
  const descLines = Array.isArray(description) 
    ? description 
    : description.split('\n').map(line => line.trim()).filter(Boolean);

  return (
    <div className="relative w-full max-w-md mx-auto group">
      {/* Main Card */}
      <div className="bg-black rounded-3xl p-8 shadow-2xl border border-gray-800/60 transition-all duration-300 hover:border-orange-500/30 hover:shadow-orange-500/10">
        
        {/* Top Row: Number + Icon */}
        <div className="flex items-center justify-between mb-10">
          {/* Dynamic Number Badge */}
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl px-3 py-2 border border-gray-700/60 shadow-inner">
            <span className="text-white font-black text-xl tracking-wider">
              {String(number).padStart(2, '0')}.
            </span>
          </div>

          {/* Dynamic Icon */}
          <div className="relative w-14 h-14">
            {icon === 'home' || icon === 'both' ? (
              <Home className="w-14 h-14 text-orange-500 absolute top-0 left-0 opacity-80" />
            ) : null}
            {icon === 'building' || icon === 'both' ? (
              <Building2 className="w-12 h-12 text-orange-500 absolute top-2 right-0 drop-shadow-lg" />
            ) : null}
          </div>
        </div>

        {/* Dynamic Title */}
        <h2 className="text-2xl font-bold text-white mb-5 leading-tight">
          {title}
        </h2>

        {/* Dynamic Description */}
        <div className="space-y-2">
          {descLines.map((line, i) => (
            <p key={i} className="text-gray-400 text-base leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Subtle orange glow on hover */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/20 rounded-full"></div>
      </div>
    </div>
  );
}