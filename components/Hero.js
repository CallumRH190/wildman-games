'use client';

import { useEffect, useRef } from 'react';

const FIT_CALL_LINK = 'https://CallumHardinghamCoaching.as.me/?appointmentType=28600751';
const DEPOSIT_LINK = 'https://link.fastpaydirect.com/payment-link/69b414038e8f54b631536f81';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('.hero-label', { opacity: 0, y: 20, duration: 0.8 })
          .from('.hero-line-1', { opacity: 0, y: 60, duration: 1 }, '-=0.4')
          .from('.hero-line-2', { opacity: 0, y: 60, duration: 1 }, '-=0.7')
          .from('.hero-location', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
          .from('.hero-sub', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
          .from('.hero-meta-item', { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 }, '-=0.4')
          .from('.hero-cta-wrap', { opacity: 0, y: 16, duration: 0.6 }, '-=0.3')
          .from('.hero-scroll', { opacity: 0, duration: 0.5 }, '-=0.2');
      }, containerRef);
    };
    initGSAP();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col justify-end overflow-hidden bg-black"
      style={{ minHeight: '100dvh' }}
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/DSC01666.JPG"
          alt="Wildman Challenge — Marbella"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }}
        />
        <div className="absolute inset-0 img-overlay-darker" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.5) 0%, transparent 60%)' }} />
      </div>

      <div className="relative z-10 container-wide pb-20 md:pb-28 pt-36">
        <div className="hero-label flex items-center gap-4 mb-8">
          <span className="accent-bar" />
          <span className="section-label">The Wildman Challenge — 7th Edition</span>
        </div>

        <div className="mb-5">
          <h1 className="display-headline text-offwhite hero-line-1" style={{ fontSize: 'clamp(60px, 10vw, 140px)', lineHeight: 0.88 }}>
            Wildman
          </h1>
          <h1 className="display-headline hero-line-2" style={{ fontSize: 'clamp(60px, 10vw, 140px)', lineHeight: 0.88, color: '#C4AA87' }}>
            Challenge 2026
          </h1>
        </div>

        <p className="hero-location font-mono text-[12px] md:text-[13px] tracking-widest-3 uppercase text-stone-light mb-8">
          Marbella, Spain &nbsp;·&nbsp; 28–31 May 2026
        </p>

        <p className="hero-sub font-body font-light text-stone-light text-lg md:text-xl max-w-lg leading-relaxed mb-12">
          Four days. No exits. A structured physical and mental challenge built to reset your standards.
        </p>

        <div className="flex flex-wrap gap-x-10 gap-y-4 mb-12">
          {[
            { label: 'Capacity', value: '20 Men' },
            { label: 'Spots Remaining', value: '10 Left' },
            { label: 'Early Bird Ends', value: '27 Mar 2026' },
          ].map((item) => (
            <div key={item.label} className="hero-meta-item flex flex-col gap-1">
              <span className="font-mono text-[9px] tracking-widest-3 uppercase text-stone">{item.label}</span>
              <span className="font-display font-800 text-offwhite text-sm tracking-wide uppercase" style={{ fontFamily: 'var(--font-barlow-condensed)', fontWeight: 700 }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="hero-cta-wrap flex flex-wrap gap-4">
          <a href={FIT_CALL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span>Book a Fit Call</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href={DEPOSIT_LINK} className="btn-secondary">
            <span>Secure Your Deposit</span>
          </a>
        </div>

        <p className="mt-6 font-mono text-[10px] tracking-wider uppercase text-stone">
          Early bird pricing active — ends 27th March 2026
        </p>
      </div>

      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ opacity: 0.4 }}>
        <span className="font-mono text-[9px] tracking-widest-3 uppercase text-offwhite">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-offwhite to-transparent" />
      </div>
    </section>
  );
}
