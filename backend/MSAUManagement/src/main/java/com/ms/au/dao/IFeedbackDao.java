package com.ms.au.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ms.au.entities.Feedback;

public interface IFeedbackDao extends JpaRepository<Feedback, Integer> {

}
