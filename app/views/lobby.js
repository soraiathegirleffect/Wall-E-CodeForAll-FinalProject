export { lobby };
import { sections } from "../main.js"
import { goto } from "../main.js"

function lobby(root) {
    loadSectionView(root, sections.find(section => section.title === "lobby"));
}

function loadSectionView(root, data){

    const background = document.createElement("img");
    background.src = `../assets/${data.background}.jpg`;
    background.alt = "Space Background";

    const title = document.createElement("h1");
    title.innerText = `${data.title} page`;

    const img = document.createElement("img");
    img.src = `../assets/${data.walle}.png`;
    img.alt = "Wall-E waiting";

    const speech = document.createElement("p");
    speech.innerText = `${data.text}`;

    const learnPlanetsButton = document.createElement("button");
    learnPlanetsButton.innerText = `${data.learnPlanetsBtn}`;
    learnPlanetsButton.classList.add("learnPlanetsButton");

    learnPlanetsButton.addEventListener("click", event => {
        goto("/learnplanets");
        event.preventDefault();
    });

    const teachPlanetsButton = document.createElement("button");
    teachPlanetsButton.innerText = `${data.teachPlanetsBtn}`;
    teachPlanetsButton.classList.add("teachPlanetsButton");

    teachPlanetsButton.addEventListener("click", event => {
        goto("/teachplanets");
        event.preventDefault();
    });

    root.appendChild(background);
    root.appendChild(title);
    root.appendChild(img);
    root.appendChild(speech);
    root.appendChild(learnPlanetsButton);
    root.appendChild(teachPlanetsButton);
}
