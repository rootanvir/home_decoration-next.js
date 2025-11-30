// app/page.tsx
import React from 'react';
import Footer from './components/section/Footer';
import './globals.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Welcome to Renstate</h1>
        <p className="text-gray-400 text-lg">Footer with inline map – clean & working!</p>
      </main>

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

        // Inline map – no variables, no errors
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