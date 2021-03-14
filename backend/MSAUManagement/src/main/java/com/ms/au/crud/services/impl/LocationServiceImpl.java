package com.ms.au.crud.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ms.au.crud.services.ILocationService;
import com.ms.au.dao.ILocationDao;
import com.ms.au.entities.Location;

@Service
public class LocationServiceImpl implements ILocationService {

	@Autowired
	ILocationDao iLocationDao;

	@Override
	public List<Location> getAll() {
		return iLocationDao.findAll();
	}

	@Override
	public Location save(Location location) {
		return iLocationDao.save(location);
	}

	@Override
	public Optional<Location> findById(Integer locationId) {
		return iLocationDao.findById(locationId);
	}

}
