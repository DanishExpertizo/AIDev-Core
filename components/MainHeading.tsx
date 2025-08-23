import React from "react";

const MainHeading = ({ title1, title2 = '', ref }: { title1: string, title2?: string | React.ReactNode, ref?: React.RefObject<HTMLHeadingElement | null> }) => {

    return (
        <h1
            ref={ref}
            className="mb-6 text-[34px] @max-xs:text-3xl sm:text-[42px] md:text-5xl lg:text-[56px] leading-tight text-white sr-main-heading">
            {title1} {" "}
            <br className="hidden sm:block" />
            {title2}
        </h1>
    )
}

export default MainHeading;