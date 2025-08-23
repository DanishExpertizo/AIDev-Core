import { FC } from "react";
import { FooterLinkProps } from "@/Types/Footer";

const FooterLink: FC<FooterLinkProps> = ({ label, href = "#" }) => {
    return (
        <a
            href={href}
            className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm sm:text-base"
        >
            {label}
        </a>
    );
}

export default FooterLink;