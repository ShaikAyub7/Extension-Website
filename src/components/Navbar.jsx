import React from "react";
import { NavbarData } from "../Data";
import img1 from "../images/logo3.png";

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
      </ul>
    </nav>
  );
};
export default Navbar;
