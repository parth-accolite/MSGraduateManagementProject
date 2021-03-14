package com.ms.au.crud.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ms.au.crud.services.IUserService;
import com.ms.au.dao.IUserDao;
import com.ms.au.entities.User;

@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	IUserDao iUserDao;

	@Override
	public List<User> getAll() {
		return iUserDao.findAll();
	}

	@Override
	public User save(User user) {
		return iUserDao.save(user);
	}

	@Override
	public Optional<User> findByEmailId(String emailId) {
		return iUserDao.findByEmailId(emailId);
	}

}
