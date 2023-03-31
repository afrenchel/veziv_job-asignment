import React from "react";
import img from "../assets/proj1.png";
import { CgMoreVertical } from "react-icons/cg";
import { AiFillDelete } from "react-icons/ai";
import Button from "./Button";

const Card = ({ work, setModalState }) => {
  const handleDeleteWork = () => {
    console.log("handleDeleteWork");
  };

  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-info">
        <h3>{work.title}</h3>
        <p>{work.description}</p>
      </div>
      <div className="card-cta card-cta__details">
        <Button
          type={"rounded"}
          handleClick={() => setModalState({ isOpen: true, workData: work })}
          icon={<CgMoreVertical />}
        />
      </div>
      <div className="card-cta card-cta__delete">
        <Button
          type={"rounded"}
          color={"danger"}
          handleClick={handleDeleteWork}
          icon={<AiFillDelete />}
        />
      </div>
    </div>
  );
};

export default Card;
