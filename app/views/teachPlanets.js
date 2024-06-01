export { teachPlanets };

import { sections } from "../main.js";
import { goto } from "../main.js";

//import { planetDataService } from "../services/planetService.js";

function teachPlanets(root) {
  loadSectionView(
    root,
    sections.find((section) => section.title === "teachPlanets")
  );
}

function loadSectionView(root, data) {
  const title = document.createElement("h1");
  title.innerText = `${data.title} page`;

  const centerCont = document.createElement("div");
  centerCont.classList.add("center-container");

  const img = document.createElement("img");
  img.classList.add("wall-e");
  img.src = `../assets/${data.walle}.png`;
  img.alt = "Happy Wall-E";

  const speechCont = document.createElement("div");
  speechCont.classList.add("speech-container");

  const speech = document.createElement("p");
  speech.classList.add("speech-bubble");
  speech.innerText = `${data.text}`;

  const btnCont = document.createElement("div");
  btnCont.classList.add("btn-container");

  const planetSelect = document.createElement("select");
  planetSelect.classList.add("planet", "btn");
  const options = [
    "Planets",
    "Tatooine",
    "Alderaan",
    "Yavin IV",
    "Hoth",
    "Dagobah",
    "Bespin",
    "Endor",
    "Naboo",
    "Coruscant",
    "Kamino",
  ];

  options.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText; // Set the value attribute
    option.textContent = optionText; // Set the text content
    planetSelect.appendChild(option); // Append the option to the select element
  });

  //planetSelect.addEventListener("change", (event) =>
  //planetDataService(event.target.value)
  // );

  const lobbyButton = document.createElement("button");
  lobbyButton.innerText = "< Lobby";
  lobbyButton.classList.add("btn", "Lobby");

  //lobbyButton.addEventListener("click", event => {
  //  goto("/");
  //event.preventDefault();
  //});

  const learnPlanetsButton = document.createElement("button");
  learnPlanetsButton.innerText = `${data.learnPlanetsBtn}`;
  learnPlanetsButton.classList.add("learnPlanets", "btn");

  // learnPlanetsButton.addEventListener("click", event => {
  //   goto("/learnplanets");
  // event.preventDefault();
  //});

  root.appendChild(title);
  speechCont.appendChild(speech);
  centerCont.appendChild(speechCont);
  centerCont.appendChild(img);
  root.appendChild(centerCont);
  btnCont.appendChild(lobbyButton);
  btnCont.appendChild(learnPlanetsButton);
  btnCont.appendChild(planetSelect);
  root.appendChild(btnCont);
}
