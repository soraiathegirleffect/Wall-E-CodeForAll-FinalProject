export {planetService};

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


async function mapservice(){
    let mapDataObject = {};

    planetService()
      .then(planetData => {
        const results = planetData.results;
        const mappedData = results.map(result => {
          return {
            name: result.name,
            climate: result.climate,
            terrain: result.terrain,
            population: result.population,
            diameter : result.diameter
          }
        });

        mapDataObject = { mappedData };

        console.log(mapDataObject);
      });
  }

  mapservice();












//function nameService(){
//planetService()
//.then(planetData => {
//    var results = planetData.results;
//    results.forEach(result =>  result.name); })};