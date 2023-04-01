import React from "react";

//@label Component Imports
import Button from "./Button";

//@label Functional Imports

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useWorksDispatch } from "../context/WorksContext";

const Card = ({ work }) => {
  //Hooks
  const dispatch = useWorksDispatch();

  //Functional
  const handleDeleteWork = () => {
    dispatch({ type: "deleted", id: work.id });
  };
  const openModal = () => {
    dispatch({ type: "openModalDetails", id: work.id });
  };

  return (
    <div className="card">
      <img src={work.image} alt="" />
      <div className="card-info">
        <h3>{work.title}</h3>
        <p>{work.description}</p>
      </div>
      <div className="card-cta card-cta__details">
        <Button
          type={"rounded text-primary"}
          handleClick={openModal}
          icon={<AiFillEdit />}
        />
      </div>
      <div className="card-cta card-cta__delete">
        <Button
          type={"rounded"}
          color={"danger"}
          icon={<AiFillDelete />}
          handleClick={handleDeleteWork}
        />
      </div>
    </div>
  );
};

export default Card;
