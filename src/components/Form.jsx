import React, { useState } from "react";

const Form = ({ workData, setModalState }) => {
  const [inputValue, setInputValue] = useState(workData);

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalState({
      isOpen: true,
      workData: { title: inputValue, description: "TEST" },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Project Title</label>
      <input
        onChange={handleChange}
        type="text"
        name="title"
        id="title"
        value={inputValue}
      />
    </form>
  );
};

export default Form;
