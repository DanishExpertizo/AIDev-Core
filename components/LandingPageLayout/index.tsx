import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const LandingPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-[#00010C]'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default LandingPage;