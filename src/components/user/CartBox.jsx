import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartBox = ({data}) => {
  const [quantity, setQuantity] = useState(1);

  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  return (
  
    <div>
       <div className="line"></div>
          <div className="itemsList">
            <div className="shoppingItemImg">
              <img src={data.img} alt="" />
            </div>
            <div className="shoopingDetails">
              <h3>{data.productName}</h3>
              <p>{data.quantity}</p>
              <span>In Stock</span>
              <p>
                <b>About this item:</b>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corporis, natus culpa unde facere impedit amet
                quia assumenda, officia recusandae ducimus, temporibus ratione
                dolore earum!
              </p>
              <p>
                <b>Cancellation Policy :</b> Orders cannot be cancelled once
                packed for delivery. In case of unexpected delays, a refund will
                be provided, if applicable.
              </p>
              <Link>Delete this item</Link>
              <button type="button2" className="button">
      {
        
        
      
        
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
          <span className="button__text tulu">{quantity}</span>
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
    
      }
    </button>
            </div>
            <div className="productPrice">₹{data.price}</div>
          </div>
          <div className="line"></div>
    </div>
  );
}

export default CartBox;
