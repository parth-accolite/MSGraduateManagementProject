package com.ms.au.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ms.au.crud.services.IFeedbackService;
import com.ms.au.entities.Feedback;

@RestController
@RequestMapping("Feedback")
public class FeedbackController {
	@Autowired
	IFeedbackService iFeedbackService;

	@GetMapping("/getAll")
	public List<Feedback> getAll() {
		return iFeedbackService.getAll();
	}

	@PostMapping("/save")
	public Feedback save(@RequestBody Feedback feedback) {
		return iFeedbackService.save(feedback);
	}

}