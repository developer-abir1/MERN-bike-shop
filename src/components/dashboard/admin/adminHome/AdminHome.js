import React from 'react';
import Layout from '../../../layout/Layout';
import { Link, Outlet } from "react-router-dom";
import './adminHome.css';


const AdminHome = ({ title }) => {



    return (
        <Layout title="Admin Home">
            <div style={{ height: '1000px' }}>



                {/* <ul id="listItem">
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
                        </ul> */}

                <div className="    p-0  h-100 dashboardItems">
                    <h2 className=" py-2 bg-white ">

                        <svg style={{ width: "40px ", cursor: 'pointer', }} class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>


                        <div class="offcanvas offcanvas-start bg-info" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                    <Link to="/" className="  text-decoration-none text-black d-flex align-items-center">
                                        <svg style={{ height: "20px" }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>Home</Link>

                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <ul id="listItem   " class="list-unstyled">
                                <Link to="/admin" style={{ textDecoration: "none", color: 'black', display: "flex", alignItems: "center" }} className=" mb-3 px-4">
                                    <svg style={{ height: "20px" }} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <li className="fs-4  fw-normal" > Admin</li>
                                </Link>
                                <Link className=" mb-3 px-4" to="/admin/mange-products" style={{ textDecoration: "none", color: 'black', display: "flex", alignItems: "center" }}>
                                    <svg style={{ height: "20px" }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                    <li className="fs-4  fw-normal ">Management Product</li>
                                </Link>
                                <Link className=" mb-3 px-4" to="/admin/add-products" style={{ textDecoration: "none", color: 'black', display: "flex", alignItems: "center" }}>
                                    <svg style={{ height: "20px" }} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                    <li className="fs-4  fw-normal ">Add Product</li>
                                </Link>
                                <Link className=" mb-3 px-4 d-flex align-items-center  " to="/admin/make-admin" style={{ textDecoration: "none", color: 'black' }}>
                                    <svg style={{ height: "20px" }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg><li className="fs-4  fw-normal ">


                                        Make Admin</li>
                                </Link>



                            </ul>
                            <div className="  popover-body ">
                                <button className="btn btn-primary ">
                                    <svg style={{ width: "40px" }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>

                                    Logout
                                </button>
                            </div>
                        </div>

                        <span className="ms-5">  {title}</span> </h2>

                    <Outlet />
                </div>

            </div>

        </Layout >
    );
};

export default AdminHome;