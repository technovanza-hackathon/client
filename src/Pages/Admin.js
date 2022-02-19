import React from 'react'
import Hero from '../Components/Hero/Hero'
// TODO: Add mocal to 'reject'
const Admin = () => {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1>Welcome to Helping Hands</h1>
                    <h2>We are the team of Talented, Skilled and Helping Peoples </h2>
                    <a style={{ textDecoration: "none" }} href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
            </section>
            <section id="counts" className="counts">
                <div className="container ">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box">
                                <i className="fas fa-user-md"></i>
                                <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter">250</span>
                                <p>Active Cases</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                                <i className="far fa-hospital"></i>
                                <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter">67</span>
                                <p>Volunteers</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="fas fa-flask"></i>
                                <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter">25</span>
                                <p>Authorities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='row justify-content-center align-items-center'>
                <div class="mycuscard card col-md-7 d-flex flex-column align-items-stretch ">
                    <div className='d-flex flex-row'>
                        <div className="col-xl-4 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h3>Sachin Vishwakarma</h3>
                            <p>Andheri - 400056</p>
                        </div>
                        <div className="col-xl-8 col-lg-6 video-box d-flex flex-column justify-content-center align-items-stretch position-relative">
                            <h2 className='d-flex flex-row align-items-stretch justify-content-between'>Food <h4>Sachin, Raj</h4></h2>
                            <h2 className='d-flex flex-row align-items-stretch justify-content-between'>Medical Kits <h4>Joy, Jeet</h4></h2>
                            <h2 className='d-flex flex-row align-items-stretch justify-content-between'>Cloths <h4>Ankit, Aaryan</h4></h2>
                        </div>
                    </div>
                    <div class="buttoncontainer d-flex flex-row">
                        <a href="#">
                            <span>Approve</span>
                        </a>
                        <a href="#">
                            <span>Reject</span>
                        </a>
                    </div>
                </div>
                <div class="mycuscard card col-md-7 d-flex flex-column align-items-stretch ">
                    <div className='d-flex flex-row'>
                        <div className="col-xl-4 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h3>Jeet Mistry</h3>
                            <p>Andheri - 400056</p>
                        </div>
                        <div className="col-xl-8 col-lg-6 video-box d-flex flex-column justify-content-center align-items-stretch position-relative">
                            <h2 className='d-flex flex-row align-items-stretch justify-content-between'>Medical Kits <h4>Joy, Jeet</h4></h2>
                            <h2 className='d-flex flex-row align-items-stretch justify-content-between'>Cloths <h4>Ankit, Aaryan</h4></h2>
                        </div>
                    </div>
                    <div class="buttoncontainer d-flex flex-row">
                        <a href="#">
                            <span>Approve</span>
                        </a>
                        <a href="#">
                            <span>Reject</span>
                        </a>
                    </div>
                </div>
                <div class="mycuscard card col-md-7 d-flex flex-column align-items-stretch ">
                    <div className='d-flex flex-row '>
                        <div className="col-xl-4 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h3>Joy Almedia</h3>
                            <p>Andheri - 400056</p>
                        </div>
                        <div className="col-xl-8 col-lg-6 video-box d-flex flex-column justify-content-center align-items-stretch position-relative">
                            <h2 className='d-flex flex-row align-items-stretch justify-content-between'>Food <h4>Sachin, Raj</h4></h2>
                            <h2 className='d-flex flex-row align-items-stretch justify-content-between'>Medical Kits <h4>Joy, Jeet</h4></h2>
                            <h2 className='d-flex flex-row align-items-stretch justify-content-between'>Cloths <h4>Ankit, Aaryan</h4></h2>
                            <h2 className='d-flex flex-row align-items-stretch justify-content-between'>Medical Kits<h4>Shivam, Avinash</h4></h2>
                        </div>
                    </div>
                    <div className="buttoncontainer d-flex flex-row">
                        <a href="#">
                            <span>Approve</span>
                        </a>
                        <a href="#">
                            <span>Reject</span>
                        </a>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default Admin

