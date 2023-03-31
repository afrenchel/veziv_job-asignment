import React from "react";

const Button = (props) => {
  const {
    className,
    type,
    color = "primary",
    title,
    icon,
    handleClick,
  } = props;
  return (
    <button onClick={handleClick} className={`btn btn-${color} btn-${type}`}>
      {title ? title : icon}
    </button>
  );
};

export default Button;
