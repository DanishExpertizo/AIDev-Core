import { FC } from "react";
import { FooterSectionProps } from "@/Types/Footer";
import FooterLink from "./FooterLink";
import MotionWrapper from "@/hooks/useAnimations";

const FooterSection: FC<FooterSectionProps> = ({ title, items, className }) => {
    return (
        <MotionWrapper delay={0.4} distance={40}
            className={`flex-1 flex items-center px-4 sm:px-6 rounded-2xl sm:rounded-3xl min-h-[220px] sm:min-h-[260px] lg:min-h-[299px] max-w-[288px] w-full border border-slate-700/50 ${className}`}
            style={{
                background:
                    "linear-gradient(154.62deg, rgba(0, 1, 12, 0.11) 8.02%, rgba(58, 168, 231, 0.11) 73.26%, rgba(58, 168, 231, 0.11) 105.83%)",
            }}
        >
            <div className="w-full text-center sm:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8">
                    {title}
                </h3>
                <div className="space-y-2 sm:space-y-3">
                    {items.map((item, idx) => (
                        <FooterLink key={idx} label={item} />
                    ))}
                </div>
            </div>
        </MotionWrapper>
    );
}

export default FooterSection;