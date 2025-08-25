import { plans } from "./data"
import SubHeading from "../SubHeading"
import MainHeading from "../MainHeading"
import PricingCard from "./PricingCard"

const PricingSection = () => {
    return (
        <section id="pricing-plan" className="min-h-screen bg-[#00010C] py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <MainHeading title1="Choose the right plan," title2="for your needs" />
                    <SubHeading title="Flexible Plans for Every Developer - Start Free" />
                </div>

                <div className="grid md:grid-cols-3 gap-4 lg:gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <PricingCard key={plan.name} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingSection;