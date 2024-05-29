export {planetService};
export {planetInfoService};
export {planetDataService};

const API_PLANETS1 = "https://swapi.dev/api/planets/?page=1"
const API_PLANETS2 = "https://swapi.dev/api/planets/?page=2"
const API_PLANETS3 = "https://swapi.dev/api/planets/?page=3"
const API_PLANETS4 = "https://swapi.dev/api/planets/?page=4"
const API_PLANETS5 = "https://swapi.dev/api/planets/?page=5"
const API_PLANETS6 = "https://swapi.dev/api/planets/?page=6"
//const result = JSON.parse(json);
//result.results.push(...json.results);

async function planetService(){
    const response = await fetch(`${API_PLANETS1}`);

    const planetData = await response.json();

    return planetData;
}


async function planetInfoService(){

    const planetData = await planetService();
        const results = planetData.results;
        const mappedData = results.map(result => {
          return {
            Name: result.name,
            Climate: result.climate,
            Terrain: result.terrain,
            Population: result.population,
            Diameter : result.diameter
          }
        });

        return mappedData;
  }

  async function planetDataService(name){
    const planets = await planetInfoService();
    const planet = planets.find(item => item.Name === name);

    if (planet){
        const planetJSON = JSON.stringify(planet);

        console.log("Info of planet:", planetJSON);        

        return planetJSON; //this is the data we want to storeeeeee
    }

  }

  







//function nameService(){
//planetService()
//.then(planetData => {
//    var results = planetData.results;
//    results.forEach(result =>  result.name); })};