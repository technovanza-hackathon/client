import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import axios from "axios";

import AdminNavbar from "../Components/Navbar/AdminNavbar";

const RenderVolunteer = ({ data }) => {
  const victimData = data.data;

  if (victimData) {
    return victimData.map((victim) => {
      return (
        <div className="container-fluid" style={{ margin: "30px" }}>
          <h1 className="d-flex justify-content-center align-items-stretch position-relative">
            Disaster Type : {victim.disasterType}
          </h1>
          <div className="row">
            <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
              <img width="500" height="200" src={`${victim.photo}`} />
            </div>
            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3>Victim Name : {victim.name}</h3>
              <h3>Disaster Location : {victim.disasterAddress}</h3>
              <h3>Victim Address : {victim.location}</h3>

              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-fingerprint"></i>
                </div>
                <h4>
                  <b>Helps Needed:</b>
                  <h5 className="title">
                    <span>
                      {victim.helpNeeded.food == 1 ? <p>Food</p> : ""}
                    </span>
                    <span>
                      {victim.helpNeeded.clothes == 1 ? <p>Clothes</p> : ""}
                    </span>
                    <span>
                      {victim.helpNeeded.medical == 1 ? <p>Medical</p> : ""}
                    </span>
                    <span>
                      {victim.helpNeeded.transport == 1 ? (
                        <p>Transport Support</p>
                      ) : (
                        ""
                      )}
                    </span>
                  </h5>
                </h4>
                <h3>Victim Message : {victim.additionalInfo}</h3>
              </div>
            </div>
            <div class="buttoncontainer d-flex flex-row">
              <form
                method="PUT"
                onSubmit={`https://helping-hands-server.herokuapp.com/admin/update/${victim._id}`}
              >
                <button className="btn btn-primary mx-2" type="Submit">
                  Accept
                </button>
              </form>
              <form method="PUT" onSubmit={"/"}>
                <button className="btn btn-danger mx-2">Rejectt</button>
              </form>
            </div>
          </div>
          <hr />
        </div>
      );

    });
  } else return <></>;
};

const Admin = () => {
  const API = axios.create({
    baseURL: "https://helping-hands-server.herokuapp.com"
  });
  const getActiveRequests = async () => {
    const response = await API.get("/admin/");
    setData(response);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getActiveRequests();
    console.log(data);
  }, []);

  return (
    <>
      <AdminNavbar />
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>Welcome to Helping Hands</h1>
          <h2>We are the team of Talented, Skilled and Helping Peoples </h2>
          <a
            style={{ textDecoration: "none" }}
            href="#about"
            className="btn-get-started scrollto"
          >
            Get Started
          </a>
        </div>
      </section>
      <section id="counts" className="counts">
        <div className="container ">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="fas fa-user-md"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="85"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  250
                </span>
                <p>Active Cases</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="far fa-hospital"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="18"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  67
                </span>
                <p>Volunteers</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="fas fa-flask"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="12"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  25
                </span>
                <p>Authorities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RenderVolunteer data={data} />

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Admin;
