package com.ms.au.crud.services;

import java.util.List;

import com.ms.au.entities.Feedback;

public interface IFeedbackService {
	public List<Feedback> getAll();

	public Feedback save(Feedback feedback);

}
