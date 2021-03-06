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

import com.ms.au.crud.services.IInstituteService;
import com.ms.au.entities.Institute;

@RestController
@RequestMapping("Institute")
public class InstituteController {
	@Autowired
	IInstituteService iInstituteService;

	@GetMapping("/getAll")
	public List<Institute> getAll() {
		return iInstituteService.getAll();
	}

	@PostMapping("/save")
	public Institute save(@RequestBody Institute institute) {
		return iInstituteService.save(institute);
	}

	@GetMapping("get/{id}")
	public Optional<Institute> findById(@PathVariable("id") Integer instituteId) {
		return iInstituteService.findById(instituteId);
	}
}
