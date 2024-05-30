package org.example.model;

import org.springframework.lang.NonNull;
import jakarta.persistence.Entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


public class Planet {

    
    private Long id;

private String Name;
private String Climate;
private Double Diameter;
private Double Population;
private String Terrain;

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
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


