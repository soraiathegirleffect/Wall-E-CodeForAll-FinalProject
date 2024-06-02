

const API_PLANETS1 = "https://swapi.dev/api/planets/?page=1";

const MEMORY_URL = "http://localhost:9001/Walle/api/planet/";

export async function fetchAllPlanets() {
  const response = await fetch(`${API_PLANETS1}`);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

export async function addPlanetToMemory(planet) { ////////////////////////////////////////////////////////////////
  fetch(`${MEMORY_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(planet),
  })
  .then(response => {
    if (!response.ok) {
      return response.text().then(text => {
          throw new Error(`Failed to send data to API: `);
      });
  }
  console.log('Data sent to API successfully');
})
.catch(error => {
  console.error('Error sending data to API:', error);
  throw error; // Re-throw the error to be caught by planetDataService
});
}

export async function showPlanet(name) {
  const response = await fetch(`${MEMORY_URL}/${name}`);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

export async function fetchPlanetsStarWarsAPI() {
  const response = await fetch(`${API_PLANETS1}`);

  const planetData = await response.json();

  return planetData;
}

export async function planetInfoService() {

  //planetService()
  const planetData = await fetchPlanetsStarWarsAPI();//////////////////////////////////////////////////////////////////////
  //.then(planetData => {
  const results = planetData.results;
  const mappedData = results.map((result) => {
    return {
      Name: result.name,
      Climate: result.climate,
      Diameter: result.diameter,
      Population: result.population,
      Terrain: result.terrain,
    };
  });

  return mappedData;
}

export async function planetData(name) {
  return planetInfoService()
  .then(planets => {
    const planet = planets.find(item => item.Name === name);
    //const planetJSON = JSON.stringify(planet);
    //console.log("Info of planet:", planetJSON); was working
    if (!planet) {
      throw new Error(`Planet with name ${name} not found`);
  }

  console.log(JSON.stringify(planet));
  addPlanetToMemory(planet);///////////////////////////////////////////////////here is the function to save internally the data////////////
  })
  .then(() => {
      console.log('Planet data added successfully');
  })
  .catch(error => {
      console.error('Error processing planet data:', error);

  }
  )
  }

//function nameService(){
//planetService()
//.then(planetData => {
//    var results = planetData.results;
//    results.forEach(result =>  result.name); })};
