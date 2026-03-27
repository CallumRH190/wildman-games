export default function Logistics() {
  const included = [
    '4 days / 3 nights accommodation (shared rooms)',
    '3 meals per day, all prepared',
    'Transfers to and from Málaga Centro',
    'All structured sessions and activities',
    'Pre-event preparation programme',
    'Coaching team access throughout',
    'Post-event integration resources',
  ];

  const notIncluded = [
    'Flights',
    'Travel insurance — strongly recommended [TRAVEL INSURANCE NOTE]',
    'Personal expenses',
    'Single room upgrade (available on request — [SINGLE ROOM UPGRADE £])',
  ];

  return (
    <section className="section-light py-24 md:py-32" id="logistics">
      <div className="container-wide">
        {/* Label */}
        <div className="flex items-center gap-4 mb-14">
          <span className="accent-bar bg-black/40" />
          <span className="font-mono text-[10px] tracking-widest-3 uppercase text-stone">09 — Logistics</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-16">
          <div>
            <h2
              className="display-headline text-black mb-10"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              Everything you need.<br />
              <span className="text-sand">Nothing you dont.</span>
            </h2>

            {/* Key logistics */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: 'Dates', value: 'May 28–31, 2026' },
                { label: 'Location', value: 'Marbella, Spain' },
                { label: 'Capacity', value: '20 men' },
                { label: 'Accommodation', value: 'Included (shared)' },
                { label: 'Meals', value: '3 per day, included' },
                { label: 'Transfers', value: 'Málaga Centro' },
              ].map((item) => (
                <div key={item.label} className="border-t border-black/10 pt-4">
                  <div className="font-mono text-[9px] tracking-widest-2 uppercase text-stone mb-1">{item.label}</div>
                  <div className="font-body font-medium text-[#1A1A1A] text-sm">{item.value}</div>
                </div>
              ))}
            </div>

            <p className="font-body font-light text-stone text-sm leading-relaxed">
              Single occupancy is available on request at an additional cost of{' '}
              <span className="text-[#1A1A1A]">[SINGLE ROOM UPGRADE £]</span>. Limited availability —
              request at time of booking.
            </p>
          </div>

          {/* Whats included / not */}
          <div className="flex flex-col gap-10">
            {/* Included */}
            <div>
              <h3 className="font-mono text-[10px] tracking-widest-3 uppercase text-stone mb-5">Included</h3>
              <ul className="flex flex-col gap-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-[3px] shrink-0 text-sand" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-body font-light text-[#3A3530] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not included */}
            <div>
              <h3 className="font-mono text-[10px] tracking-widest-3 uppercase text-stone mb-5">Not included</h3>
              <ul className="flex flex-col gap-3">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="mt-[3px] shrink-0 text-stone" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="font-body font-light text-stone text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Cancellation policy */}
        <div className="border border-black/10 p-8 bg-white/50">
          <h3 className="font-mono text-[10px] tracking-widest-3 uppercase text-stone mb-5">Cancellation & Transfer Policy</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Deposit',
                body: 'Non-refundable. Can be transferred to a future event within 12 months.',
              },
              {
                title: 'Cancellation within 30 days',
                body: 'Full investment can be transferred to a future event. Not refunded.',
              },
              {
                title: 'Travel insurance',
                body: 'Strongly recommended. We cannot be responsible for travel disruptions or personal circumstances. [TRAVEL INSURANCE NOTE]',
              },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-body font-medium text-[#1A1A1A] text-sm mb-2">{item.title}</h4>
                <p className="font-body font-light text-stone text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
