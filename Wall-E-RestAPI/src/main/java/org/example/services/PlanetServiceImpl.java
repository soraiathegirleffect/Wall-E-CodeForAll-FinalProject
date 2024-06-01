package org.example.services;

import org.example.model.Planet;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlanetServiceImpl implements PlanetService {


    private static List<Planet> planets = new ArrayList<>();


    static {
        
        planets.add(new Planet("Earth", "Temperate",  "Various", "7800000000", "12742"));
        planets.add(new Planet("Mars", "Arid", "Rocky", "0", "6779" ));

    }


    @Override //retrieve a specific planet wall-E learned
    public Planet get(String name) {
        for (Planet planet : planets) {
            if (planet.getName().equalsIgnoreCase(name)) {
                return planet;
            }
        }
        return null;
    }

    @Override //retrieve the full planets learned list
    public List<Planet> list() {
        return planets;
    }

    @Override //save in wall-E memory the planets he learned //////////////////
    public void savePlanet(Planet planet) {
        if (!planets.contains(planet)) {
            planets.add(planet);
        }
    }


}
