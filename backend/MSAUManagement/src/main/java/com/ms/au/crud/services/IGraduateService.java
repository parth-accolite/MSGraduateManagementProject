package com.ms.au.crud.services;

import java.util.List;
import java.util.Optional;

import com.ms.au.entities.Graduate;

public interface IGraduateService {
	public List<Graduate> getAll();

	public Graduate save(Graduate graduate);
	
	public Optional<List<Graduate>> findAllByName(String name);


}
