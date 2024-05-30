package org.example.controller.rest;

import org.example.model.Planet;
import org.example.services.PlanetService;
import org.example.services.PlanetServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("api/planet")
public class RestPlanetController {

    private PlanetService planetService;

    @Autowired
    public void setPlanetService(PlanetService planetService) {
        this.planetService=planetService;
    }




    @PostMapping
    //("/api/planets")
    public ResponseEntity<String> receiveData(@RequestBody Planet planet) {
        
        // Call the service method to save the received planets
        planetService.savePlanets(planet);
        return ResponseEntity.ok("Data received successfully");
    }

    @GetMapping
    public List<Planet> getAllPlanets() {
        return planetService.getAllPlanets();
    }






    @RequestMapping(method = RequestMethod.GET, path ={"/",""})
    public ResponseEntity<List<Planet>> listPlanets() {
        List<Planet> planets = planetService.list();
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

    @RequestMapping(method =RequestMethod.POST, path ={"/{name}"})
    public ResponseEntity<Planet> addPlanet(@Valid @RequestBody Planet planet, BindingResult bindingResult ) {

        if(bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        planetService.savePlanet(planet);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }






}
