//Tech Imports
import React from "react";
//Image Imports
import AirCall from "./PortfolioAirCall3.PNG";
import PokemonImg from "./PortfolioPokemonPic.PNG";
import FamilyPromiseImg from "./PortfolioFamilyPromisePic.png";
import CarSalesImg from "./PortfolioCarSalesPic.PNG";
import PortfolioAuthorImg from "./OfficialSuitProfPicOct21.jpg";
import AFBackendImg from "./PortfolioAFBackend.jpg";
import CalculatorImg from "./PortfolioCalculator.PNG";
import SignInSheetImg from "./PortfolioSignInSheet.PNG";
import PortfolioNetworkRec from "./PortfolioNetworkRecommend.PNG";
import PortfolioCustomerJourney from "./PortfolioCustomerJourney.PNG";
import PortfolioConvCTRCalc from "./PortfolioConvCTRCalc.PNG";
import PortfolioBlueWitness from "./PortfolioBlueWit.PNG";
import Badge from "./LambdaSchoolCertificateBadge.PNG";
//Styling Imports
import "./index.scss";
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="frontPageContainer">
      <div className="headerContainer">
      <div className="header">
        <p>Ahmed Serag</p>
        <i class="fas fa-keyboard fa-xl"></i>
      </div>
      <div className="subHeaderImg">
        <img src={PortfolioAuthorImg} alt="web developer who made this site"/>
      </div>
      <div className="subHeaderLinks">
        <Button style={{backgroundColor: "white", borderRadius: "1em", margin: ".5em"}} variant="contained"><a href="https://github.com/ahmedseragcodes">My Github</a></Button>
        <Button style={{backgroundColor: "white", borderRadius: "1em", margin: ".5em"}}variant="contained"><a href="https://www.linkedin.com/in/ahmedcanam/">My LinkedIn</a></Button>
      </div>
      </div>
      <h2 className="skillsSectionHeading">Tech & Skills</h2>
      <div className="skillsSection">
      <a href="https://www.credly.com/badges/b5e4932b-c889-4424-a8b8-128b70835205/public_url"><img className="gradBadge" src={Badge} alt="Ahmed Serag's Lambda School Graduation Certificate"/></a>
        <div className="skillsIconContainer">
          <div className="skillsIconGroup1">
            <i class="fab fa-react fa-xl"></i>
            <i class="fab fa-js-square fa-xl"></i>
            <i class="fab fa-node-js fa-xl"></i>
            <i class="fas fa-database fa-xl">SQLite</i>
            <i class="fab fa-css3-alt fa-xl"></i>
          </div>
          <div className="skillsIconGroup2">
            <i class="fab fa-sass fa-xl"></i>
            <i class="fab fa-html5 fa-xl"></i>
            <i class="fab fa-github fa-xl"></i>
            <i class="fab fa-git-square fa-xl"></i>
            <i class="fab fa-google"></i>
            <i class="fab fa-facebook"></i>
          </div>
          <div className="skillsText">
          <p><span className="skillsTextHeading">Frontend:</span><span className="skillsTextContent"> React, Redux, CSS, SCSS, HTML</span></p>
          <p><span className="skillsTextHeading">Backend:</span><span className="skillsTextContent"> Node, Express, Knex, SQLite, PostgresSQL</span></p>
          <p className="longSkillsText"><span className="skillsTextHeading">Additional:</span><span className="skillsTextContent"> Git, Github, Trello, Google/Facebook Ad Creation/Optimization/Copywriting, Sales, Python</span></p>
          </div>
      </div>
      </div>
      <div className="projectsGroupContainer">
        <h2>Projects</h2>
        <div className="projectsGroup1 projectsGroup">
          <div className="projectCard">
            <h3>Human Rights First Blue Witness App</h3>
            <img className="projectCardImg" src={PortfolioBlueWitness} alt="Blue Witness Web App" />
            <p>I served as a Fullstack Developer and Technical Project Manager for an app aggregating and classifying Police-Citizen intereactions around the USA, leading on the planning of sprints, workflow, user stories, and trello cards for a team of 6 full stack developers and 5 data scientists. I got to contribute to the code in many ways, including code reviews on Github, to code walkthroughs with Loom, to coding UI and functionality with React, the store and the flow of state with actions and reducers via Redux, creating APIs/endpoints with Node and Express, and fixing bugs with all of the above. </p>
            <a href="https://a.humanrightsfirst.dev/">Site</a>
            <a href="https://github.com/Lambda-School-Labs/human-rights-first-police-fe-a">Frontend Github</a>
            <a href="https://github.com/Lambda-School-Labs/human-rights-first-police-be-a">Backend Github</a>
          </div>
          <div className="projectCard">
            <h3>Family Promise Service Logger, Tracker, and Analytics Platform</h3>
            <img className="projectCardImg" src={FamilyPromiseImg} alt="Family Promise App" />
            <p>Acclimated to mature codebase quickly & quickly established rapport with team of junior developers and junior data scientists. Personally got to contribute by creating key analytics UI and service tracker UI on the frontend with React, dispatching actions triggered by user interaction and managing state with reducers via redux, creating corresponding API endpoints with node, making required changes to the backend Postgres database, and styling the culmination of UI and function with CSS / SCSS / ANT Library. My role was primarily as a full stack engineer, leading on UX and design.</p>
            <a href="https://a.familypromiseservicetracker.dev/login">Site</a>
            <a href="https://github.com/Lambda-School-Labs/family-promise-service-tracker-fe-a">Frontend Github</a>
            <a href="https://github.com/Lambda-School-Labs/family-promise-service-tracker-be-a">Backend Github</a>
          </div>
            <div className="projectCard">
              <h3>AirCall Telephone App</h3>
              <img className="projectCardImg" src={AirCall} alt="Telephone App" />
              <p>Created 3-slice app with pages for call log, call details, and archived calls utilizing React, Redux, CSS, SCSS, Material UI</p>
              <a href="https://aircallapp.vercel.app/">Site</a>
              <a href="https://github.com/ahmedseragcodes/aircallapp">Github</a>
            </div>
        </div>
        <div className="projectsGroup2 projectsGroup">
          <div className="projectCard">
            <h3>Network Recommend</h3>
            <img className="projectCardImg" src={PortfolioNetworkRec} alt="Social Network Recommendation App" />
            <p>Created a web app that determines the best social networks for your business's industry to create content on and market on to engage your respective target market. Utilized React for UI / functionality, CSS for styling/media queries, my background in advertising for content & recommendations.</p>
            <a href="https://network-recommend.vercel.app/">Site</a>
            <a href="https://github.com/ahmedseragcodes/NetworkRecommend">Github</a>
          </div>
        <div className="projectCard">
            <h3>Anywhere Fitness Class App Backend, API and Database</h3>
            <img className="projectCardImg" src={AFBackendImg} alt="Person Working Out In A Gym" />
            <p>Fully functional APIs with CRUD functionality for Fitness Classes as well as Users/Attendees. Utilized Node JS & Express JS to build out API and corresponding endpoints for creating, updating, reading, deleting fitness classes and gym clientele. Created backend database utilizing SQLite for managing data, knex js for queries & integration with backend.</p>
            <a href="https://anywherefitness2021.herokuapp.com/">Site</a>
            <a href="https://github.com/Anywhere-Fitness-2021/AF-Backend">Github</a>
        </div>
        <div className="projectCard">
            <h3>Customer Journey Analyzer</h3>
            <img className="projectCardImg" src={PortfolioCustomerJourney} alt="Customer Journey Analyzation Tool" />
            <p>Diagnoses a businesss's customer journey performance and delivers productive insight based on user input of advertisement click through rate, website average session duration, and website conversion rate. Built utilizing Javascript, React for UI/functionality, CSS for styling, and my own advertising and sales expertise for the content and recommendations.   
            </p>
            <a href="https://customer-journey-analyzer.vercel.app/">Site</a>
            <a href="https://github.com/ahmedseragcodes/Customer-Journey-Analyzer">Github</a>
        </div>
          </div>
          <div className="projectsGroup3 projectsGroup">
            <div className="projectCard">
              <h3>Conversion Rate & Clickthrough Rate Calculator</h3>
              <img className="projectCardImg" src={PortfolioConvCTRCalc} alt="Conversion Rate & Clickthrough Rate Calculator App" />
              <p>Determines Ad Conversion Rate & Clickthrough Rate based on user input and standard industry calculations. Created UI/functionality with React, styled and made responsive with SCSS/CSS. 
              </p>
              <a href="https://conversion-rate-click-through-rate-calculator.vercel.app/">Site</a>
              <a href="https://github.com/ahmedseragcodes/ConversionRateClickThroughRateCalculator">Github</a>
            </div>
          <div className="projectCard">
            <h3>Car Sales Calculator</h3>
            <img className="projectCardImg" src={CarSalesImg} alt="Car Sales Calculator App" />
            <p>Calculates the final car price with features you can add or remove. Created redux store, initial state, actions and reducers for managing state throughout app in response to dynamic user interaction. Implemented media queries via CSS to make app mobile-responsive.
            </p>
            <a href="https://car-purchase-calculator.vercel.app/">Site</a>
            <a href="https://github.com/ahmedseragcodes/car-purchase-calculator2">Github</a>
          </div>
          <div className="projectCard">
            <h3>Pokemon Pokedex (Read, Update, Delete)</h3>
            <img className="projectCardImg" src={PokemonImg} alt="Pokemon Pokedex App" />
            <p>See 50 of the first 150 pokemon in pokedex format, with the ability to edit their names and delete them. Utilized Redux to setup manage get, update, read actions, as well as reducers to manage state in redux store, seeded by the Pokemon API and Created UI with React, styled with CSS, responsive
            </p>
            <a href="https://pokedex-ashy-five.vercel.app/">Site</a>
            <a href="https://github.com/ahmedseragcodes/Pokedex">Github</a>
          </div>
          </div>
          <div className="projectsGroup4 projectsGroup">
          <div className="projectCard">
            <h3>Math Operation Calculator With Memory Recall</h3>
            <img className="projectCardImg" src={CalculatorImg} alt="Calculator App" />
            <p>Add, Subtract, Multiply numbers, use memory to store, recall, or performn a mathamatical operation with a number. Utilized redux for triggering actions based on user interaction and changing/managing state via reducers & react to create functionality for mathematical operations 
            </p>
            <a href="https://react-redux-calculator-eight.vercel.app/">Site</a>
            <a href="https://github.com/ahmedseragcodes/react-redux-calculator">Github</a>
          </div>
            <div className="projectCard">
              <h3>Sign In Sheet (Create, Read, Update)</h3>
              <img className="projectCardImg" src={SignInSheetImg} alt="Sign In Sheet App" />
              <p>Allows users to sign in with name + when they were there, as well as see and edit their entry. Utilized React to create UI for form input and for displaying input results, redux for triggering actions based on user interaction and changing/managing state via reducers, standard CSS for styling
              </p>
              <a href="https://sign-in-sheet.vercel.app/">Site</a>
              <a href="https://github.com/ahmedseragcodes/sign-in-sheet">Github</a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
