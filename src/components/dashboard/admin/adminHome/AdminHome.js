import React from 'react';
import Layout from '../../../layout/Layout';
import { Link, Outlet } from "react-router-dom"

const AdminHome = ({ title }) => {
    if (Link === "/admin/make-admin")
    {
        title = "make admin"
        return title
    }
    return (
        <Layout title="Admin Home">
            <div className="dashboard" style={{ height: '500px' }}>
                <div className=" row    h-100  ">
                    <div className="col-3 dashbodrd-section  "  >
                        <Link to="/admin/" style={{ textDecoration: "none", color: 'black' }}>
                            <h2 className="text-center py-3">Admin</h2>
                        </Link>
                        <ul>

                            <Link to="/admin/mange-products" style={{ textDecoration: "none", color: 'black' }}>
                                <li>Management Product</li>
                            </Link>
                            <Link to="/admin/add-products" style={{ textDecoration: "none", color: 'black' }}>
                                <li>Add Product</li>
                            </Link>
                            <Link to="/admin/make-admin" style={{ textDecoration: "none", color: 'black' }}>
                                <li>Make Admin</li>
                            </Link>


                            <li>Logout</li>
                        </ul>
                    </div>
                    <div className="  col-9  h-100 dashboardItems">
                        <h2 className="px-4 py-2 bg-white">  {title ? title + "admin" : 'admin'}</h2>
                        <Outlet />
                    </div>


                </div>
            </div>
        </Layout>
    );
};

export default AdminHome;