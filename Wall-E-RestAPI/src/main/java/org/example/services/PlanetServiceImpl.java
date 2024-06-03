package org.example.services;

import org.example.model.CleaningScheduleRequest;
import org.example.model.Planet;

import org.springframework.stereotype.Service;

import java.time.Month;
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
    public boolean savePlanet(Planet planet) {
        if (!existsByName(planet.getName())) {
            planets.add(planet);
            System.out.println("Planet saved: " + planet.getName());
            return true; // Planet was successfully added
        } else {
            System.out.println("Planet already exists: " + planet.getName());
            return false; // Planet already exists
        }
    }


    public boolean existsByName(String name) {
        return planets.stream().anyMatch(planet -> planet.getName().equalsIgnoreCase(name));
    }   


    //////////////////////////////////////////**************

    

    @Override //save in wall-E memory the planets he learned //////////////////
    public boolean saveSchedule(String planetName, CleaningScheduleRequest cleaningScheduleRequest) {
        // Retrieve the planet by its name
        Planet planet = get(planetName);

        if (planet != null) {
            // Check if the cleaning schedule already exists for this planet
            if (!isCleaningScheduleExists(planet, cleaningScheduleRequest)) {
                // Add the cleaning schedule to the planet's list of schedules
                planet.addCleaningScheduleRequest(cleaningScheduleRequest);
                System.out.println("Cleaning stored for planet " + planetName + " in month: " + cleaningScheduleRequest.getCleaningMonth());
                return true; // Cleaning schedule was successfully added
            } else {
                System.out.println("Cleaning schedule already exists for planet " + planetName + " in month: " + cleaningScheduleRequest.getCleaningMonth());
                return false; // Cleaning schedule already exists
            }
        } else {
            System.out.println("Planet not found: " + planetName);
            return false; // Planet not found
        }

    }

    // Method to check if the cleaning schedule already exists for the given planet
    private boolean isCleaningScheduleExists(Planet planet, CleaningScheduleRequest newSchedule) {
    List<CleaningScheduleRequest> existingSchedules = planet.getCleaningScheduleRequests();
    for (CleaningScheduleRequest existingSchedule : existingSchedules) {
        if (existingSchedule.getCleaningMonth().equals(newSchedule.getCleaningMonth())) {
            return true; // Cleaning schedule for this month already exists
        }
    }
    return false; // Cleaning schedule for this month does not exist
}



    @Override
    public List<CleaningScheduleRequest> getCleaningScheduleRequests(String planetName) {
    // Retrieve the planet by its name
    Planet planet = get(planetName);
    
    if (planet != null) {
        // Return the cleaning schedule requests for the planet
        return planet.getCleaningScheduleRequests();
    } else {
        // Planet not found
        return null;
    }
}

}