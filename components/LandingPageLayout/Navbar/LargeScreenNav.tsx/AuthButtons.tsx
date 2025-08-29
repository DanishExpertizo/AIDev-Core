import Link from "next/link";
import NavLink from "../NavLink";

const AuthButtons = () => {
    return (
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <NavLink href="" label="Login" className="border-none pb-0" />
            <Link
                href="#get-started"
                className="rounded-md bg-white px-3 lg:px-5 py-3 text-sm lg:text-[16px] font-semibold text-slate-900 transition-colors hover:bg-white/90"
            >
                Get Started
            </Link>
        </div>
    );
}

export default AuthButtons;