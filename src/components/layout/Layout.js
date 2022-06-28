import React from 'react';
import Footer from '../Share/footer/Footer';
import Navbar from '../Share/navbar/Navbar';

const Layout = ({ children, title }) => {
    document.title = title ? title + " - Bike Shop " : "Bike Shop";

    return (
        < >
            <header>

                <Navbar />
            </header>
            <main className=" "  >
                {children}
            </main>
            <footer className="">
                <Footer />
            </footer>
        </ >
    );
};

export default Layout;