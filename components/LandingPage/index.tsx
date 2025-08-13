import React from 'react'
import HeroSection from './HeroSection/page';
import PricingSection from './PricingSection/page';
import Section2 from './Section2/page';
import Footer from './Footer/page';
import { PricingComparison } from './PricingComparisonSection/page';

const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <Section2 />
            <PricingSection />
            <PricingComparison />
            <Footer />
        </>
    )
}

export default LandingPage;