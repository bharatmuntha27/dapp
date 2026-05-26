import React from "react";
import "./Settings.css";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";

const Settings = () => {
  const walletAddress = localStorage.getItem("walletAddress");

  return (
    <div className="settings-page">
      <BackButton />
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your dApp account preferences</p>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <h2>Account Settings</h2>

          <label>Wallet Address</label>
          <input value={walletAddress || "No wallet connected"} readOnly />

          <label>Username</label>
          <input placeholder="Enter username" />

          <button>Save Changes</button>
        </div>

        <div className="settings-card">
          <h2>Notification Settings</h2>

          <div className="setting-row">
            <span>Email Notifications</span>
            <input type="checkbox" />
          </div>

          <div className="setting-row">
            <span>Transaction Alerts</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="setting-row">
            <span>Security Alerts</span>
            <input type="checkbox" defaultChecked />
          </div>
        </div>

        <div className="settings-card danger-card">
          <h2>Danger Zone</h2>
          <p>Disconnect wallet and clear saved session data.</p>

          <button
            className="danger-btn"
            onClick={() => {
              localStorage.removeItem("walletAddress");
              window.location.href = "/";
            }}
          >
            Disconnect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;