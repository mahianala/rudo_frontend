import axios from "axios";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Transaction = ({ amount, isDebit, created_at, transaction_id ,fetchTransactions }) => {
  const navigate = useNavigate()
  const editClickHandler = () => {
    navigate(`/update-transaction/${transaction_id}`)
  };
  const deleteClickHandler = () => {
    axios
      .delete(`transactions/${transaction_id}`)
      .then((res) => {
        if (res?.data?.success) {
          alert(res?.data?.message);
          fetchTransactions()
        } else {
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="transaction">
      <div className="flex data">
        <p className={`amount ${isDebit ? "debit" : "credit"}`}>
          {`${isDebit ? "-" : "+"}${amount || 0}`}
        </p>
        <p className="created_at">{created_at}</p>
        <p className="trans_id">#{transaction_id}</p>
      </div>
      <div className="actions flex">
        <div onClick={deleteClickHandler} className="icon delete">
          <AiFillDelete />
        </div>
        <div onClick={editClickHandler} className="icon edit">
          <AiFillEdit />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
