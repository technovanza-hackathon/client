import React from 'react';

const Department = () => {
    return (
        <>
            <section id="volunteer" className="departments">
                <div className="container">

                    <div className="section-title">
                        <h2>Register as Volunteer</h2>
                        <p>Our main aim is to provide help to those who are in need and we cannot deliver the help all alone, so we need some help volunteers who can provide the following. Click on anyone to Register for the same.</p>
                    </div>

                    <div className="row gy-4">
                        <div className="col-lg-3">
                            <ul className="nav nav-tabs flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active show" style={{ textDecoration: "none", border: 'none' }} data-bs-toggle="tab" href="#tab-1">Clothes</a>
                                </li>
                                <li className="nav-item" >
                                    <a className="nav-link" style={{ textDecoration: "none", border: 'none' }} data-bs-toggle="tab" href="#tab-2">Food</a>
                                </li>
                                <li className="nav-item" >
                                    <a className="nav-link" style={{ textDecoration: "none", border: 'none' }} data-bs-toggle="tab" href="#tab-3">Medical Kit</a>
                                </li>
                                <li className="nav-item" >
                                    <a className="nav-link" style={{ textDecoration: "none", border: 'none' }} data-bs-toggle="tab" href="#tab-4">Transport Support</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-9">
                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Clothes</h3>
                                            <p className="fst-italic">Helping Hands is one of the most well-known places to donate used clothes (and tons of other things too!)..</p>
                                            <p>The non-profit is funded by a massive network of retail thrift stores across the country. Revenue from the stores goes directly toward helping individuals find employment and grow their careers by providing them with job training, placement services and other community-based programs. Anything they can't sell, Helping Hands will forward to recycling organizations that will help the items avoid the landfill.</p>
                                            <a style={{ textDecoration: "none", border: '1px solid #1977cc', borderRadius: "50px", letterSpacing: "1px", display: "inline-block", textTransform: "uppercase", padding: "12px 35px", marginTop: "30px", transition: "0.5s" }} href="/volunteersignup" className="btn-get-started scrollto">Register Volunteer</a>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-1.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-2">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Food</h3>
                                            <p className="fst-italic">Saving lives in emergencies</p>
                                            <p>Helping Hands is one of the first agencies on the ground in global emergencies caused by conflict, climate shocks, pandemics and other disasters. We provide life-saving support to people at risk of going hungry, and we coordinate the response of the global humanitarian community to large-scale emergencies.</p>
                                            <a style={{ textDecoration: "none", border: '1px solid #1977cc', borderRadius: "50px", letterSpacing: "1px", display: "inline-block", textTransform: "uppercase", padding: "12px 35px", marginTop: "30px", transition: "0.5s" }} href="/volunteersignup" className="btn-get-started scrollto">Register Volunteer</a>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-3.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-2">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Medical Kits</h3>
                                            <p className="fst-italic">Helping Hands is one of the most well-known places to donate used clothes (and tons of other things too!)..</p>
                                            <p>The non-profit is funded by a massive network of retail thrift stores across the country. Revenue from the stores goes directly toward helping individuals find employment and grow their careers by providing them with job training, placement services and other community-based programs. Anything they can't sell, Helping Hands will forward to recycling organizations that will help the items avoid the landfill.</p>
                                            <a style={{ textDecoration: "none", border: '1px solid #1977cc', borderRadius: "50px", letterSpacing: "1px", display: "inline-block", textTransform: "uppercase", padding: "12px 35px", marginTop: "30px", transition: "0.5s" }} href="/volunteersignup" className="btn-get-started scrollto">Register Volunteer</a>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-3.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-4">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Transport Support</h3>
                                            <p className="fst-italic">Transport Support for Poor Victim</p>
                                            <p>Helping Hands provides feeding stations, first aid, temporary shelter, cleaning supplies, hygiene kits, food, clothing, emergency transportation, home repairs, and medical supplies. Handling both small house fires and large-scale natural disasters, ARC deploys as necessary to make sure people have clean water, safe shelter, and hot meals during times of need.</p>
                                            <a style={{ textDecoration: "none", border: '1px solid #1977cc', borderRadius: "50px", letterSpacing: "1px", display: "inline-block", textTransform: "uppercase", padding: "12px 35px", marginTop: "30px", transition: "0.5s" }} href="/volunteersignup" className="btn-get-started scrollto">Register Volunteer</a>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-4.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Department