"use client";

import React from 'react';
import LandingPageLayout from '@/components/LandingPageLayout';

import HeroSection from '@/components/HeroSection';
import AgentSection from '@/components/AgentSection';
import TimeLineSection from '@/components/TimeLineSection';
import WebContainerSection from '@/components/WebContainerSection';
import PricingPlanSection from '@/components/PricingPlanSection';
import PricingComparisonSection from '@/components/PricingComparisonSection';
import GetStartedSection from '@/components/GetStartedSection';
import useScrollReveal from '@/hooks/useScrollReveal';

const Home = () => {
  useScrollReveal();

  return (
    <>
      <LandingPageLayout>
        <HeroSection />
        <AgentSection />
        <TimeLineSection />
        <WebContainerSection />
        <PricingPlanSection />
        <PricingComparisonSection />
        <GetStartedSection />
      </LandingPageLayout>
    </>
  );
};

export default Home;
