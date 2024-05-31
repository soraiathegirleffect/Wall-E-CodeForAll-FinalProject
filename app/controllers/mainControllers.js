import {
  onLearnPlanetClick,
  onLobbyClick,
  onTeachPlanetClick,
} from "./buttonClickHandlers";

const clickEventMap = {
  ".Lobby": onLobbyClick,
  ".teachPlanets": onTeachPlanetClick,
  ".learnPlanets": onLearnPlanetClick,
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
