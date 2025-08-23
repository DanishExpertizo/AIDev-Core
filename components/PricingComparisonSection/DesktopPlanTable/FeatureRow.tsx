import { FC } from "react";
import { Check, X } from "lucide-react";
import { FeatureItem, FeatureRowProps } from "@/Types/PricingComparisonSection"

const FeatureRow: FC<FeatureRowProps> = ({ feature }) => (
    <div className="grid grid-cols-4 border-t border-slate-900">
        <div className="col-span-1 py-4">
            <span className="text-gray-300 text-base lg:text-[18px]">{feature.name}</span>
        </div>

        {["starter", "professional", "organization"].map((planKey) => {
            const included = feature[planKey as keyof FeatureItem] as boolean
            return (
                <div
                    key={planKey}
                    className={`px-6 py-4 text-center ${planKey === "professional" ? "bg-[#030518]" : ""
                        }`}
                >
                    {included ? (
                        <Check className="w-4 h-4 text-green-500 mx-auto" />
                    ) : (
                        <X className="w-4 h-4 text-gray-500 mx-auto" />
                    )}
                </div>
            )
        })}
    </div>
)

export default FeatureRow;