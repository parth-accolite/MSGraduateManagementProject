package com.ms.au.crud.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ms.au.crud.services.IGraduateService;
import com.ms.au.dao.IGraduateDao;
import com.ms.au.entities.Graduate;

@Service
public class GraduateServiceImpl implements IGraduateService {

	@Autowired
	IGraduateDao iGraduateDao;

	@Override
	public List<Graduate> getAll() {
		return iGraduateDao.findAll();
	}

	@Override
	public Graduate save(Graduate graduate) {
		return iGraduateDao.save(graduate);
	}

	@Override
	public Optional<List<Graduate>> findAllByName(String name) {
		return iGraduateDao.findByName(name);
	}

}
