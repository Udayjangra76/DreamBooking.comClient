import React from 'react'
import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/Footer.jsx';
import Header from './../../components/header/Header.jsx';
import './Others.css'

const other = () => {
    return (
        <>
            <Navbar />
            <Header type="list" />
            <div className='others'>
                <div className="container">
                    <h1>working In  progress.</h1>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default other
