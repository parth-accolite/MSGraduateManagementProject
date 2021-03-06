package com.ms.au.crud.services;

import java.util.List;
import java.util.Optional;

import com.ms.au.entities.User;

public interface IUserService {
	public List<User> getAll();

	public User save(User user);

	public Optional<User> findByEmailId(String emailId);

}
