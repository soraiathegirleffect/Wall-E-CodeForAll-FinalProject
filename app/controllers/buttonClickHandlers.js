import { goto } from "../main.js";
import { renderAlertModal } from "../views/components/alertModal.js";

import {
  planetData,
  fetchPlanetsStarWarsAPI,
  addPlanetToMemory,
  showPlanet,
} from "../services/planetService.js";
import {
  errorMessage,
  errorTitle,
  successMessage,
  successTitle,
} from "../alerts/alerts.js";

//NAVIGATION

export async function onLearnPlanetClick(event) {
  goto("/learnplanets");
  event.preventDefault();
}

export async function onTeachPlanetClick(event) {
  goto("/teachplanets");
  event.preventDefault();
}
export async function onLobbyClick(event) {
  goto("/");
  event.preventDefault();
}

// FUNCTIONALITY

export async function onPlanetClick(event) {
  event.preventDefault();
  try {
    const planet = await planetData(event.target.value); // Get planet data
    const response = await addPlanetToMemory(planet); // Get the response from addPlanetToMemory

    if (response.status === 201) { // Check response status
      renderAlertModal(successTitle, successMessage.addPlanet);
      // goto("/");
    } else if (response.status === 409) { // Handle conflict status
      renderAlertModal(errorTitle, errorMessage.addPlanet);
      // goto("/");
    } else {
      renderAlertModal(errorTitle, errorMessage.server);
      // goto("/");
    }
  } catch (error) {
    renderAlertModal(errorTitle, errorMessage.server);
    // goto("/");
  }
}
