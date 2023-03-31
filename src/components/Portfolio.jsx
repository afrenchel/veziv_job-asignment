import React, { useState, useEffect, useContext } from "react";
import { useAppState } from "../context/WorksContext";

// import { works } from "../data/portfolio";
import Card from "./Card";
import WorkModalDetails from "./WorkModalDetails";

const Portfolio = () => {
  // const [modalState, setModalState] = useState({
  //   isOpen: false,
  //   workData: null,
  // });
  const appState = useAppState();

  useEffect(() => {
    console.log(appState, appState.works, "modalState");
  }, [appState]);

  return (
    <main className="showcase-work">
      <div className="card-list">
        {appState.works?.map((work) => (
          <Card key={work.id} work={work} />
        ))}
      </div>
      <WorkModalDetails />
    </main>
  );
};

export default Portfolio;
