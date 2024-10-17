import React, { useEffect, useState } from "react";
import Advertisement from "./Advertisement";
import Shops from "./Shops";
import "../../Css/Home.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asynallshops } from "../../store/userActions";
const MainContent = () => {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const { user,shops } = useSelector((state) => state.user);
  
  const [ads, setads] = useState([
    {
      url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg",
      link: "",
    },
    // {
    //   url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg",
    //   link: "",
    // },
    // {
    //   url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg",
    //   link: "",
    // },
  ]);
  // const [shops, setShops] = useState([
  //   {
  //     url: "https://www.shutterstock.com/image-vector/shop-logo-good-260nw-1290022027.jpg",
  //     link: "shopProducts",
  //     name: "You & Me",
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2tv9RdTO23Nmk02wJECUCW1CkmOfNnBWmg&s",
  //     link: "",
  //     name: "Biryani shop",
  //   },
  //   {
  //     url: "https://www.shutterstock.com/image-vector/shop-logo-good-260nw-1290022027.jpg",
  //     link: "",
  //     name: "You & Me",
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2tv9RdTO23Nmk02wJECUCW1CkmOfNnBWmg&s",
  //     link: "",
  //     name: "Biryani shop",
  //   },
  //   {
  //     url: "https://www.shutterstock.com/image-vector/shop-logo-good-260nw-1290022027.jpg",
  //     link: "",
  //     name: "You & Me",
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2tv9RdTO23Nmk02wJECUCW1CkmOfNnBWmg&s",
  //     link: "",
  //     name: "Biryani shop",
  //   },
  //   {
  //     url: "https://www.shutterstock.com/image-vector/shop-logo-good-260nw-1290022027.jpg",
  //     link: "",
  //     name: "You & Me",
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2tv9RdTO23Nmk02wJECUCW1CkmOfNnBWmg&s",
  //     link: "",
  //     name: "Biryani shop",
  //   },
  //   {
  //     url: "https://www.shutterstock.com/image-vector/shop-logo-good-260nw-1290022027.jpg",
  //     link: "",
  //     name: "You & Me",
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2tv9RdTO23Nmk02wJECUCW1CkmOfNnBWmg&s",
  //     link: "",
  //     name: "Biryani shop",
  //   },
  //   {
  //     url: "https://www.shutterstock.com/image-vector/shop-logo-good-260nw-1290022027.jpg",
  //     link: "",
  //     name: "You & Me",
  //   },
  //   {
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2tv9RdTO23Nmk02wJECUCW1CkmOfNnBWmg&s",
  //     link: "",
  //     name: "Biryani shop",
  //   },
  // ]);
  
  useEffect(() => {
    Dispatch(asynallshops());
  }, []);
  return (
    <div className="category">
      <div className="ad-base">
        {ads.map((e, i) => (
          <Advertisement key={i} data={e} />
        ))}
      </div>
      <div className="shopBase">
        <h1>Shops</h1>
        <div className="container">
          {shops.map((e, i) => (
            <Shops key={i} data={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
