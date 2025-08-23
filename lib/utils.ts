import { Point } from "@/Types/TimeLineSection";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function computeArcPoints(boxSize: number, inwardOffset: number, angles: number[]): Point[] {
  const radius = boxSize / 2;
  const iconRadius = radius - inwardOffset;
  const center = { x: radius, y: radius };
  return angles.map((deg: number) => {
      const rad = (deg * Math.PI) / 180;
      return {
          left: center.x + iconRadius * Math.cos(rad),
          top: center.y + iconRadius * Math.sin(rad),
      };
  });
}