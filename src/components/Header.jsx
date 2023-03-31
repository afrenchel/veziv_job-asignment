import React from "react";
import Button from "./Button";
import { GrAdd } from "react-icons/gr";
import { useAppState, useWorksDispatch } from "../context/WorksContext";

const Header = () => {
  const appState = useAppState();
  const dispatch = useWorksDispatch();

  const openModal = () => {
    dispatch({ type: "added" });
  };
  return (
    <header>
      <h1>My works</h1>

      <Button handleClick={openModal} title={"ADD ENTRY"} icon={<GrAdd />} />
    </header>
  );
};

export default Header;
