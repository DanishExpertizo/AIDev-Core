import React from 'react'
import Image from 'next/image';
import SubHeading from '../SubHeading';
import MainHeading from '../MainHeading';

const Section4 = () => {
    return (
        <div className="min-h-screen bg-[#00010C] text-white">
            <div className="container max-w-6xl mx-auto py-20 px-5">
                <div className="mb-22 text-center">
                    <SubHeading />
                    <MainHeading title1="Refactor Code Automatically," title2="Optimize Codebase" />
                </div>
                <Image
                    src="/assets/images/WebContainerSection/container-img.png"
                    alt="Section 4 Image"
                    width={800}
                    height={400}
                    className="w-full h-auto pointer-events-none"
                />
            </div>
        </div>
    )
}

export default Section4;