import React from "react";
import "../../Css/Home.css";
import { NavLink } from "react-router-dom";
import Vector from "../../assets/Vector.svg";
import Profile from "../../assets/profile.svg";
import Notification from "../../assets/notification.svg";
import search from "../../assets/search.svg";
import cart from "../../assets/cart.svg";
import location from "../../assets/location.svg";
import Logout from "../../assets/logout.svg";
import Logo from "../common/Logo";
import { asynclogout } from "../../store/userActions";
import { useDispatch } from "react-redux";

const SideNav = () => {
  const Dispatch = useDispatch();
  const handleLogout = async () => {
    if (window.confirm("Are you really want to logout?")) {
      Dispatch(asynclogout());
      // if (data.success) {
      //   navigate("/");
      // }
    }
  };
  return (
    <div className="sideNav">
      <Logo />
      <div className="sideNavBase">
        <div className="navTop">
          <NavLink to="/home" activeclassname="active">
            <img src={Vector} alt="" />
          </NavLink>
          <NavLink to="/home/profile" activeclassname="active">
            <img src={Profile} alt="" />
          </NavLink>
          <NavLink to="/notification" activeclassname="active">
            <img src={Notification} alt="" />
          </NavLink>
          <NavLink to="/notification" activeclassname="active">
            <img src={search} alt="" />
          </NavLink>
          <NavLink to="/home/cart" activeclassname="active">
            <img src={cart} alt="" />
          </NavLink>
          <NavLink to="/notification" activeclassname="active">
            <img src={location} alt="" />
          </NavLink>
        </div>
        <div className="navBottom">
          <button onClick={handleLogout} className="logout">
            <img src={Logout} alt="" />
          </button>
          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1629364964671-053e86d40e63?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
