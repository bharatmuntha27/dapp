import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = () => {
  const navigate = useNavigate();

  const [walletAddress, setWalletAddress] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

useEffect(() => {

  // Prevent browser back after logout
  window.history.pushState(null, "", window.location.href);

  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
  };

  // Check MetaMask
  if (!window.ethereum) return;

  const handleAccountsChanged = (accounts) => {

    if (accounts.length > 0) {

      const wallet = accounts[0];

      setWalletAddress(wallet);

      localStorage.setItem("walletAddress", wallet);

    } else {

      setWalletAddress("");

      localStorage.removeItem("walletAddress");

      navigate("/", { replace: true });

    }
  };

  window.ethereum.on(
    "accountsChanged",
    handleAccountsChanged
  );

  return () => {

    window.ethereum.removeListener(
      "accountsChanged",
      handleAccountsChanged
    );

  };

}, [navigate]);

const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      alert("MetaMask is not installed. Please install MetaMask.");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const wallet = accounts[0];

    setWalletAddress(wallet);

    // Save Wallet
    localStorage.setItem("walletAddress", wallet);

    alert("MetaMask connected successfully");

    // Redirect Dashboard
    navigate("/profile-dashboard");

  } catch (error) {
    console.error("Wallet connection error:", error);
    alert("Wallet connection failed");
  }
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!walletAddress) {
      alert("Please connect MetaMask wallet first");
      return;
    }

    console.log({
      ...formData,
      walletAddress,
    });

    const adminWallet = "0xYourAdminWalletAddress".toLowerCase();
    const customerWallet = "0xYourCustomerWalletAddress".toLowerCase();
    const currentWallet = walletAddress.toLowerCase();

    if (currentWallet === adminWallet) {
      navigate("/admin-dashboard");
    } else if (currentWallet === customerWallet) {
      navigate("/customer-dashboard");
    } else {
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>dApp Signup</h2>
        <p>Create account using MetaMask wallet</p>

        <button type="button" className="wallet-btn" onClick={connectWallet}>
          {walletAddress
            ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
            : "Connect MetaMask"}
        </button>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="signup-btn">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;