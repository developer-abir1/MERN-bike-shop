import React from 'react';

const Admin = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 " >
                    <div style={{ background: 'red', border: 'none', borderRadius: "10px ", height: '90px', color: "white", textAlign: 'center' }}>
                        <h2>Total Earnings</h2>
                        <span>$0</span>

                    </div>
                </div>
                <div className="col-md-3 " >
                    <div style={{ background: '#82E0AA ', border: 'none', borderRadius: "10px ", height: '90px', color: "white", textAlign: 'center' }}>
                        <h2>Total Sales</h2>
                        <span>$0</span>

                    </div>
                </div>
                <div className="col-md-3 " >
                    <div style={{ background: '#FBC57C', border: 'none', borderRadius: "10px ", height: '90px', color: "white", textAlign: 'center' }}>
                        <h2>Total Order</h2>
                        <span>$0</span>

                    </div>
                </div>
                <div className="col-md-3 " >
                    <div style={{ background: '#3FF5EA', border: 'none', borderRadius: "10px ", height: '90px', color: "white", textAlign: 'center' }}>
                        <h2>Total Costumer</h2>
                        <span>$0</span>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Admin;