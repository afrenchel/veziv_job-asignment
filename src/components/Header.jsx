import React from "react";
import Button from "./Button";
import { GrAdd } from "react-icons/gr";

const Header = () => {
  return (
    <header>
      <h1>My works</h1>

      <Button title={"ADD ENTRY"} icon={<GrAdd />} />
    </header>
  );
};

export default Header;
