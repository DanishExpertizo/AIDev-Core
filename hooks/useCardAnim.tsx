import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useCardEntranceAnim(
    ref: React.RefObject<HTMLDivElement | null>,
    options?: Record<string, any>
) {
    useEffect(() => {
        if (ref.current) {
            ScrollReveal().reveal(ref.current, {
                duration: 1000,
                delay: 300,
                distance: "30px",
                origin: "bottom",
                // easing: "ease-out",
                opacity: 0,
                ...options,
            });
        }
    }, [ref, options]);
}