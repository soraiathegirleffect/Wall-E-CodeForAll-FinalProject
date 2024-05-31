import { goto } from "../main.js";

//NAVIGATION

export async function onLearnPlanetClick(event) {
  console.log("button Clicked");
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
