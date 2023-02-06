import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import RadioButton from "../../Components/CustomInputs/RadioButton";
import TextField from "../../Components/CustomInputs/TextField";
import "./AddTransaction.css";

const AddTransaction = ({ isUpdate }) => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const formSubmitHandler = (e) => {
    e?.preventDefault();
    let payload = values;
    payload.created_by = "000000";
    if (isUpdate) {
      axios
        .put(`/transactions/${id}`, payload)
        .then((res) => {
          console.log(res?.data);
          if (res?.data?.success) {
            alert(res?.data?.message);
            navigate("/transactions");
          } else {
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      axios
        .post("/transactions", payload)
        .then((res) => {
          console.log(res?.data);
          if (res?.data?.success) {
            alert(res?.data?.message);
            navigate("/transactions");
          } else {
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    if (isUpdate) {
      axios
        .get(`/transactions/${id}`)
        .then((res) => {
          if (res?.data?.success) {
            let transaction = res?.data?.data?.[0];
            setValues(transaction);
          } else {
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);
  return (
    <div className="page">
      {isUpdate && (
        <Link className="mb-10" to="/transactions">
          Go Back
        </Link>
      )}
      <h1 className="mb-10">
        {isUpdate ? "Update Transaction" : "Create Transaction"}
      </h1>
      <form onSubmit={formSubmitHandler} className="transaction_create">
        <TextField
          required
          name="amount"
          values={values}
          setValues={setValues}
          placeholder="Enter transaction amount"
          type="number"
        />
        <div className="flex radio_group">
          <RadioButton
            label="Debit"
            name="type"
            setValues={setValues}
            values={values}
            value="debit"
            required
          />
          <RadioButton
            label="Credit"
            name="type"
            setValues={setValues}
            values={values}
            value="credit"
            required
          />
        </div>

        <Button
          type="submit"
          label={isUpdate ? "Update Transaction" : "Add Transaction"}
        />
      </form>
    </div>
  );
};

export default AddTransaction;
