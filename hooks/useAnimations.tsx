"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionWrapperProps = {
    children: ReactNode;
    delay?: number;
    distance?: number;
    duration?: number;
    origin?: "top" | "bottom" | "left" | "right";
    ease?: "easeOut" | "easeIn" | "easeInOut";
    className?: string;
    style?: React.CSSProperties;
};

const MotionWrapper = ({
    children,
    delay = 0,
    distance = 40,
    duration = 0.6,
    origin = "bottom",
    ease = "easeOut",
    className = "",
    style = {}
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
            transition={{ duration, delay, ease }}
            viewport={{ once: true, amount: 0.2 }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;