import {
  onLearnPlanetClick,
  onLobbyClick,
  onPlanetClick,
  onTeachPlanetClick,
} from "./buttonClickHandlers.js";

const clickEventMap = {
  ".Lobby": onLobbyClick,
  ".teachPlanets": onTeachPlanetClick,
  ".learnPlanets": onLearnPlanetClick,
  ".planet": onPlanetClick,
};

async function dispatchClickEvents(event) {
  for (const selector in clickEventMap) {
    if (event.target.matches(selector)) {
      await clickEventMap[selector](event);
      break;
    }
  }
}

export async function setupEvents() {
  document.addEventListener("click", dispatchClickEvents);
}
