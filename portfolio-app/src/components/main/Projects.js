import "./index.css";
import { projectImages } from "./images/index.js";

export default function Projects() {
  return (
    <div id="project-section">
      <h2 id="project-title">Projects</h2>
      <div id="project-container">
        {/* Trivia-Game */}
        <div id="project-wrapper">
          <div id="text-container">
            <p id="text">
              <text>
                Languages: HTML, CSS, JavaScript, API <br />
                Description: Built a trivia game using Jeopardy API <br />
                Exercise: API data handling, Arrays, DOM Objects, Modulization,
                Events, Conditions
              </text>
              <a
                href="https://github.com/antwoinegriggs/Trivia-Game"
                rel="noreferrer"
                target={"_blank"}
              >
                <button id="btn-projects">View Code</button>
              </a>
            </p>
          </div>
          <img id="trivia-game" src={projectImages.triviaImage} alt="" />
          <h2 id="trivia-title">Trivia Game</h2>
        </div>
        {/* Heroes Catalog */}
        <div id="project-wrapper">
          <div id="text-container">
            <p id="text">
              <text>
                Languages: HTML, CSS, JavaScript, API <br />
                Description: Utilized Marvel API to design a catalog for Marvel
                Characters <br />
                Exercise: API Data Handling, DOM Modulization, Events
              </text>
              <a
                href="https://github.com/antwoinegriggs/marvel-character-catalog"
                rel="noreferrer"
                target={"_blank"}
              >
                <button id="btn-projects">View Code</button>
              </a>
            </p>
          </div>

          <img id="heroes-catalog" src={projectImages.heroImage} alt="" />
          <h2 id="heroes-title">Marvel Character Catalog</h2>
        </div>
        {/* Dice Game */}
        <div id="project-wrapper">
          <div id="text-container">
            <p id="text">
              <text>
                Languages: HTML, CSS, JavaScript <br />
                Library: React.js
                <br />
                Description: Random dice roll that generator and render dice
                images
                <br />
                Exercise: React, Components, Objects, Hooks, State management
              </text>
              <a
                href="https://github.com/antwoinegriggs/React-Dice-Roller"
                rel="noreferrer"
                target={"_blank"}
              >
                <button id="btn-projects">View Code</button>
              </a>
            </p>
          </div>

          <img id="dice-game" src={projectImages.diceImage} alt="" />
          <h2 id="dice-title">Dice Roller w/React</h2>
        </div>
      </div>
      <a
        href="https://github.com/antwoinegriggs"
        rel="noreferrer"
        target={"_blank"}
      >
        <button id="btn-github">GitHub</button>
      </a>
    </div>
  );
}
