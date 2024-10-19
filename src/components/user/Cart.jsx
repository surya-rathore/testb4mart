import React, { useState } from "react";
import SideNav from "./SideNav";
import "../../Css/ShoppingCart.css";
import CartBox from "./CartBox";

const Cart = () => {
  
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  const [singleProduct, setSingleProduct] = useState([{
    img: "https://5.imimg.com/data5/SELLER/Default/2021/9/SZ/QF/KE/99188395/ice-cream-packaging-boxes-3-1524677180-8.jpg",
    productName: "Vanilla Icecream",
    quantity: "500g",
    price: 250,
    link: "/home/item",
  }]);


  const [formData, setFormData] = useState({
    fullName: '',
    contactNo: '',
    pincode: '',
    houseDetails: '',
    areaDetails: '',
    landmark: '',
    townCity: '',
    defaultAddress: false,
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Address Saved!');
  
    // Call backend API to create Razorpay order
    const response = await fetch('http://localhost:4000/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 250, // Example amount
      }),
    });
  
    const orderData = await response.json();
  
    // Initialize Razorpay Payment
    const options = {
      key: 'your_key_id', // Replace with your Razorpay Key ID
      amount: orderData.amount,
      currency: 'INR',
      name: 'Your Store',
      description: 'Test Transaction',
      order_id: orderData.id,
      handler: function (response) {
        alert(`Payment Successful. Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: formData.fullName,
        contact: formData.contactNo,
        email: 'test@example.com', // Optional
      },
      theme: {
        color: '#3399cc',
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  
  return (
    <div>
      <div className="shoppingCart">
        <div className="longBox">
          <h1>Cart List</h1>
          {singleProduct.map((e,i)=>(
            <CartBox data={e} key={i}/>
          ))}
          <div className="billContainer">
          <h1>Bill Details</h1>
          <p>Total Items : 1</p>
          <p>Delivery Charge : 0</p>
          <p>Handling Charge : ₹2</p>
         <div className="payrap">
         <h2>Grand total(1 item) : <span>₹250</span></h2>
         <button className="button" onClick={toggleModal}>Procced to pay</button>
         {isOpen && (
        <div className="popup-modal__overlay">
          <div className="popup-modal__content">
            <button className="popup-modal__close-btn" onClick={toggleModal}>
              &times;
            </button>
            <h2>Enter Your Address</h2>
            <div className="address-form-container">
      <h2 className="address-form__title">Add New Address</h2>
      <form className="address-form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <label className="address-form__label">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="address-form__input"
          required
        />

        {/* Contact No */}
        <label className="address-form__label">Contact Number</label>
        <input
          type="tel"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          className="address-form__input"
          pattern="[0-9]{10}"
          required
        />

        {/* Pincode */}
        <label className="address-form__label">Pincode</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="address-form__input"
          pattern="[0-9]{6}"
          required
        />

        {/* House Details */}
        <label className="address-form__label">
          Flat, House no., Building, Company, Apartment
        </label>
        <input
          type="text"
          name="houseDetails"
          value={formData.houseDetails}
          onChange={handleChange}
          className="address-form__input"
          required
        />

        {/* Area Details */}
        <label className="address-form__label">
          Area, Street, Sector, Village
        </label>
        <input
          type="text"
          name="areaDetails"
          value={formData.areaDetails}
          onChange={handleChange}
          className="address-form__input"
          required
        />

        {/* Landmark */}
        <label className="address-form__label">Landmark</label>
        <input
          type="text"
          name="landmark"
          value={formData.landmark}
          onChange={handleChange}
          className="address-form__input"
        />

        {/* Town/City */}
        <label className="address-form__label">Town/City</label>
        <input
          type="text"
          name="townCity"
          value={formData.townCity}
          onChange={handleChange}
          className="address-form__input"
          required
        />

        {/* Checkbox for Default Address */}
        <div className="address-form__checkbox">
          <input
            type="checkbox"
            name="defaultAddress"
            checked={formData.defaultAddress}
            onChange={handleChange}
          />
          <label>Make this my default address</label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="address-form__submit-btn">
          Checkout
        </button>
      </form>
    </div>
          </div>
        </div>
      )}
         </div>
          </div>
        </div>
      </div>
      <SideNav />
    </div>
  );
};

export default Cart;
