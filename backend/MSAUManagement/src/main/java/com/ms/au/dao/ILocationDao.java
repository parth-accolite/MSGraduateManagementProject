package com.ms.au.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ms.au.entities.Location;

@Repository
public interface ILocationDao extends JpaRepository<Location, Integer>{

}
