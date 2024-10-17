import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloaduser } from "./store/userActions";
import { toast } from "react-toastify";
import Home from "./components/user/Home";
import ShopProduct from "./components/user/ShopProduct";
import SingleProduct from "./components/user/SingleProduct";
import MainContent from "./components/user/MainContent";
import LogIn from "./components/user/LogIn";
import Cart from "./components/user/Cart";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminShops from "./components/admin/AdminShops";
import Products from "./components/admin/Products";
import Dashboard from "./components/admin/Dashboard";
import Loader from "./components/common/Loader";
import Orders from "./components/admin/Orders";
import Users from "./components/admin/Users";
import Profile from "./components/admin/Profile";
import UserProfile from "./components/user/Profile"
const App = () => {
  const notify = (msg) => toast(msg ?? "Something went wrong");
  const { page_loading, error } = useSelector((state) => state.user);

  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(asyncloaduser());
  }, []);

  useEffect(() => {
    if (error) notify(error);
  }, [error]);

  if (page_loading) {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="shops" element={<AdminShops />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />}>
          <Route index element={<MainContent />} />
          <Route path="shopProducts/:id" element={<ShopProduct />} />
          <Route path=":id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
