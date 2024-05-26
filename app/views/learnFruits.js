export { learnFruits };

import { sections } from "../main.js"
import { goto } from "../main.js"


function learnFruits(root) {
    loadSectionView(root, sections.find(section => section.title === "learnFruits"));
}

function loadSectionView(root, data){

    const background = document.createElement("img");
    background.src = `../assets/${data.background}.jpg`;
    background.alt = "Space fruits Background";

    const title = document.createElement("h1");
    title.innerText = `${data.title} page`;


    const img = document.createElement("img");
    img.src = `../assets/${data.walle}.png`;
    img.alt = "Happy Wall-E";

    const speech = document.createElement("p");
    speech.innerText = `${data.text}`;

    const lobbyButton = document.createElement("button");
    lobbyButton.innerText = "< Lobby";
    lobbyButton.classList.add("btn", "Lobby");

    lobbyButton.addEventListener("click", event => {
        goto("/");
        event.preventDefault();
    });

    const teachFruitsButton = document.createElement("button");
    teachFruitsButton.innerText = `${data.teachFruitsBtn}`;
    teachFruitsButton.classList.add("teachFruitsButton");

    teachFruitsButton.addEventListener("click", event => {
        goto("/teachfruits");
        event.preventDefault();
    });

    root.appendChild(background);
    root.appendChild(title);
    root.appendChild(img);
    root.appendChild(speech);
    root.appendChild(lobbyButton);
    root.appendChild(teachFruitsButton)
}

