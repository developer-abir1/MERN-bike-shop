import React from 'react';
import Footer from '../Share/footer/Footer';
import Navbar from '../Share/navbar/Navbar';

const Layout = ({ children, title }) => {

    return (
        < >
            <header>
                <title>{title ? title + "bike-shop" : "Bike shop"}</title>
                <Navbar />
            </header>
            <main className="container">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </ >
    );
};

export default Layout;