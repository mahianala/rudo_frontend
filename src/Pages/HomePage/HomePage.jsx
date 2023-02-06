import axios from "axios";
import React, { useEffect, useState } from "react";
import LineChart from "./Charts/LineChart";
import './HomePage.css'

const HomePage = () => {
  const [transactions, setTransactions] = useState(null);

  const fetchTransactions = () => {
    axios
      .get("/transactions")
      .then((res) => {
        if (res?.data?.success) {
          setTransactions(res?.data?.data?.reverse());
        } else {
          console.log(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchTransactions()
  }, []);
  console.log(transactions)
  return (
    <div className="page">
      <h3>Dashboard</h3>
      <div className="line_chart">
        <LineChart />
      </div>
    </div>
  );
};

export default HomePage;
