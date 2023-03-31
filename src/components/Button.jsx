import React from "react";

const Button = (props) => {
  const {
    type,
    color = "white",
    title,
    icon,
    handleClick,
    additionalStyle,
  } = props;
  return (
    <button
      onClick={handleClick}
      className={`btn btn-${color} btn-${type} ${additionalStyle}`}
    >
      {title ? title : icon}
    </button>
  );
};

export default Button;
