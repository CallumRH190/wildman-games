'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: `I came in thinking I was reasonably fit and mentally tough. By day two I realised I had been coasting for years. Not in a destructive way — just comfortable. This broke that open. I left with more direction than I had going in, and I have genuinely not felt that clarity since my twenties. I will be back.`,
    name: 'Ash Green',
    detail: 'Attended Edition 6',
    image: null,
  },
  {
    quote: `I signed up not knowing if I was ready. I was told that was exactly the right reason to sign up. They were right. By day three I had more clarity about my life than two years of therapy had given me.`,
    name: '[Name — add yours here]',
    detail: 'Past Attendee',
    image: null,
  },
  {
    quote: `My wife noticed before I did. I came back different. Not hyped up — more settled. That is the word she used. I have been back twice since.`,
    name: '[Name — add yours here]',
    detail: 'Past Attendee',
    image: null,
  },
];

export default function SocialProof() {
  const ref = useRef(null);
  useEffect(() => {
    let ctx;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from('.sp-stat', { opacity: 0, y: 30, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.sp-stats', start: 'top 85%' } });
        gsap.from('.sp-card', { opacity: 0, y: 40, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.sp-cards', start: 'top 80%' } });
      }, ref);
    };
    init();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-charcoal py-24 md:py-32">
      <div className="container-wide">
        <div className="flex items-center gap-4 mb-6">
          <span className="accent-bar" />
          <span className="section-label">08 — What Past Attendees Say</span>
        </div>

        <div className="sp-stats grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10 mb-14">
          {[
            { number: '6+', label: 'Years Running' },
            { number: '7th', label: 'Edition 2026' },
            { number: '20', label: 'Places per event' },
            { number: '100%', label: 'Of past attendees would recommend' },
          ].map((stat) => (
            <div key={stat.label} className="sp-stat flex flex-col gap-2">
              <div className="stat-number text-5xl md:text-6xl">{stat.number}</div>
              <div className="font-mono text-[10px] tracking-widest-2 uppercase text-stone">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="sp-cards grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="sp-card flex flex-col gap-6 border border-white/8 p-8 hover:border-sand/20 transition-colors">
              <div className="font-display font-800 text-sand/30 text-6xl leading-none select-none">"</div>
              <p className="font-body font-light text-stone-light text-base leading-relaxed italic flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 overflow-hidden">
                  {t.image ? (
                    <Image src={t.image} alt={t.name} width={40} height={40} className="object-cover" />
                  ) : (
                    <span className="font-mono text-[10px] text-stone">?</span>
                  )}
                </div>
                <div>
                  <div className="font-body font-medium text-offwhite text-sm">{t.name}</div>
                  <div className="font-mono text-[10px] tracking-wide uppercase text-stone">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-0 bg-black overflow-hidden">
          <div className="relative h-48 md:h-60 overflow-hidden col-span-2 bg-black" style={{lineHeight: 0}}>
            <Image src="/assets/DSC01666.JPG" alt="Wildman Games group" fill className="object-cover object-center" />
          </div>
          <div className="relative h-48 md:h-60 overflow-hidden bg-black" style={{lineHeight: 0}}>
            <Image src="/assets/9.png" alt="Wildman Games" fill className="object-cover object-center" />
          </div>
          <div className="relative h-48 md:h-60 overflow-hidden bg-black" style={{lineHeight: 0}}>
            <Image src="/assets/4.png" alt="Wildman Games" fill className="object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
