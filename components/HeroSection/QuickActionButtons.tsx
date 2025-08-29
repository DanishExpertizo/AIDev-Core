"use client";

import { Button } from "../ui/button";
import { quickActions } from "./data";

const QuickActionButtons = () => (
    <div
        className="flex max-w-full overflow-x-scroll gap-3"
        style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
        }}
    >
        <style jsx>{`
      div::-webkit-scrollbar {
        display: none;
      }
    `}</style>
        {quickActions.map((action, index) => (
            <Button
                key={index}
                variant="outline"
                className="border-gray-700 hover:border-gray-600 bg-[#141414] text-gray-300 hover:bg-[#222222] hover:text-white whitespace-nowrap text-xs"
            >
                {action}
            </Button>
        ))}
    </div>
);

export default QuickActionButtons;