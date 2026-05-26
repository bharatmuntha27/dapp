import React from "react";
import "./Transactions.css";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";

const Transactions = () => {
  const transactions = [
    {
      id: 1,
      type: "Received",
      amount: "0.45 ETH",
      status: "Success",
      date: "26 May 2026",
    },
    {
      id: 2,
      type: "Sent",
      amount: "1.20 ETH",
      status: "Pending",
      date: "25 May 2026",
    },
    {
      id: 3,
      type: "NFT Mint",
      amount: "0.08 ETH",
      status: "Success",
      date: "24 May 2026",
    },
  ];

  return (
    <div className="transactions-page">
      <BackButton />
      <div className="transactions-header">
        <h1>Transactions</h1>
        <p>Track your blockchain activity</p>
      </div>

      <div className="transactions-table">
        <div className="table-head">
          <span>Type</span>
          <span>Amount</span>
          <span>Status</span>
          <span>Date</span>
        </div>

        {transactions.map((tx) => (
          <div className="table-row" key={tx.id}>
            <span>{tx.type}</span>

            <span>{tx.amount}</span>

            <span
              className={
                tx.status === "Success"
                  ? "success"
                  : "pending"
              }
            >
              {tx.status}
            </span>

            <span>{tx.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
