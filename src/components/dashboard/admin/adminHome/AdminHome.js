import React from 'react';
import Layout from '../../../layout/Layout';
import { Link, Outlet } from "react-router-dom"

const AdminHome = ({ title }) => {
    return (
        <Layout title="Admin Home">
            <div className="dashboard" style={{ height: '500px' }}>
                <div className=" row    h-100  ">
                    <div className="col-3 dashbodrd-section  "  >
                        <h2 className="text-center py-3">Admin</h2>
                        <ul>
                            <li>Admin</li>

                            <li>Management Product</li>
                            <li>Add Product</li>
                            <li>Make Admin</li>
                            <li></li>

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

export default AdminHome;