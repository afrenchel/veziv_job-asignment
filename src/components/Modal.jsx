import React, { useState } from "react";

//Components imports
import Form from "./Form";
import Button from "./Button";

import { useAppState, useWorksDispatch } from "../context/WorksContext";
import { FaTimes } from "react-icons/fa";
import CardDetails from "./CardDetails";

const Modal = () => {
  //Hooks
  const appState = useAppState();
  const dispatch = useWorksDispatch();

  //State

  const [isEditing, setIsEditing] = useState(false);

  const currentCard = appState.works.find(
    (curr) => curr.id === appState.modal.id
  );
  const isAddEntryModal = appState.modal.id === null && appState.modal.isOpen;

  //Functions
  const handleCloseModal = () => {
    dispatch({ type: "closeModal" });
    setIsEditing(false);
  };

  return (
    <div
      className={`modal-overlay ${appState.modal.isOpen ? "show-modal" : ""}`}
    >
      <div
        className={`modal-container ${
          isAddEntryModal ? "add-entry" : "details"
        }`}
      >
        <div className="modal-header">
          <h2 className="modal-title">{appState?.modal?.title}</h2>
        </div>

        {isAddEntryModal ? (
          <Form />
        ) : (
          <CardDetails
            currentCard={currentCard}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        )}
        <Button
          color={"danger"}
          type={"rounded"}
          icon={<FaTimes />}
          handleClick={handleCloseModal}
          additionalStyle={"close-modal-btn"}
        />
      </div>
    </div>
  );
};

export default Modal;
