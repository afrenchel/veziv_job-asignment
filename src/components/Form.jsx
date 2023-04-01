import React, { useState, useContext } from "react";

import { useWorksDispatch, useAppState } from "../context/WorksContext";
import Button from "./Button";

const Form = () => {
  const appState = useAppState();

  const dispatch = useWorksDispatch();
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleProjectTitleChange = (e) => {
    e.preventDefault();
    setProjectTitle(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    e.preventDefault();
    setProjectDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "added",
      id: crypto.randomUUID(),
      title: projectTitle,
      description: projectDescription,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Project Title</label>
      <input
        placeholder="Add Project Title"
        onChange={handleProjectTitleChange}
        type="text"
        name="title"
        id="title"
        value={projectTitle}
      />
      <input
        placeholder="Add Project description"
        onChange={handleProjectDescriptionChange}
        type="text"
        name="description"
        id="description"
        value={projectDescription}
      />
      <Button title={"SUBMIT"} handleClick={handleSubmit} />
    </form>
  );
};

export default Form;
