import { FC } from "react";
import { DesktopLinksProps } from "@/Types/Navbar";
import NavLink from "../NavLink";

const DesktopLinks: FC<DesktopLinksProps> = ({ links }) => {
    return (
        <div className="hidden md:flex items-center gap-6 lg:gap-12">
            {links.map(({ href, label }) => (
                <NavLink key={href} href={href} label={label} />
            ))}
        </div>
    );
}

export default DesktopLinks;