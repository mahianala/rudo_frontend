import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ListTransaction.css";
import Transaction from "./Transaction";

const ListTransactions = () => {
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
  return (
    <div className="page">
      <h3>Transactions List</h3>
      {transactions?.map((each) => (
        <Transaction
          amount={each?.amount}
          isDebit={each?.type == "debit"}
          created_at={each?.created_at}
          transaction_id={each?.id}
          fetchTransactions = {fetchTransactions}
        />
      ))}
    </div>
  );
};

export default ListTransactions;
