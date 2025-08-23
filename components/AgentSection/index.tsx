"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import MainHeading from "../MainHeading";
import SubHeading from "../SubHeading";
import { FEATURES } from "./data";
import FeatureItem from "./FeatureItem";
import { motion } from "framer-motion";
import ParallaxImage from "./ParallaxImage";

export default function Section2() {
    const listWrapRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIdx, setActiveIdx] = useState(0);
    const [dotY, setDotY] = useState(0);

    // Intersection Observer to detect active element
    useEffect(() => {
        const els = itemRefs.current.filter(
            (el): el is HTMLDivElement => el !== null
        );
        if (!els.length) return;

        const obs = new IntersectionObserver(
            (entries) => {
                let maxVisible: { idx: number; ratio: number } | null = null;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = Number(entry.target.getAttribute("data-index"));
                        if (!Number.isNaN(idx)) {
                            if (!maxVisible || entry.intersectionRatio > maxVisible.ratio) {
                                maxVisible = { idx, ratio: entry.intersectionRatio };
                            }
                        }
                    }
                });

                if (maxVisible) {
                    setActiveIdx(maxVisible.idx);
                }
            },
            {
                root: null,
                threshold: [0.25, 0.5, 0.75],
                rootMargin: "-20% 0px -20% 0px",
            }
        );

        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, [FEATURES.length]);

    // Calculate the blue dot position when active index changes
    useLayoutEffect(() => {
        const el = itemRefs.current[activeIdx];
        if (!el) return;

        const y = el.offsetTop + el.clientHeight / 2 - 8;
        setDotY(y);
    }, [activeIdx]);

    const setItemRef = (idx: number) => (el: HTMLDivElement | null) => {
        itemRefs.current[idx] = el;
    };

    const items = useMemo(() => FEATURES, []);

    return (
        <section className="min-h-screen bg-[#00010C] text-white px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
                <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
                    <SubHeading className="sr-sub-heading" />
                    <MainHeading
                        title1="The fastest way to build"
                        title2="production-ready apps"
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-20">
                    {/* LEFT: timeline + features */}
                    <div
                        ref={listWrapRef}
                        className="relative flex-2 md:flex-1 pl-10 sm:pl-8"
                    >
                        {/* Vertical line */}
                        <div className="absolute left-0 sm:left-0 top-3 bottom-0 w-px bg-white/10" />

                        {/* Render placeholder dots */}
                        {items.map((_, idx) => {
                            const el = itemRefs.current[idx];
                            const top =
                                (el?.offsetTop ?? 0) +
                                ((el?.clientHeight ?? 0) / 2 - 8);

                            return (
                                <span
                                    key={idx}
                                    className="absolute -left-1.5 w-3.5 h-3.5 rounded-full bg-white/20"
                                    style={{ top }}
                                />
                            );
                        })}

                        {/* 🔵 Active Blue Dot with scale + glow */}
                        <motion.span
                            layout
                            className="absolute -left-1.5 w-3.5 h-3.5 rounded-full bg-[#3AA8E7]"
                            animate={{
                                y: dotY,
                                scale: [1, 1.2, 1], // scale animation
                                boxShadow: [
                                    "0 0 0px rgba(58,168,231,0)",
                                    "0 0 6px rgba(58,168,231,0.6)",
                                    "0 0 0px rgba(58,168,231,0)",
                                ],
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.25, 1, 0.5, 1],
                            }}
                        />

                        {/* Feature list */}
                        <div className="space-y-6 sm:space-y-8">
                            {items.map((feature, idx) => (
                                <div key={idx} ref={setItemRef(idx)} data-index={idx}>
                                    <FeatureItem
                                        feature={{ ...feature, active: idx === activeIdx }}
                                    />
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
