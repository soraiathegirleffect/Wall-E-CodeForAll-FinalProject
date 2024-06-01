package org.example.model;


import org.springframework.stereotype.Component;

import org.springframework.lang.NonNull;




public class Planet {

    private String Name;
    private String Climate;
    private Integer Diameter;
    private String Population;
    private String Terrain;


    public Planet(String name, String climate, Integer diameter, String population, String terrain) {
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

    public Integer getDiameter() {
        return Diameter;
    }

    public void setDiameter(Integer Diameter) {
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


