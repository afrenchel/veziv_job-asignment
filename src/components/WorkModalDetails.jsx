import React from "react";
import { FaTimes } from "react-icons/fa";
import Form from "./Form";
import Button from "./Button";
import { useAppState, useWorksDispatch } from "../context/WorksContext";

const WorkModalDetails = () => {
  const appState = useAppState();
  const dispatch = useWorksDispatch();

  const title = appState.modal.isOpen
    ? appState.works[appState.modal.id - 1].title
    : null;
  const description = appState.modal.isOpen
    ? appState.works[appState.modal.id - 1].description
    : null;

  return (
    <div
      className={`modal-overlay ${appState.modal.isOpen ? "show-modal" : ""}`}
    >
      <div className="modal-container">
        <h3>{title}</h3>
        <p>{description}</p>

        <Button
          color={"danger"}
          type={"rounded"}
          icon={<FaTimes />}
          handleClick={() => dispatch({ type: "closeModal" })}
          additionalStyle={"close-modal-btn"}
        />
        {/* {appState.works && (
          <Form
            workData={appState.works?.title}
            setModalState={setModalState}
          />
        )} */}
      </div>
    </div>
  );
};

export default WorkModalDetails;
