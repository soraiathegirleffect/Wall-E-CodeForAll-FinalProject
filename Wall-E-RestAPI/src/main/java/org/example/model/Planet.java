package org.example.model;


import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

import org.springframework.lang.NonNull;




public class Planet {

    private String Name;
    private String Climate;
    private String Diameter;
    private String Population;
    private String Terrain;
    private List<CleaningScheduleRequest> cleaningScheduleRequests;

    public Planet() {
    }

    @JsonCreator
    public Planet(@JsonProperty("Name") String name, @JsonProperty("Climate") String climate, @JsonProperty("Terrain") String terrain, @JsonProperty("Population") String population, @JsonProperty("Diameter") String diameter) {
        this.Name = name;
        this.Climate = climate;
        this.Diameter = diameter;
        this.Population = population;
        this.Terrain = terrain;
        this.cleaningScheduleRequests = new ArrayList<>();
    }


    
    public List<CleaningScheduleRequest> getCleaningScheduleRequests() {
        return cleaningScheduleRequests;
    }

    public void setCleaningScheduleRequests(List<CleaningScheduleRequest> cleaningScheduleRequests) {
        this.cleaningScheduleRequests = cleaningScheduleRequests;
    }

    public void addCleaningScheduleRequest(CleaningScheduleRequest cleaningScheduleRequest) {
        this.cleaningScheduleRequests.add(cleaningScheduleRequest);
    }
    



    public String getName() {
        return Name;
    }

    public void setName(String Name) {
        this.Name = Name;
    }

    public String getClimate() {
        return Climate;
    }

    public void setClimate(String Climate) {
        this.Climate = Climate;
    }

    public String getDiameter() {
        return Diameter;
    }

    public void setDiameter(String Diameter) {
        this.Diameter = Diameter;
    }

    public String getPopulation() {
        return Population;
    }

    public void setPopulation(String Population) {
        this.Population = Population;
    }

    public String getTerrain() {
        return this.Terrain;
    }

    public void setTerrain(String Terrain) {
        this.Terrain = Terrain;
    }
}

