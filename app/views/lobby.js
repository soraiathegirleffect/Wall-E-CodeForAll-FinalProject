export { lobby };
import { sections } from "../main.js";
import { goto } from "../main.js";

function lobby(root) {
  loadSectionView(
    root,
    sections.find((section) => section.title === "lobby")
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
  img.alt = "Wall-E waiting";

  const speechCont = document.createElement("div");
  speechCont.classList.add("speech-container");

  const speech = document.createElement("p");
  speech.classList.add("speech-bubble");
  speech.innerText = `${data.text}`;

  const btnCont = document.createElement("div");
  btnCont.classList.add("btn-container");

  const cleanPlanetsButton = document.createElement("button");
  cleanPlanetsButton.innerText = `${data.cleanPlanetsBtn}`;
  cleanPlanetsButton.classList.add("cleanPlanets", "btn");

  cleanPlanetsButton.addEventListener("click", (event) => {
    goto("/cleanplanets");
    event.preventDefault();
  });

  const learnPlanetsButton = document.createElement("button");
  learnPlanetsButton.innerText = `${data.learnPlanetsBtn}`;
  learnPlanetsButton.classList.add("learnPlanets", "btn");

  //  learnPlanetsButton.addEventListener("click", event => {
  //    goto("/learnplanets");
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
  btnCont.appendChild(learnPlanetsButton);
  btnCont.appendChild(teachPlanetsButton);
  btnCont.appendChild(cleanPlanetsButton);
  root.appendChild(btnCont);
}
