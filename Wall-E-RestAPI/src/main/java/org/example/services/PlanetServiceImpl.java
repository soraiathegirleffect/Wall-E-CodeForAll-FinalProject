package org.example.services;

import org.example.model.Planet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlanetServiceImpl implements PlanetService {

    private final PlanetRepository planetRepository;

    @Autowired
    public PlanetService(PlanetRepository planetRepository) {
        this.planetRepository = planetRepository;
    }


    private final List<Planet> planets = new ArrayList<>();


    @Override //retrieve a specific planet wall-E learned
    public Planet get(String name) {
        for (Planet planet : planets) {
            if (planet.getName().equals(name)) {
                return planet;
            }
        }
        return null;
    }
    @Override //retrieve the full planets learned list
    public List<Planet> list() {
        return new ArrayList<>(planets);
    }

    @Override //save in wall-E memory the planets he learned //////////////////
    public void savePlanet(Planet planet) {
        if (!existsByName(planet.getName())) {
            planets.add(planet);
            System.out.println("Planet saved: " + planet.getName());
        } else {
            System.out.println("Planet already exists: " + planet.getName());
        }
    }

    public List<Planet> getAllPlanets() {
        return planetRepository.findAll();
        //return new ArrayList<>(planets);
    }

    public boolean existsByName(String name) {
        return planets.stream().anyMatch(planet -> planet.getName().equalsIgnoreCase(name));
    }
        
        
        //if (!planets.contains(planet)) {
        //    planets.add(planet);
        //    console.log("saved yay");
}
