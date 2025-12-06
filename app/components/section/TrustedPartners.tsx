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

const TrustedPartners = ({ items }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Filter out invalid items (must have image OR title)
  const logos = items.filter(item => item.title || item.image);

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
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -250 : 250,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

          {/* Title */}
          <div className="lg:w-1/4 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Our Trusted<br /> Partners
            </h2>
            <div className="h-1 w-24 bg-orange-500 mt-4 rounded-full" />
          </div>

          {/* Carousel */}
          <div className="relative w-full overflow-hidden lg:w-3/4 bg-gray-200 rounded-lg">

            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
                  w-12 h-12 bg-white rounded-lg shadow-md border border-gray-200
                  flex items-center justify-center hover:scale-105 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-orange-500" />
              </button>
            )}

            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
                  w-12 h-12 bg-white rounded-lg shadow-md border border-gray-200
                  flex items-center justify-center hover:scale-105 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-orange-500" />
              </button>
            )}

            {/* Scroll Area */}
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto py-6 scroll-smooth
                scrollbar-hide
                [-ms-overflow-style:none] [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                w-full"
            >
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-48 h-24 
                    bg-white border border-gray-200 rounded-lg
                    flex items-center justify-center shadow-md hover:shadow-lg
                    transition-all duration-300 text-lg font-semibold text-gray-700"
                >
                  {logo.image ? (
                    <img
                      src={logo.image}
                      alt={logo.title || "logo"}
                      className="max-h-16 max-w-[70%] object-contain"
                    />
                  ) : (
                    <span>{logo.title}</span>
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
