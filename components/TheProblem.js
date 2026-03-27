export default function TheProblem() {
  return (
    <section className="section-dark py-24 md:py-32">
      <div className="container-tight">
        <div className="flex items-center gap-4 mb-14">
          <span className="accent-bar" />
          <span className="section-label">03 — The Real Problem</span>
        </div>

        <div className="max-w-3xl">
          <h2
            className="display-headline text-offwhite mb-10"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
          >
            You don't have a{' '}
            <span className="text-sand">knowledge problem.</span>
          </h2>

          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="body-text text-lg">
              You know what you should be doing, and you know what you're capable of.
              You've read enough, watched enough, and planned enough.
            </p>
            <p className="body-text">
              The real problem is that most environments do not require anything of you.
              You can opt out, postpone, keep things comfortable, and nothing immediately
              breaks. Until gradually, it does.
            </p>
            <p className="body-text">
              Men do not drift loudly. It happens quietly. The gap between who you are
              and who you intended to be widens without announcement. Then one day you
              notice you've been meaning to do something about it for a long time.
            </p>

            <div className="border-l-2 border-sand pl-6 mt-4">
              <p
                className="display-headline text-sand"
                style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
              >
                The body does not lie. When you put it under real pressure, everything becomes clear.
              </p>
            </div>

            <p className="body-text">
              The Wildman Challenge is designed to create that pressure. Structured, safe,
              progressive, and led by people who have been doing this for 15+ years.
              You do not get to coast, and you do not get to opt out. That is the point.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
