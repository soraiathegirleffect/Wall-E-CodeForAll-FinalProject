package org.example.services;

import org.example.model.Planet;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanetRepository extends JpaRepository<Planet, Long> {
    boolean existsByName(String name);
}
