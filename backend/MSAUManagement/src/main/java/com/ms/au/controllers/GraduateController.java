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

import com.ms.au.crud.services.IGraduateService;
import com.ms.au.entities.Graduate;

@RestController
@RequestMapping("Graduate")
public class GraduateController {
	@Autowired
	IGraduateService iGraduateService;

	@GetMapping("/getAll")
	public List<Graduate> getAll() {
		return iGraduateService.getAll();
	}

	@PostMapping("/save")
	public Graduate save(@RequestBody Graduate graduate) {
		return iGraduateService.save(graduate);
	}

	@GetMapping("/get/{name}")
	public Optional<List<Graduate>> findByName(@PathVariable("name") String name) {
		return iGraduateService.findAllByName(name);
	}

}