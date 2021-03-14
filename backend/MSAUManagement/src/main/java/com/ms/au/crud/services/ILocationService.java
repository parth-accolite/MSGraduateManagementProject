package com.ms.au.crud.services;

import java.util.List;
import java.util.Optional;

import com.ms.au.entities.Location;

public interface ILocationService {
	public List<Location> getAll();

	public Location save(Location location);

	public Optional<Location> findById(Integer locationId);
}
