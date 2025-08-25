"use client"

import MotionWrapper from "@/hooks/useAnimations";
import { motion } from "framer-motion";

const Background = () => {
    return (
        <>
            <motion.img
                initial={{ opacity: 0, y: 40, x: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}

                src="/assets/images/GetStartedSection/container-bg-img.png"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <MotionWrapper delay={0.4} distance={40}>
                <div
                    className="absolute inset-0 rounded-full opacity-20 z-0"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.1) 50%, transparent 100%)",
                        filter: "blur(40px)",
                        transform: "translate(30%, 30%)",
                    }}
                />
            </MotionWrapper>
        </>
    )
}

export default Background;