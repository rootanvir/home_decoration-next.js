"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PartnerItem {
  title?: string;
  image?: string;
}

interface Props {
  items: PartnerItem[];
}

const TrustedPartners = ({ items }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const logos = items.filter((item) => item.title || item.image);

  // CHANGE SPEED HERE — ONLY THIS NUMBER!
  const SPEED = 15; // 8 = very fast, 15 = fast, 30 = medium, 50 = slow

  // Continuous marquee animation
  const animate = () => {
    if (!scrollRef.current || isHovered) return;

    scrollRef.current.scrollLeft += 1;

    // Seamless loop: when half the content is scrolled, reset to start
    if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
      scrollRef.current.scrollLeft = 0;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!isHovered) {
      animationRef.current = requestAnimationFrame(animate);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered, logos.length]);

  // Manual scroll (left/right buttons)
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = window.innerWidth < 640 ? 180 : window.innerWidth < 1024 ? 240 : 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">

          {/* Title */}
          <div className="lg:w-1/4 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our Trusted<br /> Partners
            </h2>
            <div className="h-1 w-20 sm:w-24 bg-orange-500 mt-4 rounded-full" />
          </div>

          {/* Marquee Carousel */}
          <div
            className="relative w-full lg:w-3/4 overflow-hidden bg-gray-200 rounded-lg group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left Arrow - appears on hover */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
                w-12 h-12 bg-white rounded-lg shadow-xl border border-gray-200
                flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-all duration-300
                hover:scale-110 hover:bg-orange-50"
            >
              <ChevronLeft className="w-6 h-6 text-orange-600" />
            </button>

            {/* Right Arrow - appears on hover */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
                w-12 h-12 bg-white rounded-lg shadow-xl border border-gray-200
                flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-all duration-300
                hover:scale-110 hover:bg-orange-50"
            >
              <ChevronRight className="w-6 h-6 text-orange-600" />
            </button>

            {/* Infinite scrolling logos */}
            <div
              ref={scrollRef}
              className="flex gap-6 md:gap-8 py-8 overflow-x-hidden select-none"
            >
              {/* Tripled for perfect seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 
                    w-36 h-20 
                    sm:w-44 sm:h-24 
                    md:w-52 md:h-28
                    bg-white rounded-xl shadow-lg border border-gray-100
                    flex items-center justify-center
                    hover:scale-105 transition-transform duration-300"
                >
                  {logo.image ? (
                    <img
                      src={logo.image}
                      alt={logo.title || "Partner"}
                      className="max-h-14 max-w-[75%] object-contain"
                    />
                  ) : (
                    <span className="text-lg font-bold text-gray-700">
                      {logo.title}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;