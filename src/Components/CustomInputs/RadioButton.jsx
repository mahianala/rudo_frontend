import React from "react";

const RadioButton = ({ values, setValues, label, name, value ,required}) => {
  const inputChangeHandler = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="flex align-center mb-10">
      <input
        onChange={inputChangeHandler}
        type="radio"
        name={name}
        value={value}
        required={required}
        checked ={values[name]===value||false}
      />
      <p className="ml-5">{label}</p>
    </div>
  );
};

export default RadioButton;
