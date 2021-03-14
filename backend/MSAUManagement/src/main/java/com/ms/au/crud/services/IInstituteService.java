package com.ms.au.crud.services;

import java.util.List;
import java.util.Optional;

import com.ms.au.entities.Institute;

public interface IInstituteService {

	public List<Institute> getAll();

	public Institute save(Institute institute);

	public Optional<Institute> findById(Integer instituteId);
}
