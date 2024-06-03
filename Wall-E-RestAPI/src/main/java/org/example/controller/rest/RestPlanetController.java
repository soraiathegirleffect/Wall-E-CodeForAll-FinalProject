package org.example.controller.rest;

import org.example.model.CleaningScheduleRequest;
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

        boolean isSaved = planetService.savePlanet(planet);

    if (isSaved) {
        return new ResponseEntity<>(HttpStatus.CREATED);
    } else {
        return new ResponseEntity<>(HttpStatus.CONFLICT); // 409 Conflict if planet already exists
    }
    }



    ////////////************************///////

    @RequestMapping(method = RequestMethod.POST, path = "/{name}/clean")
    public ResponseEntity<?> addCleaningSchedule(@PathVariable String name,
                                             @Valid @RequestBody CleaningScheduleRequest request,
                                             BindingResult bindingResult) {

    if (bindingResult.hasErrors()) {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    
    boolean isSavedSchedule = planetService.saveSchedule(name, request);

    if (isSavedSchedule) {
        return new ResponseEntity<>(HttpStatus.CREATED);
    } else {
        return new ResponseEntity<>(HttpStatus.CONFLICT); // 409 Conflict if planet already exists
    }
    }


    @RequestMapping(method = RequestMethod.GET, path ={"/{name}/clean"})
    public ResponseEntity<List<CleaningScheduleRequest>> listSchedules(@PathVariable String name) {
        List<CleaningScheduleRequest> cleaningSchedule = planetService.getCleaningScheduleRequests(name);;

        if (cleaningSchedule != null) {
            return new ResponseEntity<>(cleaningSchedule, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



}
