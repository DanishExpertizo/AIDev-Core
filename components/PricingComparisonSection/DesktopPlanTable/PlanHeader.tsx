import { FC } from "react";
import { Button } from "@/components/ui/button";
import { PlanHeaderProps } from "@/Types/PricingComparisonSection";

const PlanHeader: FC<PlanHeaderProps> = ({ plan }) => (
    <div className={`p-6 text-left ${plan.highlighted ? "bg-[#030416]" : ""}`}>
        <div className="text-lg lg:text-2xl text-gray-400 mb-2">{plan.name}</div>
        <div className="text-[26px] md:text-[35px] lg:text-[40px] text-white mb-1">
            {plan.price}
            <span className="text-base lg:text-lg text-gray-400">{plan.period}</span>
        </div>
        <div className="text-sm text-gray-500 mb-4">{plan.billing}</div>
        <Button
            className={`w-full py-3 font-medium text-sm lg:text-[16px] ${plan.buttonStyle}`}
            variant="outline"
        >
            {plan.buttonText}
        </Button>
    </div>
)

export default PlanHeader;