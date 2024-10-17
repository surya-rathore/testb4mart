import React, { useState } from 'react';
import "../../Css/UserProfile.css"

const Profile = () => {
  return (
    <div className='userprofile'>
     
    <div className="profile-edit-container">
      {/* Left Sidebar */}
      <div className="profile-edit-sidebar">
        <div className="profile-edit-details">
          <img
            src="https://imgs.search.brave.com/D1Qf4rHF1g9nW99i8wwb75woKfvdg5LMRwv2fual0t8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZGVh/ZHBvb2wtbW92aWUt/bG9va2luZy1iZWhp/bmQteWpkM2pseWo2/MzA1cTlycy5qcGc"
            alt="User"
            className="profile-edit-image"
          />
          <h3 className="profile-edit-username">Yash Mandlekar</h3>
          <p className="profile-edit-email">yash@mail.com</p>
        </div>
        <div className="profile-edit-menu">
          <button className="profile-edit-menu-button">Your Orders</button>
          <button className="profile-edit-menu-button">Your Cart</button>
        </div>
      </div>

      {/* Profile Edit Form */}
      <div className="profile-edit-form">
        <h2>Profile Settings</h2>
        <form>
          <div className="profile-edit-form-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="profile-edit-form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="profile-edit-form-group">
            <label>Contact Number</label>
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="profile-edit-form-group">
            <label>Address Line 1</label>
            <input type="text" placeholder="Address Line 1" />
          </div>
          <div className="profile-edit-form-group">
            <label>Address Line 2</label>
            <input type="text" placeholder="Address Line 2" />
          </div>
          <div className="profile-edit-form-group">
            <label>Pincode</label>
            <input type="text" placeholder="Pincode" />
          </div>
          <div className="profile-edit-form-group">
            <label>State/Region</label>
            <input type="text" placeholder="State/Region" />
          </div>
          <div className="profile-edit-form-group">
            <button type="submit" className="profile-edit-save-button">
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Profile;
