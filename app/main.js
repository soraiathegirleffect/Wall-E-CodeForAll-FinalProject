export { goto };
export { sections };

import { lobby } from "./views/lobby.js";
import { learnPlanets } from "./views/learnPlanets.js";
import { teachPlanets } from "./views/teachPlanets.js";
import { cleanPlanets } from "./views/cleanPlanets.js";

//import { planetService } from "./services/planetService.js";

import { setupEvents } from "./controllers/mainControllers.js";

const sections = [
  {
    title: "lobby",
    walle: "wallEWaiting",
    learnPlanetsBtn: "Learn about Planets",
    teachPlanetsBtn: "Teach about Planets",
    cleanPlanetsBtn: "Clean Planets",
    text: "Hello I'm Wall-E, bi-po-bi, /n bibibibi i'm learning new earth information, select the topic:",
  },
  {
    title: "learnPlanets",
    walle: "wallEHappy",
    teachPlanetsBtn: "Teach about Planets",
    text: "Let me show you the Planets I know:",
  },
  {
    title: "teachPlanets",
    walle: "wallELearning",
    learnPlanetsBtn: "Learn about Planets",
    text: "Teach me a Planet from the list  >Planets< ",
  },
  {
    title: "cleanPlanets",
    walle: "wallECleaning",
    learnPlanetsBtn: "Learn about Planets",
    teachPlanetsBtn: "Teach about Planets",
    text: "Do you want me to clean a Planet? Tell me which one: ",
  },
];

//maps url to render functions
const routes = [
  { url: "/", page: lobby },
  { url: "/teachplanets", page: teachPlanets },
  { url: "/learnplanets", page: learnPlanets },
  { url: "/cleanplanets", page: cleanPlanets },
  //{ url:"/error", page: error }
]; // if any of the above are not correctly defined the whole page wont load

//planetService();
goto(document.location.pathname); // here we have defensive programming so we changed here instead of render
window.addEventListener("popstate", render);
setupEvents();

function goto(url) {
  const route = routes.find((element) => element.url === url);

  if (!route) {
    goto("/"); //future should go to /error
    return;
  }

  window.history.pushState("", "", url); //missing preventDefault
  render();
}

function render() {
  const currentUrl = document.location.pathname;
  const route = routes.find((element) => element.url === currentUrl);

  const root = document.getElementById("container"); /////////////////root container
  root.innerHTML = "";
  route.page(root);
}
