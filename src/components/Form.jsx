import React, { useState, useEffect } from "react";

//Component imports
import Button from "./Button";
import Input from "./Input";

//Functional imports
import { useWorksDispatch, useAppState } from "../context/WorksContext";
import { RiImageAddFill } from "react-icons/ri";

const Form = () => {
  //Hooks
  const dispatch = useWorksDispatch();

  //LocalState
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImg, setProjectImg] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState(false);

  //Functional

  const handleProjectTitleChange = (e) => {
    e.preventDefault();
    setProjectTitle(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    e.preventDefault();
    setProjectDescription(e.target.value);
  };

  const handleProjectImgChange = (e) => {
    const img = e.target.files[0];
    if (img && img.type.substring(0, 5) === "image") {
      setProjectImg(URL.createObjectURL(img));
      setErrorMessage(false);
    } else {
      setProjectImg(null);
      setErrorMessage(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (projectTitle && projectDescription && projectImg) {
      dispatch({
        type: "added",
        id: crypto.randomUUID(),
        title: projectTitle,
        description: projectDescription,
        image: projectImg,
      });
      setFormErrorMessage(false);
    } else {
      setFormErrorMessage(true);
    }
  };

  //Effects

  useEffect(() => {
    if (projectTitle && projectDescription && projectImg) {
      setFormErrorMessage(false);
    } else {
      setFormErrorMessage(true);
    }
  }, [projectTitle, projectDescription, projectImg]);

  return (
    <form>
      {formErrorMessage && (
        <span className="text-danger">Complete ALL fields</span>
      )}

      <Input
        placeholder="Add Project Title"
        onChange={handleProjectTitleChange}
        type="text"
        name="title"
        label={"Project Title"}
        value={projectTitle}
      />

      <Input
        placeholder={"Add Project Description"}
        onChange={handleProjectDescriptionChange}
        name={"description"}
        value={projectDescription}
        label={"Project Description"}
      />

      <label className="label-img-input">
        {projectImg?.name ? projectImg.name : "Select Image"}
        <input
          type="file"
          id="image"
          name="image"
          accept="image/jpeg, image/png"
          defaultValue={projectImg}
          onChange={handleProjectImgChange}
        />
        <RiImageAddFill />
      </label>

      {errorMessage && (
        <span className="text-danger">
          The image you have uploaded is not of type img or png
        </span>
      )}

      <Button
        title={"SUBMIT"}
        color={formErrorMessage ? "danger" : "secondary-light"}
        handleClick={handleSubmit}
      />
    </form>
  );
};

export default Form;
