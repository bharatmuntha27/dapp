import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginSignup from "./pages/loginSignup/LoginSignup";
import ProfileDashboard from "./pages/profileDashboard/ProfileDashboard";
import Profile from "./pages/profile/Profile";
import Transactions from "./pages/transactions/Transactions";
import Wallet from "./pages/wallet/Wallet";
import Security from "./pages/security/Security";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/profile-dashboard" element={<ProfileDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/security" element={<Security />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;