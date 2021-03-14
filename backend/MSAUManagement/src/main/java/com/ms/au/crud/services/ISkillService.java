package com.ms.au.crud.services;

import java.util.List;

import com.ms.au.entities.Skill;

public interface ISkillService {

	public List<Skill> getAll();

	public Skill save(Skill skill);

	public List<Object> findById(Integer skillId);

}
