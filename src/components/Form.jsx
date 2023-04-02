import React, { useState } from "react";

//Component imports
import Button from "./Button";
import Input from "./Input";

//Functional imports
import { useWorksDispatch, useAppState } from "../context/WorksContext";

const Form = ({ isEditing, setIsEditing, currentCard }) => {
  //Hooks
  const dispatch = useWorksDispatch();

  //LocalState
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImg, setProjectImg] = useState(null);
  const [projectLink, setProjectLink] = useState("");
  const [projectStatus, setProjectStatus] = useState(
    currentCard ? currentCard.isHidden : false
  );
  const [errorInputImgMessage, setErrorInputImgMessage] = useState("");
  const [formErrorMessage, setFormErrorMessage] = useState("");

  //Functional

  const handleProjectTitleChange = (e) => {
    e.preventDefault();
    setProjectTitle(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    e.preventDefault();
    setProjectDescription(e.target.value);
  };
  const handleProjectLinkChange = (e) => {
    e.preventDefault();
    setProjectLink(e.target.value);
  };

  const handleProjectStatusChange = (e) => {
    setProjectStatus(e.target.checked);
  };

  const handleProjectImgChange = (e) => {
    const img = e.target.files[0];
    if (img && img.type.substring(0, 5) === "image") {
      setProjectImg(URL.createObjectURL(img));
      setErrorInputImgMessage(false);
    } else {
      setProjectImg(null);
      setErrorInputImgMessage("File must be an image");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomUUID = crypto.randomUUID();
    if (!isEditing) {
      if (projectTitle && projectDescription && projectImg && projectLink) {
        dispatch({
          type: "added",
          id: randomUUID,
          title: projectTitle,
          description: projectDescription,
          image: projectImg,
          isHidden: projectStatus,
          link: projectLink,
        });
        setFormErrorMessage("");
      } else {
        setFormErrorMessage("All fields are required!");
      }
    } else {
      dispatch({
        type: "changed",
        work: {
          id: currentCard?.id,
          title: projectTitle ? projectTitle : currentCard.title,
          description: projectDescription
            ? projectDescription
            : currentCard.description,
          image: projectImg ? projectImg : currentCard.image,
          isHidden: projectStatus,
        },
      });
      setIsEditing(false);
    }
  };

  return (
    <form>
      <Input
        placeholder="Add Project Title"
        onChange={handleProjectTitleChange}
        type="text"
        name="title"
        label={"Project Title"}
        value={projectTitle}
        errorMessage={formErrorMessage}
      />

      <Input
        placeholder={"Add Project Description"}
        onChange={handleProjectDescriptionChange}
        name={"description"}
        value={projectDescription}
        label={"Project Description"}
      />
      <Input
        placeholder={"Add project link"}
        onChange={handleProjectLinkChange}
        name={"link"}
        value={projectLink}
        label={"Project Link"}
      />

      <Input
        type={"file"}
        name={"input-image"}
        accept="image/jpeg, image/png"
        defaultValue={projectImg}
        onChange={handleProjectImgChange}
        errorMessage={errorInputImgMessage}
      />

      <Input
        type={"checkbox"}
        label={"Hide Project"}
        checked={projectStatus}
        onChange={handleProjectStatusChange}
      />

      <span className="text-danger">{formErrorMessage}</span>

      <Button
        title={"SUBMIT"}
        handleClick={handleSubmit}
        additionalStyle={"bg-primary"}
      />
    </form>
  );
};

export default Form;
