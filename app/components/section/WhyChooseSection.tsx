'use client';

import { ReactNode } from 'react';

interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
}

interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

interface WhyChooseSectionProps {
    title: string;
    subtitle: string;
    features: Feature[];
    imageUrl: string;
    testimonial: Testimonial;
}

export default function WhyChooseSection({
    title,
    subtitle,
    features,
    imageUrl,
    testimonial,
}: WhyChooseSectionProps) {
    return (
        <section className="w-full py-16 px-6 bg-white rounded-3xl">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

                    {/* LEFT: Content */}
                    <div className="flex flex-col justify-between py-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                {title}
                            </h2>
                            <p className="text-lg text-gray-600 mb-12">{subtitle}</p>
                        </div>

                        <div className="space-y-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex gap-5 p-6 bg-gray-100 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Image — FULL HEIGHT */}
                    <div className="relative h-full min-h-[600px] lg:min-h-0">
                        {/* Full-height image */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden  ">
                            <img
                                src={imageUrl}
                                alt="Property"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Testimonial — Your perfect translate + white border + custom corners */}
                        <div className="absolute bottom-25 left-38 translate-y-1/2 translate-x-[-30%] lg:translate-x-[-55%] lg:translate-y-[32%] xl:translate-x-[-38%] xl:translate-y-[40%] ">

                            {/* White outer border (makes it float cleanly) */}
                            <div className="p-4  bg-white rounded-tr-4xl  ">

                                {/* Inner dark card — only top-right & bottom-left rounded */}
                                <div className="p-4 bg-white rounded-[40px] shadow-2xl">
                                    <div className="relative bg-black/95 rounded-[40px] rounded-tl-none rounded-br-none p-8 border border-white/20 overflow-hidden">
                                        <blockquote className="text-white text-lg italic leading-relaxed mb-6 pr-12">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <div className="pr-12">
                                            <p className="text-white font-bold text-lg">{testimonial.author}</p>
                                            <p className="text-orange-400 font-medium">{testimonial.role}</p>
                                        </div>

                                        {/* Beautiful closing quote — bottom-right */}
                                        <div className="absolute bottom-6 right-6 pointer-events-none">
                                            <span className="text-[140px] leading-none text-orange-500 font-Calibri drop-shadow-2xl ">
                                                ,,
                                            </span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}