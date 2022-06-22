import React from 'react';
import Layout from '../../../layout/Layout';
import './dashboard.css';
import { Link, Outlet } from "react-router-dom"
const DashboardHome = ({ title }) => {
    return (
        <Layout title="Dashboard Home">
            <div className="dashboard" style={{ height: '500px' }}>
                <div className=" row    h-100  ">
                    <div className="col-3 dashbodrd-section  "  >
                        <h2>Dashboard</h2>
                        <ul>
                            <li>Dashboard</li>
                            <Link to="/dashboard/castomerReview">
                                <li>Add Review</li>
                            </Link>
                            <Link to="/dashboard/payment">
                                <li>Payment</li>
                            </Link>
                            <li>Logout</li>
                        </ul>
                    </div>
                    <div className="  col-9  bg-gradient">

                        <Outlet />
                    </div>


                </div>
            </div>
        </Layout>
    );
};

export default DashboardHome;