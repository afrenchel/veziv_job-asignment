import React, { useId } from "react";

const Input = ({
  type = "text",
  onChange,
  name,
  value,
  label,
  placeholder,
}) => {
  const uniqueId = useId();

  return (
    <div className="input-container">
      <label htmlFor={uniqueId}>{label}</label>
      <input
        type={type}
        id={uniqueId}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
