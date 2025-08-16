import React from 'react'
import Image from 'next/image';

const Section4 = () => {
    return (
        <div className="min-h-screen bg-[#00010C] text-white">
            <div className="container max-w-6xl mx-auto py-20">
                <div className="mb-22 text-center">
                    <p className="text-cyan-400 text-[24px] tracking-wide">Meet AIDEV Agent</p>
                    <h1 className="mt-2 text-[40px] lg:text-[48px] xl:text-[56px] leading-tight">
                        Refactor Code Automatically,
                        <br />
                        Optimize Codebase
                    </h1>
                </div>
                <Image
                    src="/assets/images/section-4-img.png"
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