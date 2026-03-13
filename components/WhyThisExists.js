'use client';

import { useEffect, useRef } from 'react';

export default function WhyThisExists() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const headline = sectionRef.current.querySelector('.manifesto-headline');
        if (headline) {
          const words = headline.innerHTML.split(/(\s+)/);
          headline.innerHTML = words
            .map((word) => word.trim() ? `<span class="word-wrap"><span class="word-inner">${word}</span></span>` : word)
            .join('');
          gsap.to(headline.querySelectorAll('.word-inner'), {
            y: 0, duration: 0.8, stagger: 0.04, ease: 'power3.out',
            scrollTrigger: { trigger: headline, start: 'top 80%' },
          });
        }
        gsap.from('.why-body-item', {
          opacity: 0, y: 30, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.why-body', start: 'top 80%' },
        });
        gsap.from('.why-stat', {
          opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.why-stats', start: 'top 85%' },
        });
      }, sectionRef);
    };
    init();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-charcoal py-24 md:py-36" id="event">
      <div className="container-tight">
        <div className="flex items-center gap-4 mb-16">
          <span className="accent-bar" />
          <span className="section-label">01 — Why This Exists</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p
              className="manifesto-headline display-headline text-offwhite"
              style={{ fontSize: 'clamp(34px, 4.5vw, 58px)', lineHeight: 0.92 }}
            >
              Most men don't need more information. They need a standard to rise to.
            </p>
          </div>

          <div className="why-body flex flex-col justify-center gap-6">
            <p className="why-body-item body-text">
              The Wildman Challenge started in 2021 with a simple idea: put a group of capable men
              in difficult terrain under real pressure and watch what happens. Think SAS: Who Dares
              Wins combined with a Spartan race and self-development.
            </p>
            <p className="why-body-item body-text">
              What happens is this. Men who felt stuck start moving, men who had drifted find a
              reference point, and men who thought they needed more time, more preparation, or more
              confidence discover they already had enough to begin.
            </p>
            <p className="why-body-item body-text">
              This is the seventh edition. The format is proven, the results speak for themselves,
              and the men who show up do so because they know the difference between reading about
              change and actually going for it.
            </p>

            <div className="why-stats grid grid-cols-3 gap-6 mt-4 pt-8 border-t border-white/10">
              {[
                { number: '7th', label: 'Edition' },
                { number: '15yr', label: 'Coaching Experience' },
                { number: '2021', label: 'Est.' },
              ].map((stat) => (
                <div key={stat.label} className="why-stat">
                  <div className="stat-number text-4xl md:text-5xl">{stat.number}</div>
                  <div className="font-mono text-[10px] tracking-widest-2 uppercase text-stone mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
