import React, { useId } from "react";

const Input = ({
  type = "text",
  onChange,
  name,
  value,
  label,
  placeholder,
  errorMessage,
  accept,
  defaultValue,
}) => {
  const uniqueId = useId();

  return (
    <div className="input-container">
      <label
        className={`${accept ? "label-img-input" : ""}`}
        htmlFor={uniqueId}
      >
        {label}
      </label>
      <input
        className={`${errorMessage ? "input-err" : ""}`}
        type={type}
        id={uniqueId}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        accept={accept}
        defaultValue={defaultValue}
      />
      <span className="text-danger">
        {errorMessage && accept ? errorMessage : ""}
      </span>
    </div>
  );
};

export default Input;
