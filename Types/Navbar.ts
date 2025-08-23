export type NavLinkProps = {
    href: string;
    label: string;
    className?: string;
}

export type SmallScreenNavProps = {
    isOpen: boolean;
}

export type LargeScreenNavProps = {
    isOpen: boolean;
    toggleMenu: () => void;
}

export type DesktopLinksProps = {
    links: { href: string; label: string }[];
}

export type MobileToggleProps = {
    isOpen: boolean;
    toggleMenu: () => void;
}