import React from 'react'
import { Button } from "@/components/ui/button"

const Section7 = () => {
    return (
        <div
            className="min-h-screen bg-[#00010C] flex items-center "
            style={{
                backgroundImage: "url('/assets/images/section-7-bg-img.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-6xl w-full mx-auto h-full">
                <div
                    className="w-full h-[454px] max-w-6xl rounded-2xl p-12 text-center relative overflow-hidden"
                    style={{
                        backgroundImage: "url('/assets/images/section-7-img-2.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "rgba(0,1,12,0.4)",
                        backgroundBlendMode: "overlay"
                    }}
                >
                    <div
                        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20"
                        style={{
                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
                            filter: 'blur(40px)',
                            transform: 'translate(30%, 30%)',
                        }}
                    />

                    <div className="relative z-10">
                        <div className="text-blue-400 text-2xl font-medium mb-4">
                            Get Started for Free
                        </div>

                        <h1 className="text-[48px] md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                            Ready to launch your <br /> <span className="text-blue-400">First</span> project
                        </h1>

                        <p className="text-gray-300 text-[20px] md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                            With lots of unique block, you can easily build a page without coding. Build your next landing page.
                        </p>

                        <Button
                            className={`px-16 py-5 font-medium text-[16px] bg-slate-900 text-white hover:text-white backdrop-blur-[16.2px] hover:bg-slate-800 border-slate-800`}
                            variant="outline"
                        >
                            Launch App
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section7;