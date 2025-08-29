"use client";

import { useActiveIndex } from "@/hooks/useActiveIndex";
import { useLayoutEffect, useMemo, useState } from "react";
import { FEATURES } from "./data";
import MainHeading from "../MainHeading";
import SubHeading from "../SubHeading";
import Dot from "./Dot";
import FeatureItem from "./FeatureItem";
import FeatureReporter from "./FeatureReporter";
import ParallaxImage from "./ParallaxImage";

export default function AgentSection() {
    const items = useMemo(() => FEATURES, []);
    const { activeIdx, setItemRef, handleReport, itemRefs } = useActiveIndex();
    const [dotY, setDotY] = useState(0);

    useLayoutEffect(() => {
        const el = itemRefs.current[activeIdx];
        if (!el) return;
        const y = el.offsetTop + el.clientHeight / 2 - 8;
        setDotY(y);
    }, [activeIdx]);

    return (
        <section id="ai-agent" className="min-h-screen bg-[#00010C] text-white px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
                <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
                    <SubHeading />
                    <MainHeading title1="The fastest way to build" title2="production-ready apps" />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-20">
                    <div className="relative flex-2 md:flex-1 pl-10 sm:pl-8">
                        <div className="absolute left-0 sm:left-0 top-3 bottom-0 w-px bg-white/10" />

                        {items.map((_, idx) => {
                            const el = itemRefs.current[idx];
                            const top = (el?.offsetTop ?? 0) + ((el?.clientHeight ?? 0) / 2 - 8);
                            return (
                                <span key={idx} className="absolute -left-1.5 w-3.5 h-3.5 rounded-full bg-white/20" style={{ top }} />
                            );
                        })}

                        <Dot y={dotY} />

                        <div className="space-y-6 sm:space-y-8">
                            {items.map((feature, idx) => (
                                <div key={idx} ref={setItemRef(idx)} data-index={idx}>
                                    <FeatureReporter idx={idx} onReport={handleReport}>
                                        <FeatureItem feature={{ ...feature, active: idx === activeIdx }} />
                                    </FeatureReporter>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ParallaxImage />
                </div>
            </div>
        </section>
    );
}
