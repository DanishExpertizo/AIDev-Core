import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export function PricingComparison() {
    const features = [
        {
            category: "Build",
            items: [
                { name: "Real-time Code Suggestions", starter1: true, starter2: true, starter3: true },
                { name: "Code Refactoring & Optimization", starter1: true, starter2: true, starter3: true },
                { name: "Team Collaboration Tools", starter1: false, starter2: false, starter3: true },
            ],
        },
        {
            category: "Deploy",
            items: [
                { name: "API & IDE Integrations", starter1: false, starter2: true, starter3: true },
                { name: "Priority Support", starter1: true, starter2: true, starter3: true },
                { name: "User Licenses", starter1: true, starter2: true, starter3: true },
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
            <div className="container text-center max-w-4xl mx-auto py-8">
                <h1 className="text-2xl font-semibold text-white mb-8">Compare Plans</h1>

                <div className="grid grid-cols-3 gap-0 max-w-3xl mx-auto">
                    <div className="p-6 text-center">
                        <div className="text-sm text-gray-400 mb-2">Starter</div>
                        <div className="text-2xl font-bold text-white mb-1">$200</div>
                        <div className="text-sm text-gray-400 mb-4">/month</div>
                        <Button
                            className={`w-full py-3 font-medium bg-slate-700 text-white hover:bg-slate-600 border-slate-600`}
                            variant="outline"
                        >
                            Launch App
                        </Button>
                    </div>

                    <div className="p-6 text-center">
                        <div className="text-sm text-gray-400 mb-2">Starter</div>
                        <div className="text-2xl font-bold text-white mb-1">$200</div>
                        <div className="text-sm text-gray-400 mb-4">/month</div>
                        <Button
                            className={`w-full py-3 font-medium bg-white text-slate-900 hover:bg-gray-100`}
                            variant="outline"
                        >
                            Launch App
                        </Button>
                    </div>

                    <div className="p-6 text-center">
                        <div className="text-sm text-gray-400 mb-2">Starter</div>
                        <div className="text-2xl font-bold text-white mb-1">$200</div>
                        <div className="text-sm text-gray-400 mb-4">/month</div>
                        <Button
                            className={`w-full py-3 font-medium bg-slate-700 text-white hover:bg-slate-600 border-slate-600`}
                            variant="outline"
                        >
                            Launch App
                        </Button>
                    </div>
                </div>
            </div>

            <div>
                {features.map((category) => (
                    <div key={category.category}>
                        <div className="px-6 py-3 border-t border-slate-700">
                            <h3 className="text-white font-medium text-left">{category.category}</h3>
                        </div>

                        {category.items.map((feature) => (
                            <div key={feature.name} className="grid grid-cols-4 border-t border-slate-700">
                                <div className="col-span-1 px-6 py-4 text-left">
                                    <span className="text-gray-300 text-sm">{feature.name}</span>
                                </div>

                                <div className="px-6 py-4 text-center">
                                    {feature.starter1 ? (
                                        <Check className="w-4 h-4 text-green-500 mx-auto" />
                                    ) : (
                                        <X className="w-4 h-4 text-gray-500 mx-auto" />
                                    )}
                                </div>

                                <div className="px-6 py-4 text-center bg-slate-800">
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
    )
}
