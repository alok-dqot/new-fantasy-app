import React from 'react'
import Navbar from '../Header'
import Footer from '../Footer'

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