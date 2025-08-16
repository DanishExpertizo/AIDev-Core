import React from 'react'
import HeroSection from './HeroSection/page';
import PricingSection from './PricingSection/page';
import Section2 from './Section2/page';
import Footer from './Footer/page';
import { PricingComparison } from './PricingComparisonSection/page';
import Section4 from './Section4/page';
import Section7 from './Section7/page';
import Section3 from './Section3/page';

const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <Section2 />
            <Section3 />
            <Section4 />
            <PricingSection />
            <PricingComparison />
            <Section7 />
            <Footer />
        </>
    )
}

export default LandingPage;