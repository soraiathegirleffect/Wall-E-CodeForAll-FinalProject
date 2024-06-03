package org.example.services;

import org.example.model.CleaningScheduleRequest;
import org.example.model.Planet;

import java.util.List;

public interface PlanetService {

    /**
     * Get the planet with the given name
     * @param name the planet name
     * @return the planet
     */
    Planet get(String name);

    /**
     * List of all planets
     * @return a list of planets
     */
    List<Planet> list();

    /**
     * Save Planet in memory
     */
    boolean savePlanet(Planet planet);


    boolean saveSchedule(String planetName, CleaningScheduleRequest cleaningScheduleRequest);

    List<CleaningScheduleRequest> getCleaningScheduleRequests(String planetName);

}
