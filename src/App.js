import React from "react";
import WorkerImg from "./assets/elon-musk.jpg";
import Portfolio from "./components/Portfolio";
import { reviews } from "./data/reviews";
import { GoLocation } from "react-icons/go";
import { MdCardMembership } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { GrAdd } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

import "./sass/main.scss";

const App = () => {
  return (
    <div className="App">
      <div className="app-container">
        <header>
          <h1>My works</h1>
          <button className="button-primary">
            <GrAdd />
          </button>
        </header>
        <Portfolio />
        <aside className="worker-card">
          <div className="worker-card__info">
            <div className="worker-card__img">
              <img src={WorkerImg} alt="digital-worker" />
            </div>
            <div className="worker-card__info">
              <span>Frenchel Alina Ioana</span>
              <span>@webdeveloper</span>
              <p className="short-descr">Top priority is Client Satisfaction</p>

              <button>Contact me</button>
              <ul className="other-info">
                <li>
                  Where?
                  <span>
                    <GoLocation />
                  </span>
                </li>
                <li>
                  Membership{" "}
                  <span>
                    <MdCardMembership />
                  </span>
                </li>
                <li>
                  Avg.Response Time{" "}
                  <span>
                    <GiSandsOfTime />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
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
