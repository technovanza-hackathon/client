import React from 'react'

const CountSec = () => {
    return (
        <section id="counts" className="counts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="fas fa-user-md"></i>
                            <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter">40</span>
                            <p>Active Cases</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="far fa-hospital"></i>
                            <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter">250+</span>
                            <p>Total Volunteers</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="fas fa-flask"></i>
                            <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter">4</span>
                            <p>Trusties</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="fas fa-award"></i>
                            <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" className="purecounter">10000+</span>
                            <p>Number of People Helped</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountSec