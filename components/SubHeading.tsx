import React from 'react'

const SubHeading = ({ className = "", title }: { className?: string, title?: string }) => {
    return (
        <p className={`text-cyan-400 text-base ${className} md:text-xl lg:text-2xl tracking-wide`}>
            {title ?? "Meet AIDEV Agent"}
        </p>
    )
}

export default SubHeading;