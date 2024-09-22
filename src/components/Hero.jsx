import React from "react";
import img1 from "../images/hero3.png";
import img2 from "../images/edge-logo.png";
const Hero = () => {
  return (
    <section className="hero section" id="hero">
      <div className="center">
        <div className="heroContent">
          <h1 className="hero-heading">
            Track Your Browsing Time Effortlessly
          </h1>
          <small className="hero-description">
            You can know how much time you have spent on websites only using our
            simple browser extension and Gain insights into your web habits.
            View time spent on each site, all in one place, with a clean,
            user-friendly interface.
          </small>

          <div className="downloadBtn">
            <img src={img2} alt="" style={{ width: "30px" }} />
            <a href="#"> Go to download</a>
          </div>
        </div>
        <div className="heroimg">
          <img src={img1} alt="...loading" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
