import React from "react";

const VolunteerNavbar = () => {
  return (
    <>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i>{" "}
            <a
              href="mailto:helpinghands@gmail.com"
              style={{ textDecoration: "none" }}
            >
              helpinghands@gmail.com
            </a>
            <i className="bi bi-phone"></i> +1 5589 55488 55
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html" style={{ textDecoration: "none" }}>
              Helping Hands
            </a>
          </h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="/volunteer">
                  Volunteer Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/volunteerclosed">
                  Closed Cases
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a
            href="#appointment"
            className="appointment-btn scrollto"
            style={{ textDecoration: "none" }}
          >
            <span className="d-none d-md-inline">Log</span> Out
          </a>
        </div>
      </header>
    </>
  );
};

export default VolunteerNavbar;
