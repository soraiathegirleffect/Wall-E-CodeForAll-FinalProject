package org.example.model;


public class Planet {


private String name;
private String climate;
private Double diameter;
private Double population;
private String terrain;

    public Planet(String name, String climate, Double diameter, Double population, String terrain) {
        this.name = name;
        this.climate = climate;
        this.diameter = diameter;
        this.population = population;
        this.terrain = terrain;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getClimate() {
        return climate;
    }

    public void setClimate(String climate) {
        this.climate = climate;
    }

    public Double getDiameter() {
        return diameter;
    }

    public void setDiameter(Double diameter) {
        this.diameter = diameter;
    }

    public Double getPopulation() {
        return population;
    }

    public void setPopulation(Double population) {
        this.population = population;
    }

    public String getTerrain() {
        return this.terrain;
    }

    public void setTerrain(String terrain) {
        this.terrain= terrain;
    }
}


