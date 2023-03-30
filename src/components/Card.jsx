import React from "react";
import img from "../assets/proj1.png";

const Card = ({ work, setModalState }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-info">
        <h3>{work.title}</h3>
        <p>{work.description}</p>
      </div>
      <button
        className="button-primary"
        onClick={() => setModalState({ isOpen: true, workData: work })}
      >
        MOD
      </button>
    </div>
  );
};

export default Card;
