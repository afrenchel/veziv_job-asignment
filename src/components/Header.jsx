import React from "react";
import Button from "./Button";
import { GrAdd } from "react-icons/gr";
import { useWorksDispatch } from "../context/WorksContext";

const Header = () => {
  const dispatch = useWorksDispatch();

  const openModal = () => {
    dispatch({ type: "openAddEntryModal" });
  };
  return (
    <header>
      <h1>My portofolio</h1>
      <div>
        <Button handleClick={openModal} title={"ADD ENTRY"} icon={<GrAdd />} />
      </div>
    </header>
  );
};

export default Header;
