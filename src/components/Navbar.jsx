import React from "react";
import { NavbarData } from "../Data";
import img1 from "../images/logo3.png";
import img2 from "../images/edge-logo.png";

import "../index.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={img1} alt="" />
        <p className="title">Tab Time Tracker</p>
      </div>
      <ul>
        {NavbarData.map((li) => {
          return (
            <li key={li.id}>
              <a href={li.href}>{li.text}</a>
            </li>
          );
        })}
        <div
          className="downloadBtn nav-btn"
          style={{
            margin: "0",
            height: "40px",
            textAlign: "center",
            background: "none",
            border: "0.5px solid gray",
          }}
        >
          <img src={img2} alt="" style={{ width: "30px" }} />
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/aoecofhfffbfnkekppdgicmnfjmfdmoe "
            target="_blank"
            style={{ fontSize: "16px", width: "100%" }}
          >
            Download
          </a>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
