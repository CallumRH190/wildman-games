import Image from 'next/image';

const FIT_CALL_LINK = 'https://CallumHardinghamCoaching.as.me/?appointmentType=28600751';
const DEPOSIT_LINK = 'https://link.fastpaydirect.com/payment-link/69b414038e8f54b631536f81';

const steps = [
  {
    step: '01',
    title: 'Book a Fit Call',
    body: `A short call, around 20 minutes, to confirm this is the right fit. No hard sell. We want the right people in the room.`,
  },
  {
    step: '02',
    title: 'Secure Your Place',
    body: `Pay your deposit (20%) or in full. Your place is confirmed and you will receive the preparation plan within 24 hours.`,
  },
  {
    step: '03',
    title: 'Begin the Preparation',
    body: `Training programme, logistics info, and coaching access start immediately. The event has already begun.`,
  },
  {
    step: '04',
    title: 'Arrive in Marbella',
    body: `Transfers arranged from Málaga Centro. Check in, meet the team, and begin Day 1.`,
  },
];

export function HowBookingWorks() {
  return (
    <section className="section-charcoal py-24 md:py-32" id="book">
      <div className="container-wide">
        <div className="flex items-center gap-4 mb-14">
          <span className="accent-bar" />
          <span className="section-label">11 — How Booking Works</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="display-headline text-offwhite" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Simple process.<br />
              <span className="text-sand">Clear steps.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 justify-end">
            <p className="body-text">
              We do not take automated sign-ups. Every person on the event has spoken with us first.
              That is not gatekeeping. It is how we ensure the group dynamic is right for everyone.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="stat-number text-4xl">{s.step}</span>
                {i < steps.length - 1 && <div className="flex-1 h-px bg-white/10" />}
              </div>
              <h3 className="font-display font-700 text-offwhite text-lg uppercase tracking-wide">{s.title}</h3>
              <p className="font-body font-light text-stone-light text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <a href={FIT_CALL_LINK} className="btn-primary">
            Book a Fit Call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href={DEPOSIT_LINK} className="btn-secondary">
            Secure Your Deposit
          </a>
        </div>
      </div>
    </section>
  );
}

export function FounderCredibility() {
  return (
    <section className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="flex items-center gap-4 mb-14">
          <span className="accent-bar bg-black/40" />
          <span className="font-mono text-[10px] tracking-widest-3 uppercase text-stone">12 — The Coach</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative h-80 md:h-[560px] overflow-hidden order-2 md:order-1">
            <Image
              src="/assets/IMG_8429_3.jpg"
              alt="Wildman Challenge Coach"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-offwhite/20 to-transparent" />
          </div>

          <div className="order-1 md:order-2 flex flex-col gap-7">
            <h2 className="display-headline text-black mb-2" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Built by someone who has{' '}
              <span className="text-sand">been in it.</span>
            </h2>

            <p className="font-body font-light text-[#3A3530] leading-relaxed">
              The Wildman Challenge was created and is led by a coach with 15 years in high-performance
              coaching and 17 years in fitness training. Not theory. Applied experience, in the
              field, with real people under real conditions.
            </p>
            <p className="font-body font-light text-stone leading-relaxed">
              Every aspect of the event, the physical programming, the mental architecture, the
              group structure, the logistics, has been refined across six previous editions and
              hundreds of hours in preparation and debrief.
            </p>
            <p className="font-body font-light text-stone leading-relaxed">
              The fit call you book is with the coach directly. Not a sales team. Not an assistant.
              The person who will be standing next to you on day three of the event.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                '15 years high-performance coaching',
                '17 years fitness training',
                'Running events since 2021',
                '7th edition 2026',
              ].map((c) => (
                <span key={c} className="border border-black/15 px-4 py-2 font-mono text-[10px] tracking-wide uppercase text-stone">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="section-dark py-28 md:py-36 relative overflow-hidden" id="deposit">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(196,170,135,0.3) 80px, rgba(196,170,135,0.3) 81px)' }}
      />

      <div className="container-tight relative z-10 text-center">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="accent-bar" />
          <span className="section-label">Marbella — 28–31 May 2026</span>
          <span className="accent-bar" />
        </div>

        <h2
          className="display-headline text-offwhite mb-6 mx-auto"
          style={{ fontSize: 'clamp(48px, 8vw, 110px)', maxWidth: '900px' }}
        >
          10 spots.{' '}
          <span className="text-sand">Make this</span>
          <br />
          the year you act.
        </h2>

        <p className="font-body font-light text-stone-light text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12">
          If you have read this far, you already know whether this is for you.
          The question is whether you are going to do something about it.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href={FIT_CALL_LINK} className="btn-primary text-base py-4 px-10">
            Book a Fit Call
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href={DEPOSIT_LINK} className="btn-secondary text-base py-4 px-10">
            Secure Your Deposit — £370
          </a>
        </div>

        <p className="font-mono text-[10px] tracking-wider uppercase text-stone">
          Early bird pricing ends 27th March 2026 — £2,250 standard price applies after that date
        </p>

        <div className="mt-16 flex justify-center opacity-20">
          <span className="display-headline text-offwhite" style={{ fontSize: 'clamp(60px, 10vw, 120px)' }}>
            WLDMN
          </span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-10">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-[10px] tracking-widest-2 uppercase text-stone">
          © {new Date().getFullYear()} Wildman Challenge. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a href="#" className="font-mono text-[10px] tracking-wider uppercase text-stone hover:text-sand transition-colors">Privacy</a>
          <a href="#" className="font-mono text-[10px] tracking-wider uppercase text-stone hover:text-sand transition-colors">Terms</a>
          <a href="#" className="font-mono text-[10px] tracking-wider uppercase text-stone hover:text-sand transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
