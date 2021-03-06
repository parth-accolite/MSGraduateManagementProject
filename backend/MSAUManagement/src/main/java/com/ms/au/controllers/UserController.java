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

import com.ms.au.crud.services.IUserService;
import com.ms.au.entities.User;

@RestController
@RequestMapping("User")
public class UserController {
	@Autowired
	IUserService iUserService;

	@GetMapping("/getAll")
	public List<User> getAll() {
		return iUserService.getAll();
	}

	@PostMapping("/save")
	public User save(@RequestBody User user) {
		return iUserService.save(user);
	}

	@GetMapping("/get/{emailId}")
	public Optional<User> findByEmailId(@PathVariable("emailId") String emailId) {
		return iUserService.findByEmailId(emailId);
	}

}