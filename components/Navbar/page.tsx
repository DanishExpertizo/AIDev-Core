'use client';

import Link from 'next/link';
import { FC } from 'react';

interface NavLinkProps {
    href: string;
    label: string;
    className?: string;
}

const NavLink: FC<NavLinkProps> = ({ href, label, className = '' }) => (
    <Link
        href={href}
        className={`text-medium text-white/95 transition-colors hover:text-cyan-400 ${className} border-white/60 pb-1`}
    >
        {label}
    </Link>
);

const Navbar: FC = () => {
    const mainNavLinks = [
        { href: '/', label: 'Home' },
        { href: '/about-us', label: 'About us' },
        { href: '/contact-us', label: 'Contact us' },
        { href: '/privacy-policy', label: 'Policy' },
        { href: '/pricing-plan', label: 'Pricing Plan' },
    ];

    return (
        <div className="sticky top-0 z-50">
            <div className="relative">
                <div className="fixed left-1/2 top-[40px] z-[9999] h-[95px] w-[1248px] -translate-x-1/2 transform-gpu">
                    <div className="overflow-hidden rounded-[20px] bg-[linear-gradient(100.2deg,rgba(255,255,255,0.17)_42.37%,rgba(214,214,214,0.17)_90.26%)] p-[1px]">
                        <nav className="h-full rounded-[20px] bg-[#FFFFFF12] backdrop-blur-[47.3px] backdrop-saturate-150 border border-[#3AA8E7]">
                            <div className="flex h-full items-center justify-between px-[43px] py-[22px]">
                                <div className="hidden items-center sm:flex">
                                    <div className="rounded-full bg-white/90 px-6 py-3">
                                        <div className="h-5 w-12 rounded-full bg-gray-300" />
                                    </div>
                                </div>

                                <div className="hidden items-center gap-13 md:flex">
                                    {mainNavLinks.map((link) => (
                                        <NavLink
                                            key={link.href}
                                            href={link.href}
                                            label={link.label}
                                        />
                                    ))}
                                </div>

                                <div className="hidden items-center gap-6 md:flex">
                                    <NavLink
                                        href="/log-in"
                                        label="Login"
                                        className="border-none pb-0"
                                    />
                                    <Link
                                        href="/get-started"
                                        className="rounded-md bg-white px-5 py-3 text-medium font-semibold text-slate-900 transition-colors hover:bg-white/90"
                                    >
                                        Get Started
                                    </Link>
                                </div>

                                <button
                                    className="text-white md:hidden"
                                    aria-label="Toggle mobile menu"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
