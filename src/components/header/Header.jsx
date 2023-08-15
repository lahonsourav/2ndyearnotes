import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="title-container">
        <h3>2ND YEAR NOTES</h3>
      </div>
      <div className="header-bar">
        <ul>
          <li>Home</li>
          <li>Subjects</li>
          <li>labs</li>
          <li>Submit Notes</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
