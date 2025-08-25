"use client"

import React from 'react';
import LandingPageLayout from '@/components/LandingPageLayout';

import HeroSection from '@/components/HeroSection';
import AgentSection from '@/components/AgentSection';
import TimeLineSection from '@/components/TimeLineSection';
import WebContainerSection from '@/components/WebContainerSection';
import PricingPlanSection from '@/components/PricingPlanSection';
import PricingComparisonSection from '@/components/PricingComparisonSection';
import GetStartedSection from '@/components/GetStartedSection';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Home = () => {
  useSmoothScroll(1000, "expo");
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
