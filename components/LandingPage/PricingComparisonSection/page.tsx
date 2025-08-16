import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export function PricingComparison() {
    const features = [
        {
            category: "Build",
            items: [
                { name: "Real-time Code Suggestions", starter1: true, starter2: true, starter3: true },
                { name: "Code Refactoring & Optimization", starter1: true, starter2: true, starter3: true },
                { name: "Team Collaboration Tools", starter1: false, starter2: true, starter3: true },
            ],
        },
        {
            category: "Deploy",
            items: [
                { name: "API & IDE Integrations", starter1: false, starter2: true, starter3: true },
                { name: "Priority Support", starter1: true, starter2: true, starter3: true },
                { name: "User Licenses", starter1: false, starter2: false, starter3: true },
                { name: "Security & Compliance", starter1: true, starter2: true, starter3: true },
            ],
        },
        {
            category: "Promotions",
            items: [
                { name: "Custom Model Training", starter1: true, starter2: true, starter3: true },
                { name: "Extended Enterprise-level", starter1: false, starter2: true, starter3: true },
                { name: "Dedicated Account Manager", starter1: false, starter2: false, starter3: true },
                { name: "Customization", starter1: true, starter2: true, starter3: true },
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-[#00010C] py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div>
                    <h1 className="text-[56px] text-center text-white mb-8">Compare Plans</h1>

                    <div className="grid grid-cols-4 ">
                        <div className="col-span-1 py-4 text-left">
                            <span className="text-gray-300 text-sm font-medium"></span>
                        </div>

                        <div className="p-6 text-left">
                            <div className="text-2xl text-gray-400 mb-2">Starter</div>
                            <div className="text-[40px] text-white mb-1">$200<span className="text-lg text-gray-400 mb-4">/month</span></div>
                            <Button
                                className={`w-full py-3 font-medium text-[16px] bg-slate-900 text-white hover:text-white backdrop-blur-[16.2px] hover:bg-slate-800 border-slate-800`}
                                variant="outline"
                            > 
                                Launch App
                            </Button>
                        </div>

                        <div className="p-6 text-left bg-[#030416]">
                            <div className="text-2xl text-gray-400 mb-2">Starter</div>
                            <div className="text-[40px] text-white mb-1">$200<span className="text-lg text-gray-400 mb-4">/month</span></div>
                            <Button
                                className={`w-full py-3 font-medium text-[16px] bg-white text-slate-900 hover:bg-gray-300`}
                                variant="outline"
                            >
                                Launch App
                            </Button>
                        </div>

                        <div className="p-6 text-left">
                            <div className="text-2xl text-gray-400 mb-2">Starter</div>
                            <div className="text-[40px] text-white mb-1">$200<span className="text-lg text-gray-400 mb-4">/month</span></div>
                            <Button
                                className={`w-full py-3 font-medium text-[16px] bg-slate-900 text-white hover:text-white backdrop-blur-[16.2px] hover:bg-slate-800 border-slate-800`}
                                variant="outline"
                            >
                                Launch App
                            </Button>
                        </div>
                    </div>

                    {features.map((category) => (
                        <div key={category.category}>
                            <div className="grid grid-cols-4 border-t border-slate-900">
                                <div className="col-span-1 py-3 text-left">
                                    <h3 className="text-white text-2xl font-medium">{category.category}</h3>
                                </div>
                                <div className="col-span-3"></div>
                            </div>

                            {category.items.map((feature) => (
                                <div key={feature.name} className="grid grid-cols-4 border-t border-slate-900">
                                    <div className="col-span-1 py-4 text-left">
                                        <span className="text-gray-300 text-[18px]">{feature.name}</span>
                                    </div>

                                    <div className="px-6 py-4 text-center">
                                        {feature.starter1 ? (
                                            <Check className="w-4 h-4 text-green-500 mx-auto" />
                                        ) : (
                                            <X className="w-4 h-4 text-gray-500 mx-auto" />
                                        )}
                                    </div>

                                    <div className="px-6 py-4 text-center bg-[#030518]">
                                        {feature.starter2 ? (
                                            <Check className="w-4 h-4 text-green-500 mx-auto" />
                                        ) : (
                                            <X className="w-4 h-4 text-gray-500 mx-auto" />
                                        )}
                                    </div>

                                    <div className="px-6 py-4 text-center">
                                        {feature.starter3 ? (
                                            <Check className="w-4 h-4 text-green-500 mx-auto" />
                                        ) : (
                                            <X className="w-4 h-4 text-gray-500 mx-auto" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
