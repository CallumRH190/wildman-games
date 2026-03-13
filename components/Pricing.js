const FIT_CALL_LINK   = 'https://CallumHardinghamCoaching.as.me/?appointmentType=28600751';
const DEPOSIT_LINK    = 'https://link.fastpaydirect.com/payment-link/69b414038e8f54b631536f81';
const FULL_PAY_LINK   = 'https://link.fastpaydirect.com/payment-link/69b412bfa42ad4304da7a4a3';
const INSTALMENT_LINK = 'https://link.fastpaydirect.com/payment-link/69b413038e8f54b631536f7e';

export default function Pricing() {
  return (
    <section className="section-dark py-24 md:py-32" id="pricing">
      <div className="container-wide">
        <div className="flex items-center gap-4 mb-14">
          <span className="accent-bar" />
          <span className="section-label">10 — Pricing & Payment</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16 items-start">
          <div>
            <h2 className="display-headline text-offwhite mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Transparent pricing.<br />
              <span className="text-sand">Flexible payment.</span>
            </h2>
            <p className="body-text">
              The Wildman Challenge is a premium event. Accommodation, meals, transfers,
              programming, and coaching are all covered. The price reflects that.
            </p>
          </div>

          <div className="border border-sand/30 p-8 bg-sand/5">
            <div className="font-mono text-[10px] tracking-widest-3 uppercase text-sand mb-3">Early Bird — Active Now</div>
            <p className="font-body font-light text-stone-light text-sm leading-relaxed mb-4">
              Early bird pricing is active until{' '}
              <strong className="text-offwhite font-medium">17th March 2026</strong>.
              After that date, the standard price of{' '}
              <strong className="text-offwhite font-medium">£2,250</strong> applies.
              Lock in your rate now.
            </p>
            <div className="flex gap-6 pt-4 border-t border-sand/20">
              <div>
                <div className="font-mono text-[9px] tracking-widest-2 uppercase text-stone mb-1">Early Bird (until 17 Mar)</div>
                <div className="stat-number text-2xl">£1,850</div>
              </div>
              <div className="w-px bg-sand/20" />
              <div>
                <div className="font-mono text-[9px] tracking-widest-2 uppercase text-stone mb-1">Standard (from 18 Mar)</div>
                <div className="stat-number text-2xl" style={{ color: '#6B6158' }}>£2,250</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {/* Full pay */}
          <div className="border border-sand bg-sand/5 p-8 flex flex-col gap-6 relative">
            <div className="absolute top-0 right-0 bg-sand px-3 py-1">
              <span className="font-mono text-[9px] tracking-widest-2 uppercase text-black">Best Value</span>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest-2 uppercase text-sand mb-1">Pay in Full — Early Bird</div>
              <div className="stat-number text-6xl md:text-7xl">£1,850</div>
              <div className="font-mono text-[10px] text-stone mt-1">Until 17th March 2026</div>
            </div>
            <div className="hr-rule" />
            <ul className="flex flex-col gap-2">
              {['All-in price, nothing more to pay', 'Priority confirmation', 'Immediate access to prep plan', 'Saves £400 vs standard price'].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg className="mt-[3px] shrink-0 text-sand" width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-body font-light text-stone-light text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a href={FULL_PAY_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center mt-auto">
              Pay in Full — £1,850
            </a>
          </div>

          {/* Deposit */}
          <div className="border border-white/10 p-8 flex flex-col gap-6">
            <div>
              <div className="font-mono text-[10px] tracking-widest-2 uppercase text-stone-light mb-1">Secure with Deposit</div>
              <div className="stat-number text-6xl md:text-7xl">£370</div>
              <div className="font-mono text-[10px] text-stone mt-1">20% now — balance due before event</div>
            </div>
            <div className="hr-rule" />
            <ul className="flex flex-col gap-2">
              {['Reserve your place now', 'Balance due closer to event', 'Immediate access to prep plan', 'Non-refundable, transferable'].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg className="mt-[3px] shrink-0 text-stone" width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-body font-light text-stone-light text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a href={DEPOSIT_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center mt-auto">
              Secure Your Place — £370
            </a>
          </div>

          {/* 3-payment plan */}
          <div className="border border-white/10 p-8 flex flex-col gap-6">
            <div>
              <div className="font-mono text-[10px] tracking-widest-2 uppercase text-stone-light mb-1">3-Payment Plan</div>
              <div className="stat-number text-6xl md:text-7xl">×3</div>
              <div className="font-mono text-[10px] text-stone mt-1">Split across the preparation period</div>
            </div>
            <div className="hr-rule" />
            <ul className="flex flex-col gap-2">
              {['£617 × 3 payments', 'Schedule agreed at booking', 'Spread across preparation period', 'Same total as full price'].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <svg className="mt-[3px] shrink-0 text-stone" width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-body font-light text-stone-light text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a href={INSTALMENT_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center mt-auto">
              Pay in Instalments — £617
            </a>
          </div>
        </div>

        <div className="mt-6 border border-white/10 p-5 flex items-start gap-4 max-w-xl mx-auto">
          <svg className="shrink-0 mt-[2px] text-sand" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p className="font-body font-light text-stone-light text-sm leading-relaxed">
            <span className="text-offwhite font-medium">Single occupancy available on request.</span>{' '}
            Shared rooms are included in the price. If you would prefer a private room, an upgrade is available. Ask on your fit call for current availability and pricing.
          </p>
        </div>

        <p className="font-mono text-[10px] tracking-wider uppercase text-stone text-center mt-4">
          All prices in GBP. 4 of 20 spots already sold.
        </p>
      </div>
    </section>
  );
}
