import React from 'react';
import Layout from '../../../layout/Layout';
import './dashboard.css';
import { Link, Outlet } from "react-router-dom"
const DashboardHome = ({ title }) => {
    return (
        <Layout title="Dashboard Home">
            <div className="dashboard" style={{ height: '500px' }}>
                <div className=" row    h-100  ">
                    <div className="col-3 dashbodrd-section   "  >

                        <ul>
                            <Link to="/dashboard " style={{ color: "black", textDecoration: "none" }}>
                                <li>Dashboard</li>
                            </Link>
                            <Link to="/dashboard/castomerReview" style={{ color: "black", textDecoration: "none" }}>
                                <li>Add Review</li>
                            </Link>
                            <Link to="/dashboard/payment" style={{ color: "black", textDecoration: "none" }}>
                                <li>Payment</li>
                            </Link>
                            <li>Logout</li>
                        </ul>
                    </div>
                    <div className="  col-9  p-0  h-100 dashboardItems">
                        <h2 className="  py-2 bg-white">   {title}</h2>
                        <Outlet />
                    </div>


                </div>
            </div>
        </Layout>
    );
};

export default DashboardHome;