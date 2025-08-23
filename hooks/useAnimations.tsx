"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionWrapperProps = {
    children: ReactNode;
    delay?: number;
    distance?: number;
    duration?: number;
    origin?: "top" | "bottom" | "left" | "right";
};

const MotionWrapper = ({
    children,
    delay = 0,
    distance = 40,
    duration = 0.6,
    origin = "bottom",
}: MotionWrapperProps) => {
    const originMap = {
        top: { y: -distance, x: 0 },
        bottom: { y: distance, x: 0 },
        left: { x: -distance, y: 0 },
        right: { x: distance, y: 0 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...originMap[origin] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;