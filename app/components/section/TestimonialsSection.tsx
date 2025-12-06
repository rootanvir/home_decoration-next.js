'use client';

import TestimonialCard from "../card/TestimonialCard";

const testimonials = [
  {
    name: "Nicolo Svensky",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote:
      "Amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc.",
    source: "X-Twitter",
  },
  {
    name: "Centa Simpson",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote:
      "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui.",
    source: "X-Twitter",
  },
  {
    name: "Andy Dimasky",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Vestibulum orci felis.",
    source: "Facebook",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-orange-600 uppercase tracking-wider mb-1 sm:mb-2">
            What said about us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Testimonials and Clients
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              number={index + 1}
              name={t.name}
              avatarUrl={t.avatarUrl}
              quote={t.quote}
            />
          ))}
        </div>

        {/* Decorative Dots */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
          <div className="w-6 sm:w-8 h-1 sm:h-2 bg-orange-500 rounded-full" />
          <div className="w-2 h-2 sm:w-2 sm:h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 sm:w-2 sm:h-2 bg-gray-300 rounded-full" />
        </div>
      </div>
    </section>
  );
}
