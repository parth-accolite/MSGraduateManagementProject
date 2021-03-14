package com.ms.au.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ms.au.crud.services.ILocationService;
import com.ms.au.entities.Location;

@RestController
@RequestMapping("Location")
public class LocationController {
	@Autowired
	ILocationService iLocationService;

	@GetMapping("/getAll")
	public List<Location> getAll() {
		return iLocationService.getAll();
	}

	@PostMapping("/save")
	public Location save(@RequestBody Location location) {
		return iLocationService.save(location);
	}

	@GetMapping("get/{id}")
	public Optional<Location> findById(@PathVariable("id") Integer locationId) {
		return iLocationService.findById(locationId);
	}
}
