import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function FeatureReporter({
    idx,
    onReport,
    children,
}: {
    idx: number;
    onReport: (idx: number, inView: boolean, centerY: number | null) => void;
    children: React.ReactNode;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { amount: 0.5, margin: "-10% 0px -10% 0px" });

    useEffect(() => {
        const el = ref.current;
        if (!el) {
            onReport(idx, false, null);
            return;
        }
        const getCenter = () => {
            const rect = el.getBoundingClientRect();
            const center = rect.top + rect.height / 2 + window.scrollY;
            return center;
        };

        onReport(idx, Boolean(inView), getCenter());

        const onScrollOrResize = () => {
            onReport(idx, Boolean(inView), getCenter());
        };

        window.addEventListener("scroll", onScrollOrResize, { passive: true });
        window.addEventListener("resize", onScrollOrResize);
        return () => {
            window.removeEventListener("scroll", onScrollOrResize);
            window.removeEventListener("resize", onScrollOrResize);
            onReport(idx, false, null);
        };
    }, [inView, idx]);

    return (
        <div ref={ref} data-index={idx}>
            {children}
        </div>
    );
}

export default FeatureReporter;