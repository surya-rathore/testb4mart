import React from "react";
import "../../Css/Home.css";
import { NavLink } from "react-router-dom";
import Logos from "../../Images/B4mart.png"
const Logo = () => {
  return (
    <NavLink to="/" className="monty" activeclassname="active">
      <div className="logo">
        <img
          src={Logos}
          alt=""
        />
      </div>
    </NavLink>
  );
};

export default Logo;
