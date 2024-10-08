import React from "react";
import img1 from "../images/logo3.png";

const Footer = () => {
  return (
    <footer className="footer section" id="contact">
      <div className="footer-container">
        <div className="footer-left ">
          <div className="footerText" style={{ display: "flex" }}>
            <img
              src={img1}
              alt="loading...."
              style={{ width: "20px", height: "20px" }}
            />
            &nbsp;
            <h3 className="">Tab Time Tracker</h3>
          </div>
          <p
            className="footerText"
            style={{ fontSize: "12px", flexWrap: "wrap" }}
          >
            Efficient browsing insights to optimize your web habits.
          </p>
        </div>
        <div className="footer-center">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="https://www.privacypolicies.com/live/b5a07d25-aaaa-4216-b464-24786fc90d6e">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Follow Us</h4>
          <ul
            className="social-icons"
            style={{ textAlign: "center", padding: "1px" }}
          >
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i
                  class="fa-brands fa-facebook"
                  style={{ color: " #3663b0" }}
                ></i>
                &nbsp; Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i
                  class="fa-brands fa-twitter"
                  style={{ color: " #74C0FC" }}
                ></i>
                &nbsp; Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i
                  class="fa-brands fa-linkedin"
                  style={{ color: "#2e59a3" }}
                ></i>
                &nbsp; LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" style={{ textAlign: "center" }}>
        <p>
          &copy; {new Date().getFullYear()} Tab Time Tracker | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
