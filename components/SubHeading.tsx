import MotionWrapper from '@/hooks/useAnimations';
import React from 'react'

const SubHeading = ({ title }: { className?: string, title?: string }) => {
    return (
        <MotionWrapper delay={0.3} distance={20}>
            <p className={`text-cyan-400 text-base md:text-xl lg:text-2xl tracking-wide`}>
                {title ?? "Meet AIDEV Agent"}
            </p>
        </MotionWrapper>
    )
}

export default SubHeading;