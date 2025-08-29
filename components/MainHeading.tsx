import MotionWrapper from "@/hooks/useAnimations";
import React from "react";

const MainHeading = ({ title1, title2 = '', className = '' }: { title1: string, title2?: string | React.ReactNode, className?: string }) => {

    return (
        <MotionWrapper delay={0.3} distance={20}>
            <h1
                className={`mb-6 w-full text-[34px] @max-xs:text-3xl sm:text-[42px] md:text-5xl lg:text-[56px] leading-tight text-white ${className}`}>
                {title1} {" "}
                <br className="hidden sm:block" />
                {title2}
            </h1>
        </MotionWrapper>
    )
}

export default MainHeading;