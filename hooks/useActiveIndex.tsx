"use client"

import { useCallback, useEffect, useRef, useState } from "react";

export function useActiveIndex() {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const inViewSetRef = useRef<Set<number>>(new Set());
    const centersRef = useRef<Map<number, number>>(new Map());
    const [activeIdx, setActiveIdx] = useState(0);

    const handleReport = useCallback((idx: number, inView: boolean, centerY: number | null) => {
        const s = inViewSetRef.current;
        const centers = centersRef.current;
        if (inView) s.add(idx);
        else s.delete(idx);
        if (centerY == null) centers.delete(idx);
        else centers.set(idx, centerY);
    }, []);

    const computeTargetIndex = useCallback(() => {
        const centers = centersRef.current;
        if (!centers.size) return 0;
        const viewportCenter = window.scrollY + window.innerHeight / 2;
        const inViewSet = inViewSetRef.current;
        let candidateIdx: number | null = null;
        let bestDist = Infinity;
        const consider = (idx: number) => {
            const center = centers.get(idx);
            if (center == null) return;
            const dist = Math.abs(center - viewportCenter);
            if (dist < bestDist) {
                bestDist = dist;
                candidateIdx = idx;
            }
        };
        if (inViewSet.size) {
            for (const idx of inViewSet) consider(idx);
            if (candidateIdx != null) return candidateIdx;
        }
        for (const idx of centers.keys()) consider(idx);
        return candidateIdx ?? 0;
    }, []);

    useEffect(() => {
        let rafId: number | null = null;
        const stepTowardsTarget = () => {
            const target = computeTargetIndex();
            setActiveIdx((prev) => {
                if (prev === target) return prev;
                return prev + Math.sign(target - prev);
            });
            rafId = null;
        };
        const onScroll = () => {
            if (rafId != null) return;
            rafId = requestAnimationFrame(stepTowardsTarget);
        };
        const onResize = () => {
            if (rafId != null) return;
            rafId = requestAnimationFrame(stepTowardsTarget);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);
        onScroll();
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [computeTargetIndex]);

    const setItemRef = (idx: number) => (el: HTMLDivElement | null) => {
        itemRefs.current[idx] = el;
    };

    return { activeIdx, setItemRef, handleReport, itemRefs };
}