"use client";

import dynamic from "next/dynamic";

// Lazy load cursor component to avoid loading framer-motion in initial bundle
const SmoothCursor = dynamic(
    () => import("@/components/ui/cursor").then((m) => m.SmoothCursor),
    { ssr: false }
);

interface CursorWrapperProps {
    size?: number;
    color?: string;
    showTrail?: boolean;
    trailLength?: number;
    magneticDistance?: number;
    magneticElements?: string;
    springConfig?: {
        damping: number;
        stiffness: number;
        mass: number;
        restDelta: number;
    };
}

export function CursorWrapper({
    size = 17,
    color = "black",
    showTrail = false,
    trailLength = 8,
    magneticDistance = 60,
    magneticElements = "[data-magnetic]",
    springConfig = {
        damping: 50,
        stiffness: 450,
        mass: 0.8,
        restDelta: 0.001,
    },
}: CursorWrapperProps) {
    return (
        <SmoothCursor
            size={size}
            color={color}
            showTrail={showTrail}
            trailLength={trailLength}
            magneticDistance={magneticDistance}
            magneticElements={magneticElements}
            springConfig={springConfig}
        />
    );
}

export default CursorWrapper;
