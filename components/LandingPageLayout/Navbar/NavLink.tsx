import Link from "next/link";
import { FC } from "react";
import { NavLinkProps } from "@/Types/Navbar";

const NavLink: FC<NavLinkProps> = ({ href, label, className = '' }) => (
    <Link
        href={href}
        className={`text-sm lg:text-[16px] text-white/95 transition-colors hover:text-cyan-400 ${className} border-white/60 pb-1`}
    >
        {label}
    </Link>
);

export default NavLink;
