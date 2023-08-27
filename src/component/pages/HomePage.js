import React from 'react'
import Navbar from './../Navbar';
import ItemsContainer from './../ItemsContainer';
import Footer from './../Footer';

const HomePage = () => {
    return (
        <div>
            <>
                <Navbar />
                <ItemsContainer />
                <Footer/>
            </>
        </div>
    )
}

export default HomePage
