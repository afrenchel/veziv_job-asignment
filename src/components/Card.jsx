import React from "react";
import img from "../assets/proj1.png";
import { MdOutlineMoreVert } from "react-icons/md";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Button from "./Button";

const Card = ({ work, setModalState }) => {
  const handleDeleteWork = () => {
    console.log("handleDeleteWork");
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
          handleClick={() => setModalState({ isOpen: true, workData: work })}
          icon={<AiFillEdit />}
        />
      </div>
      <div className="card-cta card-cta__delete">
        <Button
          type={"rounded text-danger"}
          color={"white"}
          handleClick={handleDeleteWork}
          icon={<AiFillDelete />}
        />
      </div>
    </div>
  );
};

export default Card;
