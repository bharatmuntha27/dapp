import React, { useState } from "react";
import "./ProfileDashboard.css";
import { useNavigate } from "react-router-dom";

const ProfileDashboard = () => {
  const navigate = useNavigate();
  const walletAddress = localStorage.getItem("walletAddress");
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
  localStorage.clear();

  // Prevent browser back navigation
  window.history.pushState(null, "", "/");

  navigate("/", { replace: true });

  // Disable back button after logout
  window.onpopstate = function () {
    navigate("/", { replace: true });
  };
};

  return (
    <div className="profile-dashboard">
      <aside className={`dashboard-sidebar ${menuOpen ? "show-sidebar" : ""}`}>
        <div className="sidebar-top">
          <h2>Web3</h2>
          <button className="close-menu" onClick={() => setMenuOpen(false)}>
            ✕
          </button>
        </div>

        <nav>
          <button className="nav-btn active" onClick={() => navigate("/profile-dashboard")}>Dashboard</button>
          <button className="nav-btn" onClick={() => navigate("/profile")}>Profile</button>
          <button className="nav-btn" onClick={() => navigate("/transactions")}>Transactions</button>
          <button className="nav-btn" onClick={() => navigate("/wallet")}>Wallet</button>
          <button className="nav-btn" onClick={() => navigate("/security")}>Security</button>
          <button className="nav-btn" onClick={() => navigate("/settings")}>Settings</button>
          <button className="nav-btn logout-btn" onClick={logout}>Logout</button>
        </nav>
      </aside>

      <main className="dashboard-main">
        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          ☰ Menu
        </button>

        <header className="dashboard-header">
          <div>
            <h1>Profile Dashboard</h1>
            <p>Welcome back to your decentralized account</p>
          </div>

          <span className="wallet-badge">
            {walletAddress
              ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
              : "Wallet Connected"}
          </span>
        </header>

        <section className="hero-section">
          <div>
            <h2>Your Web3 Identity</h2>
            <p>
              Manage your wallet profile, blockchain activity, and security
              settings from one professional dashboard.
            </p>
          </div>

          <button onClick={() => navigate("/profile")}>Update Profile</button>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <p>Total Balance</p>
            <h2>0.00 ETH</h2>
            <span>Connected wallet balance</span>
          </div>

          <div className="stat-card">
            <p>Transactions</p>
            <h2>24</h2>
            <span>Recent blockchain activity</span>
          </div>

          <div className="stat-card">
            <p>Security</p>
            <h2>Active</h2>
            <span>Wallet authentication enabled</span>
          </div>
        </section>

        <section className="cards-grid">
          <div className="feature-card">
            <h3>Profile</h3>
            <p>Manage your decentralized profile information.</p>
            <button onClick={() => navigate("/profile")}>Open Profile</button>
          </div>

          <div className="feature-card">
            <h3>Transactions</h3>
            <p>View your blockchain transaction history.</p>
            <button onClick={() => navigate("/transactions")}>View Transactions</button>
          </div>

          <div className="feature-card">
            <h3>Security</h3>
            <p>Control wallet login and account protection.</p>
            <button onClick={() => navigate("/security")}>Security Settings</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileDashboard;