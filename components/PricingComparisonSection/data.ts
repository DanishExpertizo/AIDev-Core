import { Plan, FeatureCategory } from "@/Types/PricingComparisonSection"

export const plans: Plan[] = [
    {
        name: "Starter",
        price: "$12",
        period: "/editor/month",
        billing: "Billed annually or $15 month-to-month",
        buttonText: "Get Started",
        buttonStyle: "bg-slate-900 text-white hover:text-white backdrop-blur-[16.2px] hover:bg-slate-800 border-slate-800",
        highlighted: false
    },
    {
        name: "Professional",
        price: "$45",
        period: "/editor/month",
        billing: "Billed annually or $50 month-to-month",
        buttonText: "Buy Now",
        buttonStyle: "bg-white text-slate-900 hover:bg-gray-300",
        highlighted: true
    },
    {
        name: "Organization",
        price: "$75",
        period: "/editor/month",
        billing: "Billed annually or $85 month-to-month",
        buttonText: "Contact Sales",
        buttonStyle: "bg-slate-900 text-white hover:text-white backdrop-blur-[16.2px] hover:bg-slate-800 border-slate-800",
        highlighted: false
    }
]

export const features: FeatureCategory[] = [
    {
        category: "Design & Prototyping",
        items: [
            { name: "Figma Editor", starter: true, professional: true, organization: true },
            { name: "Advanced Drawing Tools", starter: true, professional: true, organization: true },
            { name: "Auto Layout", starter: true, professional: true, organization: true },
            { name: "Styles", starter: true, professional: true, organization: true },
            { name: "Plugins", starter: true, professional: true, organization: true },
            { name: "Unlimited File Storage", starter: true, professional: true, organization: true },
            { name: "Cross Platform", starter: true, professional: true, organization: true },
        ],
    },
    {
        category: "Collaboration",
        items: [
            { name: "Team Libraries", starter: false, professional: true, organization: true },
            { name: "Design Systems", starter: false, professional: true, organization: true },
            { name: "Advanced Permissions", starter: false, professional: false, organization: true },
            { name: "Guest Access", starter: true, professional: true, organization: true },
        ],
    },
    {
        category: "Developer Handoff",
        items: [
            { name: "Code Generation", starter: false, professional: true, organization: true },
            { name: "API Access", starter: false, professional: true, organization: true },
            { name: "Priority Support", starter: false, professional: false, organization: true },
            { name: "Dedicated Account Manager", starter: false, professional: false, organization: true },
        ],
    },
]