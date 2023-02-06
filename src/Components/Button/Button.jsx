import React from "react";
import "./Button.css";

const Button = ({ label, onClick, disabled , type }) => {
  return (
    <button  className="btn" type={type} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
