import React from 'react'
import { useNavigate } from 'react-router-dom';

const Disasters = () => {
    let history = useNavigate();
    const moveToVictim = () => {
        history.push("/victim");
    }
    return (
        <section id="disasters" className="services">
            <div className="container">
                <div className="section-title">
                    <h2>Disasters</h2>
                    <p>Helping Hands has been working in India for 10 years, focusing on people who have faced disasters and social exclusion. We do this through well-planned and comprehensive programmes in health, education, livelihoods, and disaster preparedness and response. We are part of the Helping Hands International Confederation, working in over 20 countries for a world where all people live with dignity and security.</p>
                </div>

                <div className="row" >
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" onClick={() => window.location.replace("http://localhost:3000/victim")}>
                        <div className="icon-box">
                            <div className="icon"><i class="bi bi-droplet-fill"></i></div>
                            <h4><a href="" style={{ textDecoration: "none" }}>Flood</a></h4>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" onClick={() => window.location.replace("http://localhost:3000/victim")}>
                        <div className="icon-box">
                            <div className="icon"><i class="bi bi-tsunami"></i></div>
                            <h4><a href="" style={{ textDecoration: "none" }}>Tsunami</a></h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" onClick={() => window.location.replace("http://localhost:3000/victim")}>
                        <div className="icon-box">
                            <div className="icon"><i class="bi bi-circle-square"></i></div>
                            <h4><a href="" style={{ textDecoration: "none" }}>Earthquake</a></h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" onClick={() => window.location.replace("http://localhost:3000/victim")}>
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-dna"></i></div>
                            <h4><a href="" style={{ textDecoration: "none" }}>Landslide</a></h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" onClick={() => window.location.replace("http://localhost:3000/victim")}>
                        <div className="icon-box">
                            <div className="icon"><i class="bi bi-water"></i></div>
                            <h4><a href="" style={{ textDecoration: "none" }}>Avalanche</a></h4>
                            <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" onClick={() => window.location.replace("http://localhost:3000/victim")}>
                        <div className="icon-box">
                            <div className="icon"><i class="bi bi-cloud-drizzle-fill"></i></div>
                            <h4><a href="" style={{ textDecoration: "none" }}>Storm</a></h4>
                            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Disasters