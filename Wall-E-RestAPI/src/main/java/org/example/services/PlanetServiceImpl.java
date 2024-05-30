package org.example.services;

import org.example.model.Planet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlanetServiceImpl implements PlanetService {

    private static List<Planet> planets = new ArrayList<>();


    @Override
    public Planet get(String name) {
        for (Planet planet : planets) {
            if (planet.getName().equals(name)) {
                return planet;
            }
        }
        return null;
    }
    @Override
    public List<Planet> list() {
        return new ArrayList<>(planets);
    }

    @Override
    public void savePlanet(Planet planet) {
        if (!planets.contains(planet)) {
            planets.add(planet);
        }
    }
}
