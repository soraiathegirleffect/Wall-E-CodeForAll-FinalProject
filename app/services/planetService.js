export { planetInfoService };
export { planetData };

const API_PLANETS1 = "https://swapi.dev/api/planets/?page=1";

const MEMORY_URL = "http://localhost:9001/Walle/api/planet/";

async function fetchAllPlanets() {
  const response = await fetch(`${API_PLANETS1}`);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

async function addPlanetToMemory(planet) {
  const response = await fetch(`${MEMORY_URL}` + planet.name, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: planet.name,
      Climate: planet.climate,
      Diameter: planet.diameter,
      Population: planet.population,
      Terrain: planet.terrain,
    }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response;
}

async function showPlanet(name) {
  const response = await fetch(`${MEMORY_URL}/${name}`);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

async function fetchPlanetsStarWarsAPI() {
  const response = await fetch(`${API_PLANETS1}`);

  const planetData = await response.json();

  return planetData;
}

async function planetInfoService() {
  let mapDataObject = {};

  //planetService()
  const planetData = await planetService();
  //.then(planetData => {
  const results = planetData.results;
  const mappedData = results.map((result) => {
    return {
      Name: result.name,
      Climate: result.climate,
      Terrain: result.terrain,
      Population: result.population,
      Diameter: result.diameter,
    };
  });

  return mappedData;
}

async function planetData(name) {
  const planets = await planetInfoService();
  const planet = planets.find((item) => item.Name === name);

  if (planet) {
    const planetJSON = JSON.stringify(planet);

    console.log(planetJSON);
    return planetJSON;
  }
}

//function nameService(){
//planetService()
//.then(planetData => {
//    var results = planetData.results;
//    results.forEach(result =>  result.name); })};
