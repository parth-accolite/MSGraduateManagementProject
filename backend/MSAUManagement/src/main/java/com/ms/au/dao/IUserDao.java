package com.ms.au.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ms.au.entities.User;

public interface IUserDao extends JpaRepository<User, Integer> {

	Optional<User> findByEmailId(String emailId);

}