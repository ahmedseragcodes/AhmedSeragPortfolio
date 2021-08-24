import React from "react";
import PokemonImg from "./PortfolioPokemonPic.PNG";
import FamilyPromiseImg from "./PortfolioFamilyPromisePic.png";
import CarSalesImg from "./PortfolioCarSalesPic.PNG";
import PortfolioAuthorImg from "./PortfolioSelfImg.png";
import "./index.scss";


function App() {
  return (
    <div className="frontPageContainer">
      <div className="header">
        <p>Ahmed Serag</p>
        <i class="fas fa-keyboard fa-xl"></i>
      </div>
      <div className="subHeaderImg">
        <img src={PortfolioAuthorImg} alt="web developer who made this site"/>
      </div>
      <div className="subHeaderLinks">
        <a href="https://github.com/ahmedseragcodes">My Github</a>
        <a href="https://www.linkedin.com/in/ahmedcanam/">My LinkedIn</a>
      </div>
      <div className="skillsIconContainer">
        <h2>Skills</h2>
        <div className="skillsIconGroup">
          <i class="fab fa-react fa-xl"></i>
          <i class="fab fa-js-square fa-xl"></i>
          <i class="fab fa-node-js fa-xl"></i>
          <i class="fas fa-database fa-xl">SQLite</i>
          <i class="fab fa-css3-alt fa-xl"></i>
          <i class="fab fa-sass fa-xl"></i>
          <i class="fab fa-html5 fa-xl"></i>
          <i class="fab fa-github fa-xl"></i>
          <i class="fab fa-git-square fa-xl"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-facebook"></i>
        </div>
      </div>
      <div className="projectsGroupContainer">
        <h2>Projects</h2>
        <div className="projectsGroup1">
          <div className="projectCard">
            <h3>Family Promise Service Logger, Tracker, and Analytics Platform</h3>
            <img className="projectCardImg" src={FamilyPromiseImg} alt="Family Promise App" />
            <p>Acclimated to mature codebase quickly & quickly established rapport with team of junior developers and junior data scientists. Personally got to contribute by creating key analytics UI and service tracker UI on the frontend with React, dispatching actions triggered by user interaction and managing state with reducers via redux, creating corresponding API endpoints with node, making required changes to the backend Postgres database, and styling the culmination of UI and function with CSS / SCSS / ANT Library. My role was primarily as a full stack engineer, leading on UX and design.</p>
            <a href="https://a.familypromiseservicetracker.dev/login">Site</a>
            <a href="https://github.com/Lambda-School-Labs/family-promise-service-tracker-fe-a">Frontend Github</a>
            <a href="https://github.com/Lambda-School-Labs/family-promise-service-tracker-be-a">Backend Github</a>
          </div>
          <div className="projectCard">
            <h3>Pokemon Pokedex (Read, Update, Delete)</h3>
            <img className="projectCardImg" src={PokemonImg} alt="Pokemon Pokedex App" />
            <p>Utilized Redux to setup manage get, update, read actions, as well as reducers to manage state in redux store, seeded by the Pokemon API and Created UI with React, styled with CSS, responsive
            </p>
            <a href="https://pokedex-ashy-five.vercel.app/">Site</a>
            <a href="https://github.com/ahmedseragcodes/Pokedex">Github</a>
          </div>
          <div className="projectCard">
            <h3>Car Sales Calculator</h3>
            <img className="projectCardImg" src={CarSalesImg} alt="Car Sales Calculator App" />
            <p>Created redux store, initial state, actions and reducers for managing state throughout app in response to dynamic user interaction. Implemented media queries via CSS to make app mobile-responsive.
            </p>
            <a href="https://car-purchase-calculator.vercel.app/">Site</a>
            <a href="https://github.com/ahmedseragcodes/car-purchase-calculator2">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
