import { Check } from "lucide-react"
import { FC } from "react"
import { PricingFeaturesProps } from "@/Types/PricingPlanSection"

const PricingFeatures: FC<PricingFeaturesProps> = ({ features, isPopular }) => {
    return (
        <div className="space-y-4 mb-8">
            {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                    <Check
                        className={`w-5 h-5 flex-shrink-0 ${isPopular ? "text-white" : "text-blue-400"
                            }`}
                    />
                    <span
                        className={`text-sm ${isPopular ? "text-white/90" : "text-gray-300"
                            }`}
                    >
                        {feature}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default PricingFeatures;