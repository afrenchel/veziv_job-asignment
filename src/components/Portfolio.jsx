import React, { useState, useEffect } from "react";

import { works } from "../data/portfolio";
import Card from "./Card";
import WorkModalDetails from "./WorkModalDetails";

const Portfolio = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    workData: null,
  });

  useEffect(() => {
    console.log(modalState, "modalState");
  }, [modalState]);

  return (
    <main className="showcase-work">
      <div className="card-list">
        {works.map((work) => (
          <Card
            key={work.id}
            work={work}
            // modalState={modalState}
            setModalState={setModalState}
          />
        ))}
      </div>
      <WorkModalDetails modalState={modalState} setModalState={setModalState} />
    </main>
  );
};

export default Portfolio;
