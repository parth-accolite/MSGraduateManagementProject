package com.ms.au.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ms.au.entities.Graduate;

public interface IGraduateDao extends JpaRepository<Graduate, Integer> {

	@Query("SELECT g FROM Graduate g WHERE g.name LIKE %?1%")
	Optional<List<Graduate>> findByName(String name);

}
