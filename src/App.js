import React from "react";
import WorkerImg from "./assets/elon-musk.jpg";
import Portfolio from "./components/Portfolio";

import "./sass/main.scss";

const App = () => {
  return (
    <div className="App">
      <div className="app-container">
        <header>Header</header>
        <Portfolio />
        <aside className="worker-card">
          <div className="worker-card__info">
            <div className="worker-card__img">
              <img src={WorkerImg} alt="digital-worker" />
            </div>
            <div className="worker-card__info">
              <span>Ion Popescu</span>
              <span>@muncitorcinstit</span>
            </div>
          </div>
        </aside>
        <aside className="rattings">RATINGS</aside>
        <footer className="footer">FOOTER</footer>
      </div>
    </div>
  );
};

export default App;
