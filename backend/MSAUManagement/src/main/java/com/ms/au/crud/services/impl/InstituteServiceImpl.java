package com.ms.au.crud.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ms.au.crud.services.IInstituteService;
import com.ms.au.dao.IInstituteDao;
import com.ms.au.entities.Institute;

@Service
public class InstituteServiceImpl implements IInstituteService {

	@Autowired
	IInstituteDao iInstituteDao;

	@Override
	public List<Institute> getAll() {
		return iInstituteDao.findAll();
	}

	@Override
	public Institute save(Institute institute) {
		return iInstituteDao.save(institute);
	}

	@Override
	public Optional<Institute> findById(Integer instituteId) {
		return iInstituteDao.findById(instituteId);
	}

}
