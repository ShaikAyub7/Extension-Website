import React from "react";
import img2 from "../images/edge-logo.png";

const StartedNow = () => {
  return (
    <div className="getStart">
      <div>
        <h2> Get Started Now</h2>
        <div className="getStartContent">
          Ready to optimize your browsing time and improve productivity?
          Download Tab Time Tracker today and take the first step toward better
          time management online.
          <div style={{ marginTop: "2rem" }} className="footerBtn">
            <img src={img2} alt="" style={{ width: "30px" }} />
            <a href="">Download Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartedNow;
