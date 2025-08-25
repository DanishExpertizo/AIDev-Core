"use client"

import { MockupImageData } from "@/Types/HeroSection";
import { motion } from "framer-motion";

const MockupImage = ({ image, position, index }: { image: MockupImageData; position: 'left' | 'right'; index: number }) => (
    <motion.img
        initial={{ opacity: 0, x: position === "left" ? 40 : -40, rotate: image.rotation }}
        whileInView={{ opacity: 1, x: 0, rotate: image.rotation }}
        transition={{ duration: 0.5, delay: 1.2 - index * 0.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
        src={image.src}
        alt="App mockup"
        width={image.width}
        height={image.height}
        className="absolute rounded-[10px] object-cover"
        style={{
            width: `${image.width}px`,
            height: `${image.height}px`,
            top: `${image.top}px`,
            ...(position === "left"
                ? { left: `${image.left}px` }
                : { right: `${image.right}px` }),
            boxShadow:
                position === "left"
                    ? "-8px 4px 5.6px 0px #0000001F"
                    : position === "right" && image.rotation < -8
                        ? "6px 4px 5.6px 0px #0000001F"
                        : "8px 2px 5.6px 0px #0000001F",
            zIndex: image.zIndex,
        }}
    />
);

export default MockupImage;