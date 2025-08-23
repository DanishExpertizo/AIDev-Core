"use client";

import { useEffect } from "react";

const useScrollReveal = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        (async () => {
            const ScrollReveal = (await import("scrollreveal")).default;

            const sr = ScrollReveal({ reset: true });

            const animations: { selector: string; options: Record<string, any> }[] = [
                {
                    selector: ".sr-main-heading",
                    options: { origin: "bottom", distance: "20px", duration: 600, delay: 300, easing: "ease-out", opacity: 0 },
                },
                {
                    selector: ".sr-sub-heading",
                    options: { origin: "bottom", distance: "20px", duration: 600, delay: 200, easing: "ease-out", opacity: 0 },
                },
                {
                    selector: ".sr-text",
                    options: { origin: "bottom", distance: "20px", duration: 600, delay: 400, easing: "ease-out", opacity: 0 },
                },
                {
                    selector: ".sr-button",
                    options: { origin: "bottom", distance: "20px", duration: 600, delay: 500, easing: "ease-out", opacity: 0 },
                },
                {
                    selector: ".sr-general",
                    options: { origin: "bottom", distance: "40px", duration: 600, delay: 400, easing: "ease-out", opacity: 0 },
                },
                {
                    selector: ".sr-navbar",
                    options: { origin: "top", distance: "40px", duration: 600, delay: 300, easing: "ease-out", opacity: 0 },
                },
                // Screenshots (loop-friendly)
                ...Array.from({ length: 3 }, (_, i) => ({
                    selector: `.sr-left-screenshots-${i}`,
                    options: { origin: "right", distance: "40px", duration: 500, delay: 800 - i * 200, easing: "ease-in-out" },
                })),
                ...Array.from({ length: 3 }, (_, i) => ({
                    selector: `.sr-right-screenshots-${i}`,
                    options: { origin: "left", distance: "40px", duration: 500, delay: 800 - i * 200, easing: "ease-in-out" },
                })),
                {
                    selector: ".sr-herosection-card",
                    options: { origin: "bottom", distance: "30px", duration: 600, delay: 200, easing: "ease-out", opacity: 0 },
                },
                {
                    selector: ".sr-pricingplan-card-professional",
                    options: { origin: "bottom", distance: "40px", duration: 500, delay: 200, easing: "ease-in-out" },
                },
                {
                    selector: ".sr-pricingplan-card-starter",
                    options: { origin: "bottom", distance: "40px", duration: 500, delay: 400, easing: "ease-in-out" },
                },
                {
                    selector: ".sr-pricingplan-card-elite",
                    options: { origin: "bottom", distance: "40px", duration: 500, delay: 400, easing: "ease-in-out" },
                },
            ];

            animations.forEach(({ selector, options }) => sr.reveal(selector, options));
        })();
    }, []);
};

export default useScrollReveal;
