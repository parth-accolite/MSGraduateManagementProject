package com.ms.au.crud.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ms.au.crud.services.IFeedbackService;
import com.ms.au.dao.IFeedbackDao;
import com.ms.au.entities.Feedback;

@Service
public class FeedbackServiceImpl implements IFeedbackService {

	@Autowired
	IFeedbackDao iFeedbackDao;

	@Override
	public List<Feedback> getAll() {
		return iFeedbackDao.findAll();
	}

	@Override
	public Feedback save(Feedback feedback) {
		return iFeedbackDao.save(feedback);
	}

}
