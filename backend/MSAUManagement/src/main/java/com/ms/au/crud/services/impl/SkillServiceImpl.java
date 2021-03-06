package com.ms.au.crud.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ms.au.crud.services.ISkillService;
import com.ms.au.dao.ISkillDao;
import com.ms.au.entities.Skill;

@Service
public class SkillServiceImpl implements ISkillService {
	@Autowired
	ISkillDao iSkillDao;

	@Override
	public List<Skill> getAll() {
		return iSkillDao.findAll();
	}

	@Override
	public Skill save(Skill skill) {
		return iSkillDao.save(skill);
	}

	@Override
	public List<Object> findById(Integer skillId) {
		return iSkillDao.abcde(skillId);
	}

}
