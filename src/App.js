import React from "react";

//COMPONENTS import
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import WorkerSection from "./components/WorkerSection";
import Ratings from "./components/Ratings";

import { WorksProvider } from "./context/WorksContext";

import "./sass/main.scss";

const App = () => {
  return (
    <WorksProvider>
      <div className="App">
        <div className="app-container">
          <Header />
          <Portfolio />
          <WorkerSection />
          <Ratings />
          <footer className="footer">
            <p className="p-text">
              built with <span className="heart-icon"> &#10084;</span> by ALINA
            </p>
            <p className="p-text">&copy;All rights reserved 2023</p>
          </footer>
        </div>
      </div>
    </WorksProvider>
  );
};

export default App;
