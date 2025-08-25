"use client";

import { useEffect } from "react";

export function useSmoothScroll(duration: number = 1000, easing: "quint" | "expo" = "quint") {
    useEffect(() => {
        function smoothScrollTo(targetY: number, duration = 800) {
            const startY = window.scrollY;
            const diff = targetY - startY;
            let start: number;

            const easeInOutQuint = (t: number) =>
                t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;

            function step(timestamp: number) {
                if (!start) start = timestamp;
                const time = timestamp - start;
                const percent = Math.min(time / duration, 1);
                const eased = easeInOutQuint(percent);

                window.scrollTo(0, startY + diff * eased);

                if (time < duration) {
                    requestAnimationFrame(step);
                }
            }

            requestAnimationFrame(step);
        }

        const anchors = document.querySelectorAll("a[href^='#']");
        const handleClick = (e: Event) => {
            e.preventDefault();
            const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")!;
            const target = document.querySelector(href);
            if (target) {
                smoothScrollTo(target.getBoundingClientRect().top + window.scrollY, duration);
            }
        };

        anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));
        return () => anchors.forEach((anchor) => anchor.removeEventListener("click", handleClick));
    }, [duration, easing]);
}