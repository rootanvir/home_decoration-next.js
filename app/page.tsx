// app/page.tsx
import React from 'react';
import Footer from './components/section/Footer';
import PropertyCard from './components/card/PropertyCard';
import './globals.css'
import TestimonialCard from './components/card/TestimonialCard';
import InterestingPlaceCard from './components/card/InterestingPlaceCard';
import { Headphones, Users, Smartphone } from 'lucide-react';
import WhyChooseSection from './components/section/WhyChooseSection';
import AppPromoSection from './components/section/AppPromoSection';
import AppLaunchSection from './components/section/AppPromoSection';
import CitiesShowcase from './components/section/CitiesShowcase';
import TrustedPartners from './components/section/TrustedPartners';
import HotPropertiesSection from './components/section/HotPropertiesSection';
import HowItWorksSection from './components/section/HowItWorksSection';
import TestimonialsSection from './components/section/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">

      {/* Main Content – Full Width */}
      <main className="flex-1 w-full px-0 py-16">

        <HotPropertiesSection />

        {/* Centered block if needed */}
        <div className="w-full flex flex-col gap-10"></div>

        <div className="mt-10 flex flex-col gap-10 w-full">

          <WhyChooseSection
            title="Why Choose Our Properties"
            subtitle="Check video presentation to find out more about us."
            imageUrl="https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            features={[
              {
                icon: <Headphones className="w-7 h-7 text-orange-500" />,
                title: "24 Hours Support",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                icon: <Users className="w-7 h-7 text-orange-500" />,
                title: "User Admin Panel",
                description: "Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Curabitur convallis fringilla diam sed aliquam."
              },
              {
                icon: <Smartphone className="w-7 h-7 text-orange-500" />,
                title: "Mobile Friendly",
                description: "Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa."
              }
            ]}
            testimonial={{
              quote: "Your website is fully responsive so visitors can view your content from their choice of device.",
              author: "Mark Antony",
              role: "Renstate CEO"
            }}
          />

          <AppLaunchSection />

          <CitiesShowcase
            cities={[
              {
                properties: 26,
                title: 'Explore NewYork',
                description: 'Constant care and attention to the patients makes good record',
              },
              {
                properties: 15,
                title: 'Awesome Rome',
                description: 'Constant care and attention to the patients makes good record',
              },
            ]}
          />

          <TrustedPartners
            items={[
              { title: "Netflix", image: "/logos/netflix.png" },
              { title: "Amazon" },
              { image: "/logos/google.png" },
              { title: "Spotify", image: "/logos/spotify.png" },
              { title: "Spotify", image: "/logos/spotify.png" },
            ]}
          />

        </div>

        <div className="w-full">
          <HowItWorksSection />
        </div>

        <div className="w-full">
          <TestimonialsSection />
        </div>

      </main>

      {/* Footer – Full Width */}
      <Footer
        contactInfo={{
          email: 'yourmail@domain.com',
          address: 'USA 27th Brooklyn NY',
          phone: '+2(111)23456789',
        }}
        helpfulLinks={[
          { label: 'Our Last News', href: '/news' },
          { label: 'Pricing Plans', href: '/pricing' },
          { label: 'Contacts', href: '/contact' },
          { label: 'Help Center', href: '/help' },
          { label: 'Privacy Policy', href: '/privacy' },
        ]}
        socialLinks={[
          { type: 'facebook', href: 'https://facebook.com' },
          { type: 'twitter', href: 'https://x.com' },
          { type: 'instagram', href: 'https://instagram.com' },
          { type: 'youtube', href: 'https://youtube.com' },
          { type: 'tiktok', href: 'https://tiktok.com' },
        ]}
        copyrightText="© RENSTATE 2025. ALL RIGHTS RESERVED."
      />

    </div>
  );
}
