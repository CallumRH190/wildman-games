import Image from 'next/image';

const FIT_CALL_LINK = 'https://CallumHardinghamCoaching.as.me/?appointmentType=28600751';

const outcomes = [
  {
    title: 'Physical Recalibration',
    body: `You will leave with a concrete sense of what your body is capable of, based on evidence, not guesswork.`,
  },
  {
    title: 'Mental Reference Points',
    body: `When things are hard in normal life, you will have something real to reference. You know what hard actually looks like now.`,
  },
  {
    title: 'Raised Standards',
    body: `What you tolerate from yourself and your environment shifts after this. Not because you were told to, because you experienced the alternative.`,
  },
  {
    title: 'Brotherhood',
    body: `Something happens when men go through something difficult together deliberately. The connections formed here are unusually strong. Past attendees stay in contact.`,
  },
  {
    title: 'A Preparation Habit',
    body: `The event starts when you sign up. You will have a structured preparation plan from day one. That habit does not stop when you leave.`,
  },
  {
    title: 'Clarity',
    body: `Not guaranteed, but frequently reported. The noise quiets when the body is fully occupied. Space opens up.`,
  },
];

export default function EventStartsNow() {
  return (
    <>
      <section className="section-light py-24 md:py-32">
        <div className="container-wide">
          <div className="flex items-center gap-4 mb-14">
            <span className="accent-bar bg-black/40" />
            <span className="font-mono text-[10px] tracking-widest-3 uppercase text-stone">06 — The Event Starts When You Sign Up</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="display-headline text-black mb-8" style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}>
                Preparation is part{' '}
                <span className="text-sand">of the event.</span>
              </h2>
              <div className="flex flex-col gap-5">
                <p className="font-body font-light text-[#3A3530] leading-relaxed">
                  From the moment you book, you are in. You will receive a structured preparation
                  programme covering training, nutrition, mindset, and logistics, built for the
                  level you are currently at.
                </p>
                <p className="font-body font-light text-stone leading-relaxed">
                  If you can run 5K and do one pull-up, that is the baseline. The plan takes you
                  from there to ready. You do not need to be in peak shape before you sign up.
                  You need to be willing to get there.
                </p>
                <p className="font-body font-light text-stone leading-relaxed">
                  You will also have direct access to the coach and team throughout the preparation
                  period, so questions get answered and expectations stay clear.
                </p>
              </div>

              <div className="mt-10">
                <a href={FIT_CALL_LINK} className="btn-primary-dark">
                  Book a Fit Call
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative h-80 md:h-[500px] overflow-hidden">
              <Image
                src="/assets/PHOTO20231120184122.jpg"
                alt="Wildman preparation"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-24 md:py-32" id="outcomes">
        <div className="container-wide">
          <div className="flex items-center gap-4 mb-14">
            <span className="accent-bar" />
            <span className="section-label">07 — Outcomes</span>
          </div>

          <h2 className="display-headline text-offwhite mb-14 max-w-2xl" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            What men take{' '}
            <span className="text-sand">home.</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((item, i) => (
              <div key={i} className="border-t border-white/10 pt-8 flex flex-col gap-4">
                <span className="stat-number text-2xl">0{i + 1}</span>
                <h3 className="font-display font-700 text-offwhite text-xl uppercase tracking-wide">{item.title}</h3>
                <p className="font-body font-light text-stone-light text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
