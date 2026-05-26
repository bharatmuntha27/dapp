import React from "react";
import "./Security.css";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";

const Security = () => {
  return (
    <div className="security-page">
<BackButton />
      <div className="security-header">
        <h1>Security Center</h1>
        <p>Protect your decentralized account and wallet</p>
      </div>

      <div className="security-grid">

        <div className="security-card">
          <h2>Wallet Authentication</h2>
          <p>
            Your MetaMask wallet is securely connected to the dApp.
          </p>

          <span className="secure-status">
            Active
          </span>
        </div>

        <div className="security-card">
          <h2>Two-Factor Security</h2>
          <p>
            Add an extra security layer for your Web3 account.
          </p>

          <button>
            Enable 2FA
          </button>
        </div>

        <div className="security-card">
          <h2>Login Activity</h2>
          <p>
            Monitor recent login sessions and wallet activity.
          </p>

          <button>
            View Activity
          </button>
        </div>

        <div className="security-card">
          <h2>Recovery Settings</h2>
          <p>
            Backup and secure your recovery methods safely.
          </p>

          <button>
            Manage Recovery
          </button>
        </div>

      </div>
    </div>
  );
};

export default Security;