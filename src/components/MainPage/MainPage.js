import React from "react";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import ServiceSection from "./ServiceSection/ServiceSection";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="o-mp-container">
      <Navbar isLoggedIn={false} />
      <div className="o-mp-hero-container">
        <Hero />
      </div>
      <div className="o-mp-services-container">
        <ServiceSection />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
