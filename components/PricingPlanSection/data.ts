import { Plan } from "@/Types/PricingPlanSection";

export const plans: Plan[] = [
    {
        name: "Starter",
        price: 200,
        description: "For startups and SMBs Looking to launch today and grow their subscription business fast",
        features: ["Point 1", "Point 1", "Point 1", "Point 1", "Point 1"],
        isPopular: false,
        className: "starter"
    },
    {
        name: "Professional",
        price: 220,
        description: "For startups and SMBs Looking to launch today and grow their subscription business fast",
        features: ["Point 1", "Point 1", "Point 1", "Point 1", "Point 1"],
        isPopular: true,
        className: "professional"
    },
    {
        name: "Elite - Full Access",
        price: 300,
        description: "For startups and SMBs Looking to launch today and grow their subscription business fast",
        features: ["Point 1", "Point 1", "Point 1", "Point 1", "Point 1"],
        isPopular: false,
        className: "elite"
    },
]