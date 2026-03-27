'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const pillars = [
  {
    number: '01',
    title: 'Physical Load',
    body: 'The body under sustained load produces mental states that no seminar could replicate. That is the starting point.',
  },
  {
    number: '02',
    title: 'Real Terrain',
    body: 'Not just a gym, not just a track. The Andalusian landscape provides a context that controlled environments cannot.',
  },
  {
    number: '03',
    title: 'Brotherhood',
    body: 'Men perform differently in front of other men who are equally committed. That matters, and it is part of the mechanism.',
  },
  {
    number: '04',
    title: 'No Exit',
    body: 'Optionality is the enemy of transformation. When leaving is not available, something else becomes available instead.',
  },
];

export default function TheMechanism() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from('.mechanism-headline', {
          opacity: 0, y: 50, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.mechanism-headline', start: 'top 80%' },
        });
        gsap.from('.mechanism-pillar', {
          opacity: 0, y: 40, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.mechanism-pillars', start: 'top 80%' },
        });
        gsap.from('.mechanism-img', {
          opacity: 0, scale: 0.97, duration: 1, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.mechanism-images', start: 'top 80%' },
        });
      }, sectionRef);
    };
    init();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0D0D0D] py-24 md:py-36" id="mechanism">
      <div className="container-wide">
        <div className="flex items-center gap-4 mb-16">
          <span className="accent-bar" />
          <span className="section-label">04 — The Mechanism</span>
        </div>

        <div className="mechanism-headline grid md:grid-cols-2 gap-12 mb-20">
          <h2
            className="display-headline text-offwhite"
            style={{ fontSize: 'clamp(36px, 5.5vw, 76px)' }}
          >
            Use the body to{' '}
            <span style={{ color: '#C4AA87' }}>carve and craft the mind.</span>
          </h2>
          <div className="flex flex-col gap-5 justify-end">
            <p className="body-text">
              This is not therapy. This is not group coaching in a comfort zone. It is a physical
              environment that creates a mental outcome, because that is how it actually works.
            </p>
            <p className="body-text">
              When your body is committed, your mind follows. That is the mechanism. Not theory,
              tested across these events over the last five years.
            </p>
          </div>
        </div>

        <div className="mechanism-pillars grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/8 mb-16">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="mechanism-pillar p-8 flex flex-col gap-4 border-r border-white/8 last:border-r-0 hover:bg-white/2 transition-colors"
            >
              <span className="font-mono text-[10px] tracking-widest-3 uppercase" style={{ color: '#C4AA87' }}>
                {p.number}
              </span>
              <h3 className="display-headline text-offwhite" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
                {p.title}
              </h3>
              <p className="body-text text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mechanism-images grid grid-cols-1 md:grid-cols-3 gap-0 bg-black overflow-hidden">
          {['/assets/2.png', '/assets/3.png', '/assets/5.png'].map((src, i) => (
            <div key={i} className="mechanism-img relative overflow-hidden bg-black" style={{ height: 260 }}>
              <Image
                src={src}
                alt={`Wildman event ${i + 1}`}
                fill
                className="object-cover"
                style={{ opacity: 0.85 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
