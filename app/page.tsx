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

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-16">


        {/* Single Card – Perfectly Centered */}
        <div className="max-w-xl mx-auto flex flex-col gap-10">
          <PropertyCard
            imageUrl="https://plus.unsplash.com/premium_photo-1706140675031-1e0548986ad1?q=80&w=1632&auto=format&fit=crop"
            title="Modern Apartment in Downtown"
            price={3200}
            address="123 Main St, New York, NY"
            beds={2}
            baths={2}
            sqft={1200}
            photosCount={18}
            authorName="Sarah Johnson"
            authorAvatar="https://i.pravatar.cc/150?img=5"
            isForSale={false}
          />
          <TestimonialCard
            number={1}
            name="Centa Simpson"
            avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            quote="Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan..."
            timestamp={Date.now()}
          />
          <InterestingPlaceCard
            number={3}
            title="Find Interesting Place"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget scelerisque metus. Vestibulum accumsan, elit."
            icon="building"
          />

          
          
        </div>
        <div className='mt-10 flex flex-col gap-10'>
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

          <CitiesShowcase />

          <TrustedPartners />
        </div>
      </main>

      {/* Footer – Sticks to bottom */}
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
        ].map(link => ({ ...link }))}

        socialLinks={[
          { type: 'facebook' as const, href: 'https://facebook.com' },
          { type: 'twitter' as const, href: 'https://x.com' },
          { type: 'instagram' as const, href: 'https://instagram.com' },
          { type: 'youtube' as const, href: 'https://youtube.com' },
          { type: 'tiktok' as const, href: 'https://tiktok.com' },
        ]}

        copyrightText="© RENSTATE 2025. ALL RIGHTS RESERVED."
      />
    </div>
  );
}