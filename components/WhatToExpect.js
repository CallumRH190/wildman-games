'use client';

import { useEffect, useRef } from 'react';

const days = [
  {
    day: '01',
    date: 'Wed 28 May',
    title: 'Arrival & Orientation',
    sub: 'The standard is set on day one.',
    items: [
      'Transfers from Málaga Centro',
      'Check in, briefing and standard setting',
      'Evening session — first physical output',
      'Team dinner and introductions',
    ],
  },
  {
    day: '02',
    date: 'Thu 29 May',
    title: 'Load & Terrain',
    sub: 'Your body carries the weight. Your mind follows.',
    items: [
      'Early rise, morning protocols',
      'Extended loaded hike — elevation and time under load',
      'Team challenges in natural terrain',
      'Evening integration session',
    ],
  },
  {
    day: '03',
    date: 'Fri 30 May',
    title: 'Peak Pressure',
    sub: 'The most demanding day. By design.',
    items: [
      'The most demanding day, physically and mentally',
      'Multi-event challenge format',
      'Obstacle and endurance elements',
      'Team-based leadership tasks',
    ],
  },
  {
    day: '04',
    date: 'Sat 31 May',
    title: 'Completion & Close',
    sub: 'You finish what you started.',
    items: [
      'Final challenge and close-out',
      'Reflection and debrief',
      'Celebration meal',
      'Returns and transfers',
    ],
  },
];

export default function WhatToExpect() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const cards = sectionRef.current.querySelectorAll('.day-card');
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            end: () => `+=${cards[i + 1]?.offsetHeight || window.innerHeight}`,
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.set(card.querySelector('.day-card-inner'), {
                scale: 1 - progress * 0.06,
                filter: `blur(${progress * 8}px)`,
                opacity: 1 - progress * 0.5,
              });
            },
          });
        });
        gsap.from('.expect-header', {
          opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.expect-header', start: 'top 85%' },
        });
      }, sectionRef);
    };
    init();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0A0A0A]" id="event-detail">
      <div className="container-wide pt-24 pb-16">
        <div className="expect-header flex items-center gap-4 mb-12">
          <span className="accent-bar" />
          <span className="section-label">05 — What To Expect</span>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <h2 className="display-headline text-offwhite" style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}>
            Four days.<br />
            <span style={{ color: '#C4AA87' }}>Fully immersive.</span>
          </h2>
          <div className="flex flex-col gap-4 justify-end">
            <p className="body-text">
              The programme escalates. Each day builds on the last. By day three you will be
              operating in ways you did not expect on day one.
            </p>
            <p className="body-text">
              All activities are scalable. You will be pushed relative to your current capability,
              not broken.
            </p>
          </div>
        </div>
      </div>

      <div>
        {days.map((day, i) => (
          <div
            key={i}
            className="day-card"
            style={{ height: '100vh', position: 'sticky', top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: i + 1 }}
          >
            <div
              className="day-card-inner w-full h-full flex items-center"
              style={{ background: i % 2 === 0 ? '#0F0F0F' : '#141414', transformOrigin: 'top center' }}
            >
              <div className="container-wide w-full">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                  <div>
                    <div className="flex items-start gap-6 mb-8">
                      <span className="font-mono text-[11px] tracking-widest-3 uppercase mt-2" style={{ color: '#6B6158' }}>
                        {day.date}
                      </span>
                    </div>
                    <div className="display-headline mb-3" style={{ fontSize: 'clamp(80px, 14vw, 180px)', color: 'rgba(196,170,135,0.12)', lineHeight: 1 }}>
                      {day.day}
                    </div>
                    <h2 className="display-headline text-offwhite mb-4" style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginTop: '-0.6em' }}>
                      {day.title}
                    </h2>
                    <p className="body-text text-lg" style={{ color: '#C4AA87' }}>{day.sub}</p>
                  </div>

                  <div className="flex flex-col gap-5 border-l border-white/8 pl-12">
                    {day.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-4">
                        <span className="font-mono text-[10px] shrink-0 mt-[2px]" style={{ color: '#C4AA87' }}>
                          {String(j + 1).padStart(2, '0')}
                        </span>
                        <span className="font-body font-light text-stone-light text-base leading-relaxed">{item}</span>
                      </div>
                    ))}

                    <div className="mt-6 pt-6 border-t border-white/8">
                      <div className="h-1 rounded-full" style={{ background: 'rgba(196,170,135,0.15)', width: '100%' }}>
                        <div className="h-full rounded-full" style={{ background: '#C4AA87', width: `${((i + 1) / days.length) * 100}%` }} />
                      </div>
                      <p className="font-mono text-[9px] tracking-widest-3 uppercase text-stone mt-2">Day {i + 1} of {days.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container-wide py-10">
        <p className="font-mono text-[10px] tracking-wider uppercase text-stone">
          Full programme schedule provided after booking. Subject to conditions.
        </p>
      </div>
    </section>
  );
}
