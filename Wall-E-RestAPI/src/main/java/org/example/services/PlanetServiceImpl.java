package org.example.services;

import org.example.model.Planet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlanetServiceImpl implements PlanetService {

    private static final List<Planet> planets = new ArrayList<>();


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
        if (!planets.contains(planet)) {
            planets.add(planet);
            console.log("saved yay");
        }
    }
}
