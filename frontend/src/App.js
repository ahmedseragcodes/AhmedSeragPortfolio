import React from "react";
import "./index.scss";


function App() {
  return (
    <div className="frontPageContainer">
      <div className="header">
        <p>Ahmed Serag</p>
        <i class="fas fa-atom fa-xl"></i>
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
            <img className="projectCardImg" src="https://a.familypromiseservicetracker.dev/static/media/logo.9e95821a.png" alt="Family Promise" />
            <p>Acclimated to mature codebase quickly & quickly established rapport with team of junior developers and junior data scientists. Personally got to contribute by creating key analytics UI and service tracker UI on the frontend with React, dispatching actions triggered by user interaction and managing state with reducers via redux, creating corresponding API endpoints with node, making required changes to the backend Postgres database, and styling the culmination of UI and function with CSS / SCSS / ANT Library. My role was primarily as a full stack engineer, leading on UX and design.</p>
            <a href="https://a.familypromiseservicetracker.dev/login">Site</a>
            <a href="https://github.com/Lambda-School-Labs/family-promise-service-tracker-fe-a">Github</a>
          </div>
          <div className="projectCard">
            <h3>Family Promise Service Logger, Tracker, and Analytics Platform</h3>
            <img className="projectCardImg" src="https://a.familypromiseservicetracker.dev/static/media/logo.9e95821a.png" alt="Family Promise" />
            <p>Acclimated to mature codebase quickly & quickly established rapport with team of junior developers and junior data scientists. Personally got to contribute by creating key analytics UI and service tracker UI on the frontend with React, dispatching actions triggered by user interaction and managing state with reducers via redux, creating corresponding API endpoints with node, making required changes to the backend Postgres database, and styling the culmination of UI and function with CSS / SCSS / ANT Library. My role was primarily as a full stack engineer, leading on UX and design.</p>
            <a href="https://a.familypromiseservicetracker.dev/login">Site</a>
            <a href="https://github.com/Lambda-School-Labs/family-promise-service-tracker-fe-a">Github</a>
          </div>
          <div className="projectCard">
            <h3>Family Promise Service Logger, Tracker, and Analytics Platform</h3>
            <img className="projectCardImg" src="https://a.familypromiseservicetracker.dev/static/media/logo.9e95821a.png" alt="Family Promise" />
            <p>Acclimated to mature codebase quickly & quickly established rapport with team of junior developers and junior data scientists. Personally got to contribute by creating key analytics UI and service tracker UI on the frontend with React, dispatching actions triggered by user interaction and managing state with reducers via redux, creating corresponding API endpoints with node, making required changes to the backend Postgres database, and styling the culmination of UI and function with CSS / SCSS / ANT Library. My role was primarily as a full stack engineer, leading on UX and design.</p>
            <a href="https://a.familypromiseservicetracker.dev/login">Site</a>
            <a href="https://github.com/Lambda-School-Labs/family-promise-service-tracker-fe-a">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
