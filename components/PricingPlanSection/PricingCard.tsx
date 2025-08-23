import { FC } from "react"
import { PricingCardProps } from "@/Types/PricingPlanSection"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import PricingFeatures from "./PricingFeatures"

const PricingCard: FC<PricingCardProps> = ({ plan }) => {
    return (
        <Card
            className={`relative p-8 backdrop-blur-[12.6px] backdrop-saturate-150 mx-auto max-w-full sm:max-w-3/4 md:max-w-full ${plan.isPopular
                ? "bg-[linear-gradient(to_top,rgba(15,86,126,1)_0%,rgba(15,86,126,1)_10%,rgba(0,1,12,1)_60%)] border-[#6EC9FD]/50"
                : "bg-[#00010C] border-slate-600"
                }`}
        >
            {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#3AA8E7] text-white px-4 py-1 rounded-full text-[12px] lg:text-sm font-medium">
                        Most Popular
                    </span>
                </div>
            )}

            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                {plan.name}
            </h3>

            <div className="mb-6">
                <span className="text-white text-3xl sm:text-4xl font-bold">
                    ${plan.price}
                </span>
                <span
                    className={`text-lg ${plan.isPopular ? "text-white/80" : "text-gray-400"
                        }`}
                >
                    /month
                </span>
            </div>

            <p
                className={`text-sm mb-8 leading-relaxed ${plan.isPopular ? "text-white/90" : "text-gray-400"
                    }`}
            >
                {plan.description}
            </p>

            <PricingFeatures
                features={plan.features}
                isPopular={plan.isPopular ?? false}
            />

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
    )
}

export default PricingCard;