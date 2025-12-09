"use client";

import React, { useRef, useEffect } from "react";

interface PartnerItem {
  title?: string;
  image?: string;
}

interface Props {
  items: PartnerItem[];
}

const TrustedPartners = ({ items }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const logos = items.filter((item) => item.title || item.image);

  // CHANGE SPEED HERE — lower = faster
  const SPEED = 1; // 0.5 = very fast, 1 = fast, 2 = medium, 3+ = slow

  useEffect(() => {
    if (!scrollRef.current || logos.length === 0) return;

    const scrollContainer = scrollRef.current;
    let animationId: number;

    const animate = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += SPEED;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [logos.length, SPEED]);

  // Duplicate logos twice for seamless infinite effect
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Title */}
          <div className="lg:w-1/4 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our Trusted<br /> Partners
            </h2>
            <div className="h-1 w-20 sm:w-24 bg-orange-500 mt-4 rounded-full" />
          </div>

          {/* Infinite Right-to-Left Marquee */}
          <div className="w-full lg:w-3/4">
            <div
              ref={scrollRef}
              className="flex gap-8 py-8 overflow-x-hidden"
              style={{ scrollBehavior: "auto" }} // ensures smooth pixel movement
            >
              {repeatedLogos.map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 
                    w-40 h-20 
                    sm:w-48 sm:h-24 
                    md:w-56 md:h-28
                    bg-white rounded-xl shadow-md border border-gray-100
                    flex items-center justify-center
                    transition-transform duration-300 hover:scale-105"
                >
                  {logo.image ? (
                    <img
                      src={logo.image}
                      alt={logo.title || "Partner logo"}
                      className="max-h-14 max-w-[80%] object-contain"
                    />
                  ) : (
                    <span className="text-lg font-semibold text-gray-700">
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