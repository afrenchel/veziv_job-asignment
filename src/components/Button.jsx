import React from "react";

const Button = (props) => {
  const {
    type,
    color = "primary",
    title,
    icon,
    handleClick,
    additionalStyle,
    disabled,
  } = props;
  return (
    <button
      onClick={handleClick}
      className={`btn btn-${color} btn-${type} ${additionalStyle}`}
      disabled={disabled}
    >
      {title ? title : icon}
    </button>
  );
};

export default Button;
