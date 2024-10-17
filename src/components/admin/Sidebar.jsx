// src/components/Sidebar.js
import React, { useState } from "react";
import "../../Css/Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { RiRedPacketLine } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import Logo from "../../Images/B4mart.png"
import { GoHome } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asynclogout } from "../../store/userActions";
export default function Sidebar() {
  const { role } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = async () => {
    if (window.confirm("Are you really want to logout?")) {
      Dispatch(asynclogout());
      navigate("/admin-login");
    }
  };
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div>
          <div className="sidebar-header">
            <img
              src={Logo}
              alt="B4Mart Logo"
              className="logo"
            />
            <h2>B4Mart</h2>
          </div>

          <ul className="sidebar-menu">
            <li>
              <Link to="/admin">
                <MdOutlineDashboard />
                Dashboard
              </Link>
            </li>
            {role == "admin" && (
              <>
                <li>
                  <Link to="/admin/shops">
                    <GoHome /> Shops
                  </Link>
                </li>
                <li>
                  <Link to="/admin/users">
                    <TbUsersGroup />
                    Users
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/admin/products">
                <BsBag />
                Products
              </Link>
            </li>
            <li className="bottomBor">
              <Link to="/admin/orders">
                <RiRedPacketLine /> Orders
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-footer">
          <Link to="/admin/profile" className="side-item">
            <FaRegUser />
            Profile
          </Link>
          <div className="side-item" onClick={handleLogout}>
            <IoIosLogOut /> Logout
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="toggle-button" onClick={toggleSidebar}>
        <i className="icon">☰</i>
      </div>
    </>
  );
}
