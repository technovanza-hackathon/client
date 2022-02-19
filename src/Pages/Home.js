import React from "react";

import AboutSection from "../Components/AboutSection/AboutSection";
import CountSec from "../Components/CountSec/CountSec";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import WhyChoose from "../Components/WhyChoose/WhyChoose";
import Department from "../Components/Departments/Department";
import Disasters from "../Components/Disasters/Disasters";
import MakeAppointment from "../Components/Forms/MakeAppointment";
import Oraganizers from "../Components/Organizers/Oraganizers";
import FAQ from "../Components/FAQ/FAQ";
import Gallery from "../Components/Gallery/Gallery";
import ContactUs from "../Components/ContactUs/ContactUs";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main id="main">
        <WhyChoose />
        <AboutSection />
        <CountSec />
        <Disasters />
        <Department />
        <Oraganizers />
        <FAQ />
        <Gallery />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default Home;
