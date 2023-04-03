import React, { useEffect } from "react";
import { useAppState } from "../context/WorksContext";

import Card from "./Card";
import Modal from "./Modal";

const Portfolio = () => {
  const appState = useAppState();

  return (
    <main className="showcase-work">
      <div className="card-list">
        {appState.works?.map((work) => (
          <Card key={work.id} work={work} />
        ))}
      </div>
      <Modal />
    </main>
  );
};

export default Portfolio;
