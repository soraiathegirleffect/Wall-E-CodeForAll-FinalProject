import {
  onLearnPlanetClick,
  onLobbyClick,
  onPlanetClick,
  onTeachPlanetClick,
} from "./buttonClickHandlers.js";

const clickEventMap = {
  ".Lobby": { handler: onLobbyClick, event: "click" },
  ".teachPlanets": { handler: onTeachPlanetClick, event: "click" },
  ".learnPlanets": { handler: onLearnPlanetClick, event: "click" },
  ".planet": { handler: onPlanetClick, event: "change" }, // Updated for change event
};

async function dispatchClickEvents(event) {
  for (const selector in clickEventMap) {
    if (event.target.matches(selector) && event.type === clickEventMap[selector].event) {
      await clickEventMap[selector].handler(event);
      break;
    }
  }
}


export async function setupEvents() {
  document.addEventListener("click", dispatchClickEvents);
  document.addEventListener("change", dispatchClickEvents); // Added for change events
}

