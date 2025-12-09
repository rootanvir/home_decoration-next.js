"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PartnerItem {
  title?: string;
  image?: string;
}

interface Props {
  items: PartnerItem[];
}

const TrustedPartnersStatic = ({ items }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Filter out invalid items
  const logos = items.filter((item) => item.title || item.image);

  const checkArrows = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => requestAnimationFrame(checkArrows);
    update();

    el.addEventListener("scroll", checkArrows);
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", checkArrows);
      window.removeEventListener("resize", update);
    };
  }, [checkArrows]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    // Responsive scroll amount
    const width = window.innerWidth;
    let scrollAmount = 280; // default (md+)

    if (width < 640) scrollAmount = 160;      // sm and below
    else if (width < 1024) scrollAmount = 220; // md

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
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

          {/* Carousel */}
          <div className="relative w-full overflow-hidden lg:w-3/4 bg-gray-200 rounded-lg">

            {/* Left Arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 
                  w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg shadow-md border border-gray-200
                  flex items-center justify-center hover:scale-105 transition-all"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </button>
            )}

            {/* Right Arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 
                  w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg shadow-md border border-gray-200
                  flex items-center justify-center hover:scale-105 transition-all"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </button>
            )}

            {/* Scrollable Logos */}
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto py-6 scroll-smooth
                scrollbar-hide
                [-ms-overflow-style:none] [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                w-full"
            >
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 
                    w-32 h-20           /* mobile */
                    sm:w-40 sm:h-24     /* sm */
                    md:w-48 md:h-28     /* md+ */
                    bg-white border border-gray-200 rounded-lg
                    flex items-center justify-center shadow-md hover:shadow-lg
                    transition-all duration-300"
                >
                  {logo.image ? (
                    <img
                      src={logo.image}
                      alt={logo.title || "Partner logo"}
                      className="max-h-12 max-w-[70%] sm:max-h-14 md:max-h-16 object-contain"
                    />
                  ) : (
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 px-4 text-center">
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

export default TrustedPartnersStatic;



