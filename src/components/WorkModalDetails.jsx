import React from "react";
import { FaTimes } from "react-icons/fa";
import Form from "./Form";
import Button from "./Button";

const WorkModalDetails = ({ modalState, setModalState }) => {
  console.log(modalState, "MODALSTATE");
  return (
    <div className={`modal-overlay ${modalState.isOpen ? "show-modal" : ""}`}>
      <div className="modal-container">
        <h3>{modalState.workData?.title}</h3>
        <p>{modalState.workData?.description}</p>
        {/* <button
          onClick={() => setModalState({ isOpen: false, modalState: null })}
          className="close-modal-btn"
        >
          <FaTimes />
        </button> */}

        <Button
          color={"danger"}
          type={"rounded"}
          icon={<FaTimes />}
          handleClick={() => setModalState({ isOpen: false, modalState: null })}
          additionalStyle={"close-modal-btn"}
        />
        {modalState.workData && (
          <Form
            workData={modalState.workData?.title}
            setModalState={setModalState}
          />
        )}
      </div>
    </div>
  );
};

export default WorkModalDetails;
