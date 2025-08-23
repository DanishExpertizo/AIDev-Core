"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxImage() {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <div
            ref={ref}
            className="flex-1 rounded-2xl overflow-hidden relative"
            style={{
                background:
                    "linear-gradient(154.62deg, rgba(0, 1, 12, 0.41) 8.02%, rgba(58, 168, 231, 0.41) 88.31%)",
                backdropFilter: "blur(18.6px)",
            }}
        >
            <motion.div style={{ y }} className="max-w-[480px] md:max-w-[600px] lg:max-w-[730px]" transition={{ type: "spring", stiffness: 50 }}>
                <Image
                    className="pointer-events-none w-full object-cover mx-auto lg:mx-0"
                    src="/assets/images/AgentSection/side-img.png"
                    alt="AIDEV Agent interface screenshot"
                    loading="lazy"
                    width={730}
                    height={500}
                />
            </motion.div>
        </div>
    );
}
