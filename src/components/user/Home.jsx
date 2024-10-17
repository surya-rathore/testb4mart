import React, { useEffect, useState } from "react";
import "../../Css/Home.css";
import Search from "./Search";
import SideNav from "./SideNav";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);
  return (
    <div className="main">
      <Search />
      <div className="content-area">
        <Outlet />
      </div>
      <SideNav />
    </div>
  );
};

export default Home;
