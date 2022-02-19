import React from 'react'

const AboutSection = () => {
    return (
        <section id="about" className="about">
            <div className="container-fluid">
                <h1 className="d-flex justify-content-center align-items-stretch position-relative">About Us</h1>
                <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                        <a href="https://www.youtube.com/watch?v=STaDhjGYd4E" className="glightbox play-btn mb-4"></a>
                    </div>

                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <h3>We keep Empowering the women and girls to lift their entire families and communities out of poverty.</h3>
                        <p>We are a not-for-profit organisation that builds capacity of communities to ensure empowerment for marginalised women and girls. Our sustainable and holistic interventions in Health, Livelihood, Education and Disaster Relief & Resilience, provide innovative solutions to deep-rooted development problems.</p>

                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-fingerprint"></i></div>
                            <h4 className="title"><a href="" style={{ textDecoration: "none" }}>Relief & Response</a></h4>
                            <p className="description">Provide immediate relief assistance to disaster affected communities and respond to the calamity through recovery and rehabilitation initiatives to secure their long-term development.</p>
                        </div>

                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-gift"></i></div>
                            <h4 className="title"><a href="" style={{ textDecoration: "none" }}>Recovery</a></h4>
                            <p className="description">Build transitional shelters for people whose houses have been completely damaged by disasters and reconstruct affected buildings by integrating disaster risk reduction features.</p>
                        </div>

                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-atom"></i></div>
                            <h4 className="title"><a href="" style={{ textDecoration: "none" }}>Preparedness</a></h4>
                            <p className="description">Implementation of systematic initiatives to mitigate the risk of disasters and training the communities to deal with the emergencies in future.</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection