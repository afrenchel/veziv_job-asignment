import React from "react";

const Button = (props) => {
  const { className, title, icon, handleClick } = props;
  return (
    <button onClick={handleClick} className={`btn-primary btn-${className}`}>
      {title ? title : icon}
    </button>
  );
};

export default Button;
