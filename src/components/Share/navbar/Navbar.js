import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark  text-white">
      <div class="container">
        <a class="navbar-brand text-white" href="#">
          <Link to="/">
            E-bick
          </Link>

        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Features</a>
            </li>
            <li class="nav-item">
              <Link to="/dashboard">
                <a class="nav-link text-white" href="#">Dashboard</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/admin">
                <a class="nav-link text-white" href="#">Admin</a>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;