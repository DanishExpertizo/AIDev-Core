import { FC } from "react";
import { MobileToggleProps } from "@/Types/Navbar";

const MobileToggle: FC<MobileToggleProps> = ({ isOpen, toggleMenu }) => {
    return (
        <button
            className="text-white md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
        >
            <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                        isOpen
                            ? "M6 18L18 6M6 6l12 12"
                            : "M4 6h16M4 12h16M4 18h16"
                    }
                />
            </svg>
        </button>
    );
}

export default MobileToggle;