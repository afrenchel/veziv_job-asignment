import React from "react";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";

import { reviews } from "./data/reviews";

import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

import "./sass/main.scss";
import WorkerSection from "./components/WorkerSection";

const App = () => {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Portfolio />
        <WorkerSection />
        <aside className="rattings">
          <h2>Alina's ratings</h2>
          <div className="ratings-score">⭐⭐⭐⭐⭐</div>
        </aside>
        <footer className="footer">
          <p className="p-text">
            built with <span className="heart-icon"> &#10084;</span> by ALINA
          </p>
          <p className="p-text">&copy;All rights reserved 2023</p>
          <div className="social-links">
            <div>
              <a
                href="https://www.linkedin.com/in/alina-frenchel-a9337b22a/"
                target="_blank"
              >
                <BsLinkedin className="svg-in" />
              </a>
            </div>
            <div>
              <a href="https://github.com/afrenchel" target="_blank">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
