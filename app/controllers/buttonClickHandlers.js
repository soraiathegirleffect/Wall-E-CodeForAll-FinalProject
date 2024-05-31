import { goto } from "../main";
import getFruit from "../services/fruitService";

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
