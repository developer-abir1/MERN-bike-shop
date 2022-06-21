import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-dark container'>
            <h5>E-commerce 2022</h5>
            <div className="row">
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
    );
};

export default Footer;