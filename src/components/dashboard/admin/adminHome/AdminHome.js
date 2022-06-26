import React from 'react';
import Layout from '../../../layout/Layout';
import { Link, Outlet } from "react-router-dom";
import './adminHome.css';


const AdminHome = ({ title }) => {



    return (
        <Layout title="Admin Home">
            <div className="dashboard" style={{ height: '500px' }}>

                <div className=" row    h-100  dashbodrd-section  ">

                    <div className="col-3   "  >

                        <ul id="listItem">
                            <Link to="/admin" style={{ textDecoration: "none", color: 'black', display: "flex", alignItems: "center" }}>
                                <svg style={{ height: "20px" }} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>   <li> Admin</li>
                            </Link>
                            <Link to="/admin/mange-products" style={{ textDecoration: "none", color: 'black' }}>
                                <li>Management Product</li>
                            </Link>
                            <Link to="/admin/add-products" style={{ textDecoration: "none", color: 'black', display: "flex", alignItems: "center" }}>
                                <svg style={{ height: "20px" }} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                                <li>Add Product</li>
                            </Link>
                            <Link to="/admin/make-admin" style={{ textDecoration: "none", color: 'black' }}>
                                <li>Make Admin</li>
                            </Link>


                            <li>Logout</li>
                        </ul>
                    </div>
                    <div className="  col-9 p-0  h-100 dashboardItems">
                        <h2 className=" py-2 bg-white "> <span className="ms-5"> {title}</span> </h2>

                        <Outlet />
                    </div>


                </div>
            </div>
        </Layout >
    );
};

export default AdminHome;