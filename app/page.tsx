// app/page.tsx
import React from 'react';
import Footer from './components/section/Footer';
import PropertyCard from './components/card/PropertyCard';
import './globals.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-16">


        {/* Single Card – Perfectly Centered */}
        <div className="max-w-xl mx-auto">
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
          { type: 'twitter' as const,   href: 'https://x.com' },
          { type: 'instagram' as const, href: 'https://instagram.com' },
          { type: 'youtube' as const,   href: 'https://youtube.com' },
          { type: 'tiktok' as const,    href: 'https://tiktok.com' },
        ]}

        copyrightText="© RENSTATE 2025. ALL RIGHTS RESERVED."
      />
    </div>
  );
}