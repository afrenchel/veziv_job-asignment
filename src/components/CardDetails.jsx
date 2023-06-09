import React, { useState } from "react";
import Form from "./Form";
import Button from "./Button";

const CardDetails = ({ currentCard, isEditing, setIsEditing }) => {
  return (
    <div className="details-container">
      <div
        className={`modal-image-wrapper ${
          isEditing ? "modal-image-wrapper__hidden-sm" : ""
        }`}
      >
        {isEditing ? (
          <h3>Edit {currentCard?.title}</h3>
        ) : (
          <img
            className={`details-container__img`}
            src={currentCard?.image}
            alt=""
          />
        )}
      </div>

      <div className="details-container__info">
        {!isEditing ? (
          <>
            <h3>{currentCard?.title}</h3>
            <p>{currentCard?.description}</p>
            <Button
              title={`${isEditing ? "Save" : "EDIT Project"} `}
              handleClick={() => setIsEditing(!isEditing)}
              additionalStyle={"bg-secondary-dark"}
            />
          </>
        ) : (
          <Form
            isEditing={isEditing}
            currentCard={currentCard}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    </div>
  );
};

export default CardDetails;
