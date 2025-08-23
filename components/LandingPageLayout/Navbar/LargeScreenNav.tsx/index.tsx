import React, { FC } from "react";
import { LargeScreenNavProps } from "@/Types/Navbar";
import { NAV_LINKS } from "../data";
import Logo from "./Logo";
import DesktopLinks from "./DesktopLinks";
import AuthButtons from "./AuthButtons";
import MobileToggle from "./MobileToggle";

const LargeScreenNav: FC<LargeScreenNavProps> = ({ isOpen, toggleMenu }) => {
    return (
        <div className="fixed top-5 inset-x-0 z-[9999]">
            <div className="mx-auto w-[95%] max-w-6xl">
                <div className="overflow-hidden rounded-[20px] bg-[linear-gradient(100.2deg,rgba(255,255,255,0.17)_42.37%,rgba(214,214,214,0.17)_90.26%)] p-[1px]">
                    <nav className="rounded-[20px] bg-[#FFFFFF12] backdrop-blur-[47.3px] backdrop-saturate-150 border border-[#3AA8E7]">
                        <div className="flex h-16 md:h-[95px] items-center justify-between px-4 sm:px-6 lg:px-[43px] py-2 sm:py-3 lg:py-[22px]">
                            <Logo />
                            <DesktopLinks links={NAV_LINKS} />
                            <AuthButtons />
                            <MobileToggle isOpen={isOpen} toggleMenu={toggleMenu} />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default LargeScreenNav;