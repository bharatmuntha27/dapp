import React from "react";
import "./Wallet.css";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";

const Wallet = () => {
  const walletAddress = localStorage.getItem("walletAddress");

  return (
    <div className="wallet-page">
        <BackButton />
      <div className="wallet-card">
        <h1>Wallet</h1>
        <p>Manage your connected Web3 wallet</p>

        <div className="wallet-info">
          <label>Connected Address</label>
          <p>{walletAddress || "No wallet connected"}</p>
        </div>

        <div className="wallet-grid">
          <div className="wallet-box">
            <h3>Balance</h3>
            <h2>0.00 ETH</h2>
          </div>

          <div className="wallet-box">
            <h3>Network</h3>
            <h2>Ethereum</h2>
          </div>

          <div className="wallet-box">
            <h3>Status</h3>
            <h2>Connected</h2>
          </div>
        </div>

        <button className="wallet-btn">Disconnect Wallet</button>
      </div>
    </div>
  );
};

export default Wallet;