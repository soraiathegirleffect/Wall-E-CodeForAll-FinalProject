package org.example.model;


import org.springframework.stereotype.Component;

import org.springframework.lang.NonNull;




public class Planet {

    private String Name;
    private String Climate;
    private Double Diameter;
    private Double Population;
    private String Terrain;


    public Planet(String name, String climate, Double diameter, Double population, String terrain) {
        this.Name = name;
        this.Climate = climate;
        this.Diameter = diameter;
        this.Population = population;
        this.Terrain = terrain;
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

    public Double getDiameter() {
        return Diameter;
    }

    public void setDiameter(Double Diameter) {
        this.Diameter = Diameter;
    }

    public Double getPopulation() {
        return Population;
    }

    public void setPopulation(Double Population) {
        this.Population = Population;
    }

    public String getTerrain() {
        return this.Terrain;
    }

    public void setTerrain(String Terrain) {
        this.Terrain = Terrain;
    }
}


