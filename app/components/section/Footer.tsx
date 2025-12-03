// components/section/Footer.tsx
'use client';

import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, ArrowUp, Apple, PlayCircle,
  Facebook, Twitter, Instagram, Youtube
} from 'lucide-react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.16 4.16c-1.32-1.32-3.19-2.16-5.24-2.16v3.64c1.08 0 2.08.36 2.88.96.8.6 1.44 1.44 1.8 2.4h3.6c-.24-2.08-1.44-3.84-3.04-5.04zM12.92 8.8c2.16 0 4.08 1.32 4.92 3.36h-3.36c-.48-1.08-1.56-1.8-2.76-1.8-1.68 0-3.04 1.36-3.04 3.04 0 1.68 1.36 3.04 3.04 3.04.96 0 1.8-.48 2.4-1.2v-4.8c1.08.72 2.4 1.2 3.84 1.2v-3.6c-1.68-.24-3.12-1.2-4.08-2.52-.72-1.08-1.08-2.4-1.08-3.84h-3.6v13.2c0 1.68-1.32 3-3 3s-3-1.32-3-3 1.32-3 3-3c.36 0 .72.12 1.08.24v3.6c-.36-.12-.72-.24-1.08-.24-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5v-6.72c1.32.96 2.88 1.56 4.56 1.56v-3.6c-.72 0-1.44-.24-2.08-.6-.96-.48-1.68-1.32-2.04-2.28-.24-.6-.36-1.2-.36-1.92z" />
  </svg>
);

type SocialLink = {
  type: 'facebook' | 'twitter' | 'instagram' | 'youtube' | 'tiktok';
  href: string;
};

type Props = {
  contactInfo: { email: string; address: string; phone: string };
  helpfulLinks: readonly { label: string; href: string }[];
  socialLinks: readonly SocialLink[];
  copyrightText?: string;
};

export default function Footer({
  contactInfo,
  helpfulLinks,
  socialLinks,
  copyrightText = "RENSTATE 2025. ALL RIGHTS RESERVED."
}: Props) {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setMsg("Thank you!");
      setEmail('');
      setTimeout(() => setMsg(''), 3000);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const iconMap = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    tiktok: TikTokIcon,
  } satisfies Record<SocialLink['type'], React.FC<any>>;

  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-8xl mx-auto px-6 py-16 ml-10 mr-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Get Our Application */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold uppercase tracking-wider">
              Get Our Application
            </h3>
            <hr className='text-orange-300 w-15 mt-5 mb-10'/>
            <p className="text-sm">Discover the best real estate opportunities with our mobile app.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#" className="flex items-center bg-black border border-gray-600 hover:bg-gray-700 px-5 py-3 rounded-full transition">

                <span className="text-white text-sm font-medium">On Apple Store</span>
                <Apple className="w-5 h-5 ml-2  text-orange-500" />
              </a>
              <a href="#" className="flex items-center border border-gray-600 bg-black hover:bg-gray-700 px-5 py-3 rounded-full transition  ">
                <span className="text-white text-sm font-medium">On Google Play</span>
                <PlayCircle className="w-5 h-5 ml-2 text-orange-500" />
              </a>
            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold uppercase tracking-wider mb-6">Helpful Links</h3>
            <hr className='text-orange-300 w-15 mt-5 mb-10'/>
            <ul className="space-y-3">
              {helpfulLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-orange-500 flex items-center group">
                    <span className="text-orange-500 mr-2 group-hover:translate-x-1 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="orange" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white text-lg font-semibold uppercase tracking-wider mb-6">
              Our Contacts
            </h3>
            <hr className='text-orange-300 w-15 mt-5 mb-10'/>
            <ul className="space-y-4 text-sm">
              {/* Email */}
              <li className="group flex items-center">
                    <span className="text-orange-500 mr-2 group-hover:translate-x-1 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="orange"   className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>

              {/* Address */}
              <li className="group flex items-center">
                    <span className="text-orange-500 mr-2 group-hover:translate-x-1 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="orange"  className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                <span className="text-gray-300">
                  {contactInfo.address}
                </span>
              </li>

              {/* Phone */}
              <li className="group flex items-center">
                    <span className="text-orange-500 mr-2 group-hover:translate-x-1 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="orange"   className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                <a
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-white text-lg font-semibold uppercase tracking-wider mb-6">Subscribe</h3>
            <hr className='text-orange-300 w-15 mt-5 mb-10'/>
            <p className="text-sm mb-6">Get notified about new templates and updates.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="flex-1 bg-gray-900 border border-gray-800 rounded-xl px-5 py-3 text-sm focus:border-orange-500 outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-3 rounded-xl">
                SEND
              </button>
            </form>
            {msg && <p className="text-green-400 text-sm mt-2 animate-pulse">{msg}</p>}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer lucide lucide-house-icon lucide-house text-orange-500 hover:scale-110"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
             {copyrightText}</p>
          <div className="flex items-center gap-6">
            <span className="text-sm hidden sm:block">Follow Us</span>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.type];
                return (
                  <a
                    key={social.type}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 text-black bg-orange-500 hover:bg-orange-400 rounded-lg flex items-center justify-center transition group"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 transition hover:scale-110"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}