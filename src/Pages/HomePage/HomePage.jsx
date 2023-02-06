import axios from "axios";
import React, { useEffect, useState } from "react";
import LineChart from "./Charts/LineChart";
import { PieChart } from "./Charts/PieChart";
import "./HomePage.css";

const HomePage = () => {
  const [data, setData] = useState({});
  const [sum, setSum] = useState({});

  const dataFilteringHandler = (transactions) => {
    let credits = transactions.filter((each) => each.type === "credit");
    let debits = transactions.filter((each) => each.type === "debit");
    setData({ credits: credits, debits: debits });
    let creditSum = 0;
    let debitsSum = 0;
    transactions.forEach((each) => {
      if (each.type === "credit") {
        creditSum +=  parseInt(each.amount||0) ;
      } else {
        debitsSum += parseInt(each.amount||0) ;
      }
    });
    setSum({
      debit : debitsSum,
      credit : creditSum
    })
  };

  const fetchTransactions = () => {
    axios
      .get("/transactions")
      .then((res) => {
        if (res?.data?.success) {
          dataFilteringHandler(res?.data?.data);
        } else {
          console.log(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchTransactions();
  }, []);

  console.log(sum)

  return (
    <div className="page">
      <div className="line_chart">
        <LineChart credits={data?.credits} debits={data?.debits} />
        <PieChart  credit={sum?.credit} debit={sum?.debit} />
      </div>
    </div>
  );
};

export default HomePage;
