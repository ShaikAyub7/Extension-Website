import img1 from "../images/aboutimg1.jpg";
import img2 from "../images/aboutimg2.jpg";
import img3 from "../images/aboutimg3.jpg";
import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="AboutHeading">About</h1>
      <div className="Aboutcontainer">
        <div className="aboutImgConatiner">
          <img src={img1} alt="" className="aboutimg" />
        </div>
        <div className="AboutContent">
          At Tab Time Tracker, we believe that understanding your web habits is
          the first step to improving productivity and optimizing time online.
          Our simple yet powerful browser extension helps users track how much
          time they spend on different websites throughout the day.
        </div>
      </div>
      <div className="Aboutcontainer">
        <div className="AboutContent">
          With an intuitive interface and insightful visuals, you can quickly
          see how your browsing time is distributed across various websites.
          Whether you're trying to manage distractions, boost productivity, or
          just gain a better understanding of your browsing habits, our
          extension offers the tools you need — all in one place.
        </div>
        <div className="aboutImgConatiner">
          <img src={img2} alt="" className="aboutimg" />
        </div>
      </div>
      <div className="Aboutcontainer">
        <div className="aboutImgConatiner">
          <img src={img3} alt="" className="aboutimg" />
        </div>
        <div className="AboutContent">
          We’re committed to providing a seamless experience with no unnecessary
          features, just the data you need to stay informed. Join the growing
          number of users taking control of their online time, and see how a
          small change can make a big difference.
        </div>
      </div>
    </section>
  );
};

export default About;
