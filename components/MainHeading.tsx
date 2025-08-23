import React from 'react'

const MainHeading = ({ title1, title2 = '' }: { title1: string, title2?: string | React.ReactNode }) => {
    return (
        <h1 className="mb-6 text-[34px] @max-xs:text-3xl sm:text-[42px] md:text-5xl lg:text-[56px] leading-tight text-white">
            {title1} {" "}
            <br className="hidden sm:block" />
            {title2}
        </h1>
    )
}

export default MainHeading;