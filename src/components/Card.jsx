import React from "react";
import img from "../assets/proj1.png";
import { CgMoreVertical } from "react-icons/cg";
import Button from "./Button";

const Card = ({ work, setModalState }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-info">
        <h3>{work.title}</h3>
        <p>{work.description}</p>
      </div>
      {/* <button
        className="button-primary"
        onClick={() => setModalState({ isOpen: true, workData: work })}
      >
        <CgMoreVertical />
      </button> */}

      <Button
        className={"rounded"}
        handleClick={() => setModalState({ isOpen: true, workData: work })}
        icon={<CgMoreVertical />}
      />
    </div>
  );
};

export default Card;
