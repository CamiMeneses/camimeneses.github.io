import React, { ReactNode } from "react";
import "./welcome.style.scss";

interface WelcomeProps {
  children?: ReactNode;
}

const Welcome = ({ children }: WelcomeProps) => {
  return (
    <div className="section" id="welcome">
      {children}
    </div>
  );
};

export default Welcome;
