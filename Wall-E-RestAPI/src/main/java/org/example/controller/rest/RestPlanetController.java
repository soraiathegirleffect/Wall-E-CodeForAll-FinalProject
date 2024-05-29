package org.example.controller.rest;

import org.example.services.PlanetService;
import org.example.services.PlanetServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/planet")
public class RestPlanetController {

    private PlanetService planetService;

    @Autowired
    public void setPlanetService(PlanetService planetService) {
        this.planetService=planetService;
    }






}
