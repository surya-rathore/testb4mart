import React, { useState } from "react";
import "../../Css/product.css";
import { Link } from "react-router-dom";
const Product = ({ data }) => {
  const [quantity, setQuantity] = useState(0);

  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 0));
  };
  
  return (
    <>
    <div className="productBox">
    <Link to={data.link}>
        <div className="image">
          <img src={data.img} alt="" />
        </div>
        </Link>
        <div className="content">
        <Link to={data.link}>
          <div className="name boxi">
            <p>{data.productName} </p>
          </div>
          </Link>
          <div className="quantity boxi"> {data.quantity} </div>
          <div className="overlap">
            <div className="price "> ₹{data.price}</div>
            <div className="add ">
            <button type="button" className="button">
      {quantity === 0 ? (
        
        <span className="button__text" onClick={increaseQuantity}>
          Add Item
        </span>
      ) : (
        
        <div className="button__content">
          <span className="button__icon" onClick={decreaseQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
              height="24"
              fill="none"
              className="svg"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
          <span className="button__text">{quantity}</span>
          <span className="button__icon" onClick={increaseQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
              height="24"
              fill="none"
              className="svg"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
        </div>
      )}
    </button>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Product;
