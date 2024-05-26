export { goto }
export { sections }

import { lobby } from "./views/lobby.js"
import { learnFruits } from "./views/learnFruits.js"
import { teachFruits } from "./views/teachFruits.js"


const sections = [
    {
        title: "lobby",
        background: "space",
        walle: "wallEWaiting",
        learnFruitsBtn: "Learn about Fruits",
        teachFruitsBtn: "Teach about Fruits",
        text: "Hello I'm Wall-E, bi-po-bi, /n bibibibi i'm learning new earth information, select the topic:"
    },
    {
        title: "learnFruits",
        background: "spaceFruits",
        walle: "wallEHappy",
        teachFruitsBtn: "Teach about Fruits",
        text: "Let me show you the fruits I know:"
    },
    {
        title: "teachFruits",
        background: "spaceFruits",
        walle: "wallEHappy",
        learnFruitsBtn: "Learn about Fruits",
        text: "Teach me a fruit by filling the form:"
    }
];

//maps url to render functions
const routes = [
    { url:"/", page: lobby },
    { url:"/teachfruits", page: teachFruits },
    { url:"/learnfruits", page: learnFruits },
    //{ url:"/error", page: error }
]; // if any of the above are not correctly defined the whole page wont load

render();
//goto(document.location.pathname); // here we have defensive programming so we changed here instead of render
window.addEventListener('popstate',render);

function goto(url){

    const route = routes.find(element => element.url === url);
    
    if(!route) {
        goto("/"); //future should go to /error
        return;
    }

    window.history.pushState("","",url); //missing preventDefault
    render();
}

function render() {
    const currentUrl = document.location.pathname;
    const route = routes.find( element => element.url === currentUrl);

    const root = document.getElementById("container");/////////////////root container
    root.innerHTML = "";
    route.page(root)
}



