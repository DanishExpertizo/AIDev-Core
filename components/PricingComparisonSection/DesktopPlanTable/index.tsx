import { features, plans } from "../data";
import FeatureCategoryBlock from "./FeatureCategoryBlock";
import PlanHeader from "./PlanHeader";

const DesktopPlanTable = () => (
    <div className="hidden lg:block w-full h-full overflow-x-auto sr-general">
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
)

export default DesktopPlanTable;