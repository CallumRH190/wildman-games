'use client';


import Link from 'next/link';
import { useState, useEffect } from 'react';

const FIT_CALL_LINK = 'https://CallumHardinghamCoaching.as.me/?appointmentType=28600751';
const DEPOSIT_LINK = 'https://link.fastpaydirect.com/payment-link/69b414038e8f54b631536f81';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <div
        className={`pill-nav flex items-center justify-between gap-6 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl px-5 py-3 w-full max-w-3xl'
            : 'bg-transparent border border-transparent px-4 py-2 w-full max-w-5xl'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center" style={{ height: 28, background: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/WLDMN_MAY_TRANSPARENT_.png"
            alt="WLDMN"
            width={90}
            height={28}
            style={{ background: 'none', display: 'block', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {[
            { label: 'The Event', href: '#event' },
            { label: 'Logistics', href: '#logistics' },
            { label: 'Pricing', href: '#pricing' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link font-mono text-[10px] tracking-widest-3 uppercase ${
                scrolled ? 'text-stone-light' : 'text-stone-light'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={FIT_CALL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex items-center gap-2 font-mono text-[10px] tracking-widest-3 uppercase transition-all duration-300 px-4 py-2 ${
            scrolled
              ? 'bg-sand text-black hover:bg-offwhite'
              : 'border border-white/30 text-offwhite hover:border-sand hover:text-sand'
          }`}
          style={{ borderRadius: 9999 }}
        >
          Book Fit Call
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-offwhite transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-offwhite transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-offwhite transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-5">
          {[
            { label: 'The Event', href: '#event' },
            { label: 'Logistics', href: '#logistics' },
            { label: 'Pricing', href: '#pricing' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[11px] tracking-widest-3 uppercase text-stone-light hover:text-sand transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={FIT_CALL_LINK}
            className="btn-primary text-center justify-center"
          >
            Book Fit Call
          </a>
        </div>
      )}
    </header>
  );
}
