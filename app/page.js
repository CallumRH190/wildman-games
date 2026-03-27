import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyThisExists from '@/components/WhyThisExists';
import WhoItsFor from '@/components/WhoItsFor';
import TheProblem from '@/components/TheProblem';
import TheMechanism from '@/components/TheMechanism';
import WhatToExpect from '@/components/WhatToExpect';
import EventStartsNow from '@/components/EventStartsNow';
import SocialProof from '@/components/SocialProof';
import Logistics from '@/components/Logistics';
import Pricing from '@/components/Pricing';
import { HowBookingWorks, FounderCredibility, FinalCTA, Footer } from '@/components/BottomSections';

export default function Home() {
  return (
    <>
      <Header />

      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Why This Exists */}
      <WhyThisExists />

      {/* 03 — Who It's For */}
      <WhoItsFor />

      {/* 04 — The Real Problem */}
      <TheProblem />

      {/* 05 — The Mechanism */}
      <TheMechanism />

      {/* 06 — What To Expect */}
      <WhatToExpect />

      {/* 07 — Event Starts Now + 08 Outcomes */}
      <EventStartsNow />

      {/* 09 — Social Proof */}
      <SocialProof />

      {/* 10 — Logistics */}
      <Logistics />

      {/* 11 — Pricing */}
      <Pricing />

      {/* 12 — How Booking Works */}
      <HowBookingWorks />

      {/* 13 — Founder Credibility */}
      <FounderCredibility />

      {/* 14 — Final CTA */}
      <FinalCTA />

      <Footer />
    </>
  );
}
