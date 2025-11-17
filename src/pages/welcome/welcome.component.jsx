import React from "react";
import "./welcome.style.scss";

const Welcome = ({ children }) => {
  return (
    <div className="section" id="welcome">
      {children}
    </div>
  );
};

export default Welcome;
