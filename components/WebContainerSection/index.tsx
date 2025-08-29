"use client";

import React from "react";
import { motion } from "framer-motion";
import SubHeading from "../SubHeading";
import MainHeading from "../MainHeading";
import MotionWrapper from "@/hooks/useAnimations";

const WebContainerSection = () => {
    return (
        <div className="min-h-screen bg-[#00010C] text-white">
            <div className="container max-w-6xl mx-auto py-20 px-5">
                <div className="mb-22 text-center">
                    <SubHeading />
                    <MainHeading
                        title1="Refactor Code Automatically,"
                        title2="Optimize Codebase"
                    />
                </div>

                <MotionWrapper
                    delay={0.3}
                    duration={0.6}
                    className="flex justify-center items-end rounded-2xl sm:pt-20 pt-8 border border-gray-800"
                    style={{
                        background:
                            "linear-gradient(175.32deg, rgba(0, 1, 12, 0.41) 1.88%, rgba(58, 168, 231, 0.41) 122.43%, rgba(58, 168, 231, 0.41) 182.61%)",
                        backdropFilter: "blur(18.6px)",
                    }}
                >
                    <motion.img
                        src="/assets/images/WebContainerSection/container-img.png"
                        alt="Section 4 Image"
                        className="w-[90%] md:w-[75%] pointer-events-none h-auto"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                    />
                </MotionWrapper>
            </div>
        </div>
    );
};

export default WebContainerSection;
