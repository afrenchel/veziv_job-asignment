import React from "react";

//Components imports
import Form from "./Form";
import Button from "./Button";

import { useAppState, useWorksDispatch } from "../context/WorksContext";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  //Hooks
  const appState = useAppState();
  const dispatch = useWorksDispatch();

  const currentCard = appState.works.find(
    (curr) => curr.id === appState.modal.id
  );
  const isAddEntryModal = appState.modal.id === null && appState.modal.isOpen;

  return (
    <div
      className={`modal-overlay ${appState.modal.isOpen ? "show-modal" : ""}`}
    >
      <div className={`modal-container ${isAddEntryModal ? "add-entry" : ""}`}>
        <h2 className="modal-title">{appState?.modal?.title}</h2>

        {isAddEntryModal ? (
          <Form />
        ) : (
          <>
            <h3>{currentCard?.title}</h3>
            <p>{currentCard?.description}</p>
          </>
        )}
        <Button
          color={"danger"}
          type={"rounded"}
          icon={<FaTimes />}
          handleClick={() => dispatch({ type: "closeModal" })}
          additionalStyle={"close-modal-btn"}
        />
      </div>
    </div>
  );
};

export default Modal;
