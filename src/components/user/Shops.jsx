import React from "react";

import { Link } from "react-router-dom";
const Shops = ({ data }) => {
  return (
    <>
      <Link to={`shopProducts/${data._id}`} className="shoperBox">
          <div className="top">
            <img src="https://www.shutterstock.com/image-vector/shop-logo-good-260nw-1290022027.jpg" />
          </div>
          <div className="name">{data.username}</div>
      </Link>
    </>
  );
};

export default Shops;
