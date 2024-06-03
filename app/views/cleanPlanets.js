export { cleanPlanets };

import { sections } from "../main.js";
import { goto } from "../main.js";
const MEMORY_URL = "http://localhost:9001/Walle/api/planet"

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


/////////////////////////////////////////////////////////////



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
      openFormModal(planet.name, planet.diameter, root);

    });

    planetsList.appendChild(card);
  });

  root.appendChild(planetsList);
}








  //////////////////////////////////////// Create modal 


  function openFormModal(planetName, planetDiameter, root) {
    const modal = document.createElement('div');
    modal.id = 'form-modal';
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <form id="cleaning-form">
          <h2>Schedule Cleaning for <span id="planet-name"></span></h2>
          <div class="form-group">
            <label for="client-name">Client Name:</label>
            <input type="text" id="client-name" name="client-name" required>
          </div>
          <div class="form-group">
            <label for="space-contact">Space contact:</label>
            <input type="text" id="space-contact" name="space-contact" required>
          </div>
          <div class="form-group">
            <label for="cleaning-range">Cleaning Range:</label>
            <select id="cleaning-range" name="cleaning-range" required>
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="deep">Deep</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cleaning-month">Cleaning Month:</label>
            <select id="cleaning-month" name="cleaning-month" required>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div class="form-group">
            <button type="submit">Schedule Cleaning</button>
          </div>
        </form>
      </div>
    `;
  
    const planetNameSpan = modal.querySelector('#planet-name');
    planetNameSpan.textContent = planetName;
  
    root.appendChild(modal);
  
    //modal.style.display = 'flex';
  
    const form = modal.querySelector('#cleaning-form');
    form.dataset.diameter = planetDiameter;
  
    // Event listeners for closing the modal
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });





    //////////////////*****44568564456485656456456456456456465846545645645656456*****************//////

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = {
          planetName: planetName, // Include the planet name
          clientName: formData.get('client-name'),
          spaceContact: formData.get('space-contact'),
          cleaningRange: formData.get('cleaning-range'),
          cleaningMonth: formData.get('cleaning-month')
      };

      try {
          const response = await fetch(`${MEMORY_URL}/${planetName}/clean`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          });

          if (response.ok) {
              alert('Cleaning schedule added successfully to my Wall-e Databaseeee!');
              modal.style.display = 'none';
          } else {
              alert('Failed to add cleaning schedule bi bi bi bi bo');//////
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while adding the cleaning schedule');
      }
  });
  /////////////////////////////////////*************** */
  
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  
    /*form.addEventListener('submit', (event) => {
      event.preventDefault();
      const diameter = form.dataset.diameter;
      let message = `Form submitted for ${planetName}!`;
      if (diameter > 12000) {
        message += " This planet is too big. It will take weeks to clean.";
      } else {
        message += " I'll clean this planet within this week.";
      }
      alert(message);
      modal.style.display = 'none';
    });*/
  }




