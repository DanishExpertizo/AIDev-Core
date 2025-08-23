import { FC } from 'react';
import Link from 'next/link';
import { SmallScreenNavProps } from '@/Types/Navbar';
import { NAV_LINKS } from './data';
import NavLink from './NavLink';

const SmallScreenNav: FC<SmallScreenNavProps> = ({ isOpen }) => {
    return (
        <div
            className={`fixed inset-x-0 top-0 z-[9998] bg-[#00010C]/95 md:hidden transition-opacity duration-200 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className="pt-[110px] pb-8">
                <div className="mx-auto w-[92%] max-w-3xl flex flex-col items-center gap-6">
                    {NAV_LINKS.map(({ href, label }) => (
                        <NavLink key={href} href={href} label={label} className="text-lg" />
                    ))}
                    <div className="flex flex-col gap-3 w-full">
                        <NavLink href="/log-in" label="Login" className="border-none pb-0 text-center" />
                        <Link
                            href="/get-started"
                            className="rounded-md bg-white px-5 py-3 text-center font-semibold text-slate-900 hover:bg-white/90"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallScreenNav;