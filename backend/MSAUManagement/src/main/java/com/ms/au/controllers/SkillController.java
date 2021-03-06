package com.ms.au.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ms.au.crud.services.ISkillService;
import com.ms.au.entities.Skill;

@RestController
@RequestMapping("Skill")
public class SkillController {
	@Autowired
	ISkillService iSkillService;

	@GetMapping("/getAll")
	public List<Skill> getAll() {
		return iSkillService.getAll();
	}

	@PostMapping("/save")
	public Skill save(@RequestBody Skill skill) {
		return iSkillService.save(skill);
	}

	@GetMapping("get/{id}")
	public List<Object> findById(@PathVariable("id") Integer skillId) {
		return iSkillService.findById(skillId);
	}

}
