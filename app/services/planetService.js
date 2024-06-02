

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

export async function addPlanetToMemory(planet) {
  try {
    const response = await fetch(`${MEMORY_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(planet),
    });

    if (!response.ok) {
      throw new Error(`Failed to send data to API: ${response.statusText}`);
    }

    console.log('Data sent to API successfully');
    return response; // Return the response object
  } catch (error) {
    console.error('Error sending data to API:', error);
    throw error; // Re-throw the error to be caught by the calling function
  }
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
  try {
    const planets = await planetInfoService();
    const planet = planets.find(item => item.Name === name);

    if (!planet) {
      throw new Error(`Planet with name ${name} not found`);
    }

    console.log(JSON.stringify(planet));

    return planet; // Return the planet data

    
  } catch (error) {
    console.error('Error processing planet data:', error);
    throw error; // Re-throw the error to be caught by the calling function
  }
}

