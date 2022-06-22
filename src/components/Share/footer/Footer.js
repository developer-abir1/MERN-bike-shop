import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <div className=' bg-dark  '>
            <h5>E-commerce 2022</h5>
            <div className=" container">
                <div className="row   d-flex footer-section    justify-content-around  align-items-center text-center ">
                    <div className="col-md-4 ">
                        <ul>
                            <li>Service</li>
                            <li>Prvecey</li>
                            <li>Pricng</li>
                            <li>Items</li>

                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li>Service</li>
                            <li>Prvecey</li>
                            <li>Pricng</li>
                            <li>Items</li>

                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li className="text-white">Service</li>
                            <li color='white'>Prvecey</li>
                            <li>Pricng</li>
                            <li>Items</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;