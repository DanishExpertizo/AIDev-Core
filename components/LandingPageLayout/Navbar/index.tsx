'use client';

import { useState } from 'react';
import LargeScreenNav from './LargeScreenNav.tsx';
import SmallScreenNav from './SmallScreenNav';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <header className="z-50">
            <LargeScreenNav isOpen={isOpen} toggleMenu={toggleMenu} />
            <SmallScreenNav isOpen={isOpen} />
        </header>
    );
};

export default Navbar;
