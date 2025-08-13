import Image from 'next/image';

export default function Section2() {
    const features: { title: string; description?: string; active?: boolean }[] = [
        {
            title: "Ready-to-use database",
            description:
                "Take over and run commands, edit code, or use the browser for Devin at any time",
            active: true,
        },
        { title: "Ready-to-use database" },
        { title: "Ready-to-use database" },
        { title: "Ready-to-use database" },
    ]

    return (
        <div className="min-h-screen bg-[#00010C] text-white">
            <div className="container max-w-6xl mx-auto py-20">
                <div className="mb-22 text-center">
                    <p className="text-cyan-400 text-[24px] tracking-wide">Meet AIDEV Agent</p>
                    <h1 className="mt-2 text-[40px] lg:text-[48px] xl:text-[56px] leading-tight">
                        The fastest way to build
                        <br />
                        production-ready apps
                    </h1>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative pl-8">
                        <div className="absolute -left-[1px] top-3 bottom-0 w-px bg-white/10" />
                        <div className="space-y-8">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className={`relative mb-20 flex items-start gap-4 ${feature.active ? "" : "opacity-50"}`}
                                >
                                    <span
                                        className={`absolute -left-10 mt-3 inline-block w-3.5 h-3.5 rounded-full ${feature.active
                                            ? "bg-[#3AA8E7] shadow-[0_0_0_2px_rgba(58,168,231,0.25)]"
                                            : "bg-white"
                                            }`}
                                    />
                                    <div className="space-y-2">
                                        <h3 className={`${feature.active ? "text-white text-[32px]" : "text-gray-500"} font-medium text-[24px]`}>
                                            {feature.title}
                                        </h3>
                                        {feature.active && (
                                            <p className="text-white/70 text-md leading-relaxed max-w-sm">
                                                Take over and run commands, edit code, or use
                                                <br />
                                                the browser for Devin at any time
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Image
                        className="w-full pointer-events-none max-w-[730px] object-cover mx-auto lg:mx-0"
                        src="/assets/images/section-2-img.png"
                        alt="AIDEV Agent interface screenshot"
                        loading="lazy"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}
