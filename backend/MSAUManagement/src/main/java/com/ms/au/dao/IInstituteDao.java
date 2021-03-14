package com.ms.au.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ms.au.entities.Institute;

@Repository
public interface IInstituteDao extends JpaRepository<Institute, Integer> {

}
