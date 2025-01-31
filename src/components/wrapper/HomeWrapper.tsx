import React from 'react'
import Navbar from '../header/navbar'
import Footer from '../footer/Footer';

const HomeWrapper = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <div className="main-wrapper">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default HomeWrapper;