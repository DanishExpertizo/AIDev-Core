
import { FC } from "react";
import { FeatureCategoryBlockProps } from "@/Types/PricingComparisonSection"
import FeatureRow from "./FeatureRow"

const FeatureCategoryBlock: FC<FeatureCategoryBlockProps> = ({ category }) => (
    <div key={category.category}>
        <div className="grid grid-cols-4 border-t border-slate-900">
            <div className="col-span-1 py-3">
                <h3 className="text-white text-xl lg:text-2xl font-medium">{category.category}</h3>
            </div>
        </div>
        {category.items.map((feature) => (
            <FeatureRow key={feature.name} feature={feature} />
        ))}
    </div>
)

export default FeatureCategoryBlock;