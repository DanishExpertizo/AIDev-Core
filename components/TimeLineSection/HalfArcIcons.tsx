"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { computeArcPoints } from "@/lib/utils";
import { HalfArcIconsProps, Point } from "@/Types/TimeLineSection";
import useWindowSize from "@/hooks/useWindowSize";
import { ARC_BOX_SIZE, INWARD_OFFSET } from "./Constants";

const HalfArcIcons: React.FC<HalfArcIconsProps> = ({ side, angles, imagePrefix, altPrefix }) => {
    const { width: screenWidth } = useWindowSize();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const { dynamicBoxSize, isMediumScreen } = useMemo(() => {
        if (!mounted) return { dynamicBoxSize: ARC_BOX_SIZE, isMediumScreen: true };

        const isMd = screenWidth >= 768;
        const isLg = screenWidth >= 1024;

        return {
            isMediumScreen: isMd,
            dynamicBoxSize: isLg ? 480 : isMd ? 380 : 380,
        };
    }, [mounted, screenWidth]);

    const points = useMemo(
        () => computeArcPoints(dynamicBoxSize, INWARD_OFFSET, angles),
        [dynamicBoxSize, angles]
    );

    const boxSizeClasses =
        "w-[380px] h-[380px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px]";
    const iconSizeClasses =
        "w-[60px] h-[60px] md:w-[60px] md:h-[60px] lg:w-[75px] lg:h-[75px]";

    const offsetStyle = isMediumScreen
        ? { [side]: -dynamicBoxSize / 2 }
        : { [side]: -dynamicBoxSize };

    return (
        <div
            className="relative rotate-90 md:rotate-0"
            style={{ height: dynamicBoxSize }}
        >
            <div className={`absolute ${boxSizeClasses}`} style={offsetStyle}>
                <div className="absolute inset-0 rounded-full border-[#323558] border-[0.8px]" />
                {points.map((point: Point, index) => (
                    <Image
                        key={index}
                        src={`/assets/images/TimeLineSection/${imagePrefix}${index + 1}.png`}
                        alt={`${altPrefix}${index + 1}`}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none ${iconSizeClasses}`}
                        style={{ left: point.left, top: point.top }}
                        width={75}
                        height={75}
                    />
                ))}
            </div>
        </div>
    );
};

export default HalfArcIcons;
