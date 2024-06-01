package org.example.controller.rest;

import org.example.model.Planet;

import org.example.services.PlanetServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/planet")
public class RestPlanetController {

    private PlanetServiceImpl planetService;

    @Autowired
    public void setPlanetService(PlanetServiceImpl planetService) {
        this.planetService=planetService;
    }



    @RequestMapping(method = RequestMethod.GET, path ={"/",""})
    public ResponseEntity<List<Planet>> listPlanets() {
        List<Planet> planets = planetService.list();

        //List<Planet> planets = new ArrayList<>();
//        planets.add(new Planet("Earth", "Temperate", 12742.0, 7800000000.0, "Various"));
//        planets.add(new Planet("Mars", "Arid", 6779.0, 0.0, "Rocky"));
//        planets.add(new Planet("Venus", "Hot", 12104.0, 0.0, "Volcanic"));
//        planets.add(new Planet("Jupiter", "Gas Giant", 139820.0, 0.0, "Gaseous"));
//        planets.add(new Planet("Saturn", "Gas Giant", 116460.0, 0.0, "Gaseous"));

        return new ResponseEntity<>(planets, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, path = {"/{name}"})
    public ResponseEntity<Planet> getPlanet(@PathVariable String name) {
        Planet planet = planetService.get(name);
        if(planet == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(planet, HttpStatus.OK);
    }

    @RequestMapping(method =RequestMethod.POST, path ={"/"})
    public ResponseEntity<Planet> addPlanet(@Valid @RequestBody Planet planet, BindingResult bindingResult ) {

        if(bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        planetService.savePlanet(planet);////////


        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}


    

    /*
    Planet savedPlanet = planetService.savePlanet(planet);
    if (savedPlanet == null) {
        // Error occurred while saving the planet
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return new ResponseEntity<>(savedPlanet, HttpStatus.CREATED);
}*/
