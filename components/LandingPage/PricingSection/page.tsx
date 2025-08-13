import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingSection() {
    const plans = [
        {
            name: "Starter",
            price: 200,
            description: "For startups and SMBs Looking to launch today and grow their subscription business fast",
            features: ["Point 1", "Point 1", "Point 1", "Point 1", "Point 1"],
            isPopular: false,
        },
        {
            name: "Professional",
            price: 220,
            description: "For startups and SMBs Looking to launch today and grow their subscription business fast",
            features: ["Point 1", "Point 1", "Point 1", "Point 1", "Point 1"],
            isPopular: true,
        },
        {
            name: "Elite - Full Access",
            price: 300,
            description: "For startups and SMBs Looking to launch today and grow their subscription business fast",
            features: ["Point 1", "Point 1", "Point 1", "Point 1", "Point 1"],
            isPopular: false,
        },
    ]

    return (
        <section className="min-h-screen bg-[#00010C] py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl text-white mb-4">
                        Choose the right plan
                        <br />
                        for your needs
                    </h1>
                    <p className="text-blue-400 text-lg">Flexible Plans for Every Developer - Start Free</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={`relative p-8 backdrop-blur-[12.6px] backdrop-saturate-150 ${plan.isPopular
                                ? "bg-[linear-gradient(to_top,rgba(15,86,126,1)_0%,rgba(15,86,126,1)_10%,rgba(0,1,12,1)_60%)] border-[#6EC9FD]/50"
                                : "bg-[#00010C] border-slate-600"
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-[#3AA8E7] text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className={`text-xl font-semibold mb-4 ${plan.isPopular ? "text-white" : "text-white"}`}>
                                {plan.name}
                            </h3>

                            <div className="mb-6">
                                <span className="text-white text-4xl font-bold">${plan.price}</span>
                                <span className={`text-lg ${plan.isPopular ? "text-white/80" : "text-gray-400"}`}>/month</span>
                            </div>

                            <p className={`text-sm mb-8 leading-relaxed ${plan.isPopular ? "text-white/90" : "text-gray-400"}`}>
                                {plan.description}
                            </p>

                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center gap-3">
                                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? "text-white" : "text-blue-400"}`} />
                                        <span className={`text-sm ${plan.isPopular ? "text-white/90" : "text-gray-300"}`}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={`w-full py-3 font-medium ${plan.isPopular
                                    ? "bg-white text-slate-900 hover:bg-gray-100"
                                    : "bg-slate-700 text-white hover:bg-slate-600 border-slate-600"
                                    }`}
                                variant={plan.isPopular ? "default" : "outline"}
                            >
                                Launch App
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
