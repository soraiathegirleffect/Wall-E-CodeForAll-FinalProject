export {planetService};

const API_PLANETS1 = "https://swapi.dev/api/planets/?page=1"
const API_PLANETS2 = "https://swapi.dev/api/planets/?page=2"
const API_PLANETS3 = "https://swapi.dev/api/planets/?page=3"
const API_PLANETS4 = "https://swapi.dev/api/planets/?page=4"
const API_PLANETS5 = "https://swapi.dev/api/planets/?page=5"
const API_PLANETS6 = "https://swapi.dev/api/planets/?page=6"


function planetService(){
    const response = fetch(`${API_PLANETS1}`)
    .then(function(response){
        return console.log(response.json());
    })
    
}



