export { learnPlanets };

import { sections } from "../main.js";
import { goto } from "../main.js";

function learnPlanets(root) {
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

  // lobbyButton.addEventListener("click", event => {
  //   goto("/");
  //  event.preventDefault();
  // });

  const teachPlanetsButton = document.createElement("button");
  teachPlanetsButton.innerText = `${data.teachPlanetsBtn}`;
  teachPlanetsButton.classList.add("teachPlanets", "btn");

  // teachPlanetsButton.addEventListener("click", event => {
  //   goto("/teachplanets");
  // event.preventDefault();
  // });

  root.appendChild(title);
  speechCont.appendChild(speech);
  centerCont.appendChild(speechCont);
  centerCont.appendChild(img);
  root.appendChild(centerCont);
  btnCont.appendChild(lobbyButton);
  btnCont.appendChild(teachPlanetsButton);
  root.appendChild(btnCont);
}
