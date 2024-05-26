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

    const learnFruitsButton = document.createElement("button");
    learnFruitsButton.innerText = `${data.learnFruitsBtn}`;
    learnFruitsButton.classList.add("learnFruitsButton");

    learnFruitsButton.addEventListener("click", event => {
        goto("/learnfruits");
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
    root.appendChild(learnFruitsButton);
    root.appendChild(teachFruitsButton);
}
