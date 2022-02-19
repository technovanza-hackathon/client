import React from 'react'

const WhyChoose = () => {
    return (
        <section id="why-us" className="why-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content ">
                            <h3>Why Helping Hands?</h3>
                            <p className='text-justify'>
                                Helping Hands enables Individuals and Organizations to raise and donate funds conveniently to any cause they care about, with offerings including crowdfunding, corporate giving, cause marketing, and philanthropy consulting.Established in 2022, Helping Hands community of 1000+ donors and 150+ partners have supported 2,500+ verified nonprofits, serving 1M+ people across the country..
                            </p>
                            <div className="text-center">
                                <a style={{ textDecoration: "none" }} href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <h2>Focus Area</h2>
                            <br />
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <img className="img-thumbnail" src="https://www.careindia.org/wp-content/themes/careindia/images/disaster-landing/key-1.jpg" />
                                        <h4 className='mt-5'>Kerala Flood Response</h4>
                                        <p>Rapid aid to the destruction and loss caused by the flooding and landslides in Idukki and Wayanad.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <img className="img-thumbnail" src="https://www.careindia.org/wp-content/themes/careindia/images/disaster-landing/maharashtra.jpg" />
                                        <h4 className='mt-5'>Maharashtra Flood Response</h4>
                                        <p>Addressing the immediate needs of worst affected households in marginalised and poor communities.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <img className="img-thumbnail" src="https://www.careindia.org/wp-content/themes/careindia/images/disaster-landing/cyclone-yaas.jpg" />
                                        <h4 className='mt-5'>Cyclone Yaas 2021</h4>
                                        <p>Responding to the severely affected district of Balasore, Odisha, CARE India reached out to the most marginalised .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhyChoose