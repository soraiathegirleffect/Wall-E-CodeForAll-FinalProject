
import { sections } from "../main.js";
import { goto } from "../main.js";
import { fetchAllPlanets } from "../services/planetService.js";

const MEMORY_URL = "http://localhost:9001/Walle/api/planet/"

export function learnPlanets(root) {
  loadSectionView(
    root,
    sections.find((section) => section.title === "learnPlanets")
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

  const lobbyButton = document.createElement("button");
  lobbyButton.innerText = "< Lobby";
  lobbyButton.classList.add("btn", "Lobby");


  const teachPlanetsButton = document.createElement("button");
  teachPlanetsButton.innerText = `${data.teachPlanetsBtn}`;
  teachPlanetsButton.classList.add("teachPlanets", "btn");


  root.appendChild(title);
  speechCont.appendChild(speech);
  centerCont.appendChild(speechCont);
  centerCont.appendChild(img);
  root.appendChild(centerCont);
  btnCont.appendChild(lobbyButton);
  btnCont.appendChild(teachPlanetsButton);
  root.appendChild(btnCont);

  fetchPlanets(root);

}
 
  
  async function fetchPlanets(root) {
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
    const planetsContainer = document.createElement('div');
    planetsContainer.classList.add('allPlanets');
  
    planets.forEach(planet => {
      const card = document.createElement('div');
      card.className = 'planet-card';
      card.innerHTML = `
        <h2>${planet.name}</h2>
        <p><strong>Climate:</strong> ${planet.climate}</p>
        <p><strong>Diameter:</strong> ${planet.diameter}</p>
        <p><strong>Population:</strong> ${planet.population}</p>
        <p><strong>Terrain:</strong> ${planet.terrain}</p>
      `;
      planetsContainer.appendChild(card);
    });
  
    // Clear previous planet cards if any
    const existingContainer = root.querySelector('.allPlanets');
    if (existingContainer) {
      root.removeChild(existingContainer);
    }
  
    root.appendChild(planetsContainer);
  }
  
