import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid d-flex justify-content-between custom-navbar">
        <a className="navbar-brand" href="/">
          <img
            className="img-fluid"
            src="/logo.webp"
            alt="logo"
            style={{ width: "120px", height: "auto" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item custom-nav-link">
              <a className="nav-link active" aria-current="page" href="/">
                Link Building
              </a>
            </li>
            <li className="nav-item custom-nav-link">
              <a className="nav-link" href="/digital">
                Digital PR & SEO
              </a>
            </li>
            <li className="nav-item custom-nav-link">
              <a className="nav-link" href="/fix">
                Fix & Design Site
              </a>
            </li>
            <li className="nav-item custom-nav-link">
              <a className="nav-link" href="/content-writing">
                Content Writing
              </a>
            </li>
            <li className="nav-item custom-nav-link">
              <a className="nav-link" href="/login">
                LOGIN
              </a>
            </li>
            <li className="nav-item custom-nav-link">
              <a className="nav-link" href="/signup">
                SIGN UP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
