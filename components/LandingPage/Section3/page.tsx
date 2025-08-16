import React from 'react'
import Image from 'next/image';

const Section3 = () => {
    return (
        <div
            className="min-h-screen bg-[#00010C] flex items-center justify-center relative"
            style={{
                backgroundImage: "url('/assets/images/section-3-bg-img.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="relative w-[462px] h-[462px] flex items-center justify-center">
                <div
                    className="absolute inset-0 rounded-full p-[3px]"
                    style={{
                        background:
                            "linear-gradient(144.28deg, #3AA8E7 3.88%, #010002 34.44%, #00010C 68.64%, #3AA8E7 98.74%)",
                        boxShadow: `
                            0 0 40px rgba(58, 168, 231, 0.4),
                            0 0 80px rgba(58, 168, 231, 0),
                            0 0 120px rgba(58, 168, 231, 0.1),
                            0 0 160px rgba(58, 168, 231, 0.1),
                            0 0 200px rgba(58, 168, 231, 0.01)
                        `,
                    }}
                >
                    <div className="w-full h-full rounded-full bg-[#00010C] flex items-center justify-center absolute top-0">
                        <div className="text-center px-8">
                            <div className="text-blue-400 text-2xl font-medium mb-3">
                                Meet AIDEV Agent
                            </div>

                            <h1 className="text-[48px] overflow-visible text-white mb-3 leading-tight">
                                Get you <span className="text-blue-400">AI DEV</span> for free in your favorite IDE
                            </h1>

                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                                With lots of unique block, you can easily build a page without coding. Build your next landing page.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute inset-0 rounded-full p-[3px] pointer-events-none"
                />

                <Image
                    src="/assets/images/star-img.png"
                    alt="star"
                    width={120}
                    height={120}
                    className="absolute top-0 left-1/2 translate-x-[25%] -translate-y-[35%]"
                />

                <Image
                    src="/assets/images/star-img.png"
                    alt="star"
                    width={120}
                    height={120}
                    className="absolute bottom-0 left-1/2 -translate-x-[120%] translate-y-[35%]"
                />
            </div>
        </div>
    )
}

export default Section3
