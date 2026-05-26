import React from "react";
import "./Profile.css";
import BackButton from "../../components/BackButton";

const Profile = () => {
  const walletAddress = localStorage.getItem("walletAddress");

  return (
    
    <div className="profile-page">
      <BackButton />

      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">U</div>

          <div>
            <h1>User Profile</h1>
            <p>Manage your Web3 account details</p>
          </div>
        </div>

        <div className="profile-info">
          <div className="info-box">
            <label>Name</label>
            <p>User Name</p>
          </div>

          <div className="info-box">
            <label>Email</label>
            <p>user@email.com</p>
          </div>

          <div className="info-box">
            <label>Wallet Address</label>
            <p className="wallet-text">
              {walletAddress || "No wallet connected"}
            </p>
          </div>

          <div className="info-box">
            <label>Account Status</label>
            <p className="status">Active</p>
          </div>
        </div>

        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;