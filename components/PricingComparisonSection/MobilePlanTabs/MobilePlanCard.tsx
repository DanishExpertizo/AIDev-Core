import { Button } from "@/components/ui/button"
import { FeatureItem, MobilePlanCardProps } from "@/Types/PricingComparisonSection"
import { Check, X } from "lucide-react"
import { FC } from "react"

const MobilePlanCard: FC<MobilePlanCardProps> = ({ plan, features }) => {

    return (
        <div
            className={`p-6 rounded-lg ${plan.highlighted ? "bg-[#030416] border border-slate-800" : "bg-[#00010C]"
                }`}
        >
            <div className="text-center mb-6">
                <div className="text-lg text-gray-400 mb-2">{plan.name}</div>
                <div className="text-3xl text-white mb-1">
                    {plan.price}
                    <span className="text-base text-gray-400">{plan.period}</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">{plan.billing}</div>
                <Button
                    className={`w-full max-w-[300px] mx-auto py-3 font-medium ${plan.buttonStyle}`}
                    variant="outline"
                >
                    {plan.buttonText}
                </Button>
            </div>

            <div className="space-y-6">
                {features.map((category) => (
                    <div key={category.category}>
                        <h3 className="text-white text-xl font-medium mb-4">{category.category}</h3>
                        <div className="space-y-3">
                            {category.items.map((feature) => {
                                const included = feature[plan.name.toLowerCase() as keyof FeatureItem] ?? false
                                return (
                                    <div
                                        key={feature.name}
                                        className="flex items-center justify-between"
                                    >
                                        <span className="text-gray-300 text-sm">{feature.name}</span>
                                        {included ? (
                                            <Check className="w-4 h-4 text-green-500" />
                                        ) : (
                                            <X className="w-4 h-4 text-gray-500" />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobilePlanCard;