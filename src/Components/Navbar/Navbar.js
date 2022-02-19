import React from 'react'

const Navbar = () => {
    return (
        <>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope"></i> <a href="mailto:helpinghands@gmail.com" style={{ textDecoration: "none" }}>helpinghands@gmail.com</a>
                        <i className="bi bi-phone"></i> +1 5589 55488 55
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="index.html" style={{ textDecoration: "none" }}>Helping Hands</a></h1>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto active" href="/">Home</a></li>
                            <li><a className="nav-link scrollto" href="/#about">About</a></li>
                            <li><a className="nav-link scrollto" href="/#disasters">Disasters</a></li>
                            <li><a className="nav-link scrollto" href="/#volunteer">Volunteer</a></li>
                            <li><a className="nav-link scrollto" href="/#trusties">Trusties</a></li>

                            <li className="dropdown"><a style={{ textDecoration: "none" }} href="#"><span>Registration/Login</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li className="dropdown"><a href="#" style={{ textDecoration: "none" }}><span>Volunteer</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="/volunteerlogin" style={{ textDecoration: "none" }}>Volunteer Login</a></li>
                                            <li><a href="/volunteersignup" style={{ textDecoration: "none" }}>Volunteer Registration</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#" style={{ textDecoration: "none" }}><span>Admin</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="/adminlogin" style={{ textDecoration: "none" }}>Admin Login</a></li>
                                            <li><a href="/adminsignup" style={{ textDecoration: "none" }}>Admin Registration</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                            <li><a className="nav-link scrollto" href="#faq">FAQ</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <a href="#appointment" className="appointment-btn scrollto" style={{ textDecoration: "none" }}><span className="d-none d-md-inline">Make an</span> Appointment</a>

                </div>
            </header>
        </>
    );
}

export default Navbar;