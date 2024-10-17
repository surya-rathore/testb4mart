import React, { useEffect, useState } from "react";
import "../../Css/AdminShops.css";
import {
  asynallshops,
  asynccreateshop,
  asyncremoveshop,
} from "../../store/userActions";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../common/Toast";
import { useNavigate } from "react-router-dom";
const AdminShops = () => {
  const Dispatch = useDispatch();
  const navigate = useNavigate()
  const { shops, role } = useSelector((state) => state.user);

  const [formdata, setformdata] = useState({
    username: "",
    contact: "",
    password: "",
  });
  const { username, contact, password } = formdata;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (username.length < 3) return notify("Enter a vaild username");
      if (contact.length != 10) return notify("Enter a vaild number");
      Dispatch(asynccreateshop(formdata));
      setformdata({ username: "", contact: "", password: "" });
    } catch (err) {
      alert(err);
    }
  };
  const handleDeleteShop = (id) => {
    if (window.confirm("Are you sure want to delete?"))
      Dispatch(asyncremoveshop(id));
  };
  useEffect(() => {
    Dispatch(asynallshops());
    if (role) {
      if (role != "admin") navigate("/admin")
    }
  }, []);
  return (
    <>
        <div className="shop-table-container">
          <h1>Shop Management</h1>

          {/* Add Shop Form */}
          <form onSubmit={handleSubmit} className="add-shop-form">
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
              placeholder="Shop Name"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <input
              type="text"
              name="contact"
              value={contact}
              onChange={handleInputChange}
              placeholder="Contact Number"
            />
            <button type="submit">Add Shop</button>
          </form>

          {/* Shop Table */}
          <table className="shop-table">
            <thead>
              <tr>
                <th>DP</th>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Products</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {shops &&
                shops.map((shop, index) => (
                  <tr key={shop._id}>
                    <td>
                      <img
                        src="https://images.unsplash.com/photo-1635436338433-89747d0ca0ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFpcnl8ZW58MHx8MHx8fDA%3D"
                        alt="Shop DP"
                        className="shop-dp"
                      />
                    </td>
                    <td>{shop?.username}</td>
                    <td>{shop?.contact}</td>
                    <td>{shop?.products?.length}</td>
                    <td>
                      <button onClick={() => handleDeleteShop(shop._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
    </>
  );
};

export default AdminShops;
