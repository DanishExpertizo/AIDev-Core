import { cn } from "@/lib/utils";
import { Feature } from "@/Types/AgentSection";

const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div
        className={cn(
            "relative mb-16 md:mb-12 lg:mb-20 flex items-start gap-4",
            feature.active ? "" : "opacity-50"
        )}
    >
        <div className="space-y-2">
            <h3
                className={cn(
                    feature.active
                        ? "text-white text-xl sm:text-2xl lg:text-3xl"
                        : "text-gray-500 text-lg sm:text-xl lg:text-2xl",
                    "font-medium transition-all ease-in-out"
                )}
            >
                {feature.title}
            </h3>
            <p className={`text-white/70 text-sm sm:text-lg lg:text-xl transition-all duration-500 ease-in-out leading-relaxed max-w-sm ${feature.active ? "opacity-100" : "opacity-0 text-sm"}`}>
                {feature.active ? feature.description : ""}
            </p>
        </div>
    </div>
);

export default FeatureItem;