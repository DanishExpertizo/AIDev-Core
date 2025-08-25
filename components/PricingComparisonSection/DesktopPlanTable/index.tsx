import MotionWrapper from "@/hooks/useAnimations";
import { features, plans } from "../data";
import FeatureCategoryBlock from "./FeatureCategoryBlock";
import PlanHeader from "./PlanHeader";

const DesktopPlanTable = () => (
    <MotionWrapper delay={0.4} distance={40}>
        <div className="hidden lg:block w-full h-full overflow-x-auto">
            <div className="min-w-[640px]">
                <div className="grid grid-cols-4">
                    <div className="col-span-1 py-4" />
                    {plans.map((plan) => (
                        <PlanHeader key={plan.name} plan={plan} />
                    ))}
                </div>

                {features.map((category) => (
                    <FeatureCategoryBlock key={category.category} category={category} />
                ))}
            </div>
        </div>
    </MotionWrapper>
)

export default DesktopPlanTable;