export default function WhoItsFor() {
  const forList = [
    `You know you're capable of more and are tired of knowing it without acting on it`,
    `You respect discipline and want to be around others who do too`,
    `You want to test yourself physically and mentally in a real environment`,
    `You've drifted from your standards and want a hard reset`,
    `You're in your late 20s to 50s and want to perform, not just maintain`,
    `You've never done anything like this and want to start properly`,
  ];

  const notForList = [
    `You're looking for a passive mindfulness retreat`,
    `You want a summer party`,
    `You want to be carried through the experience`,
    `You're unwilling to be uncomfortable`,
    `You won't take the preparation seriously`,
  ];

  return (
    <section className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="flex items-center gap-4 mb-14">
          <span className="accent-bar bg-black/40" />
          <span className="font-mono text-[10px] tracking-widest-3 uppercase text-stone">02 — Who It Is For</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="display-headline text-black mb-10" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              This is for you if —
            </h2>
            <ul className="flex flex-col gap-5">
              {forList.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-[6px] shrink-0 w-4 h-px bg-sand" />
                  <span className="font-body font-light text-[#3A3530] text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:border-l md:border-black/10 md:pl-20">
            <h2 className="display-headline text-black mb-10" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              This is not for you if —
            </h2>
            <ul className="flex flex-col gap-5">
              {notForList.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-[6px] shrink-0 w-4 h-px bg-stone" />
                  <span className="font-body font-light text-stone text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-black/10">
          <p className="font-mono text-[10px] tracking-widest-3 uppercase text-stone mb-6">Minimum standards to attend</p>
          <div className="flex flex-wrap gap-6">
            {[
              'Run 5km without stopping',
              'Complete one full pull-up',
              'Commit to the pre-event preparation plan',
            ].map((standard) => (
              <div key={standard} className="border border-black/15 px-5 py-3 font-body font-light text-sm text-[#3A3530]">
                {standard}
              </div>
            ))}
          </div>
          <p className="mt-6 font-body font-light text-sm text-stone max-w-xl">
            If you're not fully there yet, that's fine. That is what the preparation period is for.
            You will receive a strict plan from the moment you sign up.
          </p>
        </div>
      </div>
    </section>
  );
}
