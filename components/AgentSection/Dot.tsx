import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function Dot({ y }: { y: number }) {
    const controls = useAnimation();
    useEffect(() => {
        controls.start({
            y,
            scale: [1, 1.12, 1],
            transition: {
                y: { duration: 0.4, ease: "easeInOut" },
                scale: { duration: 0.4, ease: "easeInOut" },
            },
        });
    }, [y, controls]);

    return (
        <motion.span
            animate={controls}
            initial={{ y, scale: 1 }}
            className="absolute -left-1.5 w-3.5 h-3.5 rounded-full bg-[#3AA8E7] z-10"
            style={{
                willChange: "transform",
                boxShadow: `0 0 10px 4px rgba(59,130,246,0.6), 0 15px 50px -12px rgba(59,130,246,0.4)`,
            }}
        />
    );
}

export default Dot;