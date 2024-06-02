export { cleanPlanets };

import { sections } from "../main.js";
import { goto } from "../main.js";
const MEMORY_URL = "http://localhost:9001/Walle/api/planet/"

function cleanPlanets(root) {
  loadSectionView(
    root,
    sections.find((section) => section.title === "cleanPlanets")
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
  img.alt = "Wall-E cleaning";

  const speechCont = document.createElement("div");
  speechCont.classList.add("speech-container");

  const speech = document.createElement("p");
  speech.classList.add("speech-bubble");
  speech.innerText = `${data.text}`;

  const btnCont = document.createElement("div");
  btnCont.classList.add("btn-container");

  const lobbyButton = document.createElement("button");
  lobbyButton.innerText = "< Lobby";
  lobbyButton.classList.add("btn", "Lobby");

  lobbyButton.addEventListener("click", (event) => {
    goto("/");
    event.preventDefault();
  });

  const learnPlanetsButton = document.createElement("button");
  learnPlanetsButton.innerText = `${data.learnPlanetsBtn}`;
  learnPlanetsButton.classList.add("learnPlanets", "btn");

  learnPlanetsButton.addEventListener("click", (event) => {
    goto("/learnplanets");
    event.preventDefault();
  });

  const teachPlanetsButton = document.createElement("button");
  teachPlanetsButton.innerText = `${data.teachPlanetsBtn}`;
  teachPlanetsButton.classList.add("teachPlanets", "btn");

  teachPlanetsButton.addEventListener("click", (event) => {
    goto("/teachplanets");
    event.preventDefault();
  });

  root.appendChild(title);
  speechCont.appendChild(speech);
  centerCont.appendChild(speechCont);
  centerCont.appendChild(img);
  root.appendChild(centerCont);
  btnCont.appendChild(learnPlanetsButton);
  btnCont.appendChild(teachPlanetsButton);
  btnCont.appendChild(lobbyButton);
  root.appendChild(btnCont);
  
  fetchPlanetsAndCreateCards(root);
}

async function fetchPlanetsAndCreateCards(root) {
  try {
    const response = await fetch(MEMORY_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch planets: ${response.statusText}`);
    }
    const planets = await response.json();
    createPlanetCards(planets, root);
  } catch (error) {
    console.error('Error fetching planets:', error);
  }
}



function createPlanetCards(planets, root) {
  const planetsList = document.createElement("ul");
  planetsList.classList.add("planets-list");

  planets.forEach(planet => {
    const card = document.createElement('div');
    card.className = 'cleanCard';

    card.innerHTML = `
      <h2>${planet.name}</h2>
      <p><strong>Terrain:</strong> ${planet.terrain}</p>
      <p><strong>Diameter:</strong> ${planet.diameter}</p>
    `;

    card.addEventListener('click', () => {
      if (planet.diameter > 12000) {
        alert("This planet is too big. It will take weeks to clean.");
      } else {
        alert("I'll clean this planet within this week.");
      }
    });

    planetsList.appendChild(card);
  });

  root.appendChild(planetsList);
}



