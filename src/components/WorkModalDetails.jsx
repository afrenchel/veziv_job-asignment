import React from "react";
import { FaTimes } from "react-icons/fa";
import Form from "./Form";

const WorkModalDetails = ({ modalState, setModalState }) => {
  console.log(modalState, "MODALSTATE");
  return (
    <div className={`modal-overlay ${modalState.isOpen ? "show-modal" : ""}`}>
      <div className="modal-container">
        <h3>{modalState.workData?.title}</h3>
        <p>{modalState.workData?.description}</p>
        <button
          onClick={() => setModalState({ isOpen: false, modalState: null })}
          className="close-modal-btn"
        >
          <FaTimes />
        </button>
      </div>
      {modalState.workData && (
        <Form
          workData={modalState.workData?.title}
          setModalState={setModalState}
        />
      )}
    </div>
  );
};

export default WorkModalDetails;
