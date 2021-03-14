package com.ms.au.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ms.au.entities.Skill;

public interface ISkillDao extends JpaRepository<Skill, Integer> {

	@Query(value = "select * from graduate where id in ( select graduate_id from graduate_skill where skill_id=?1)", nativeQuery = true)
	List<Object> abcde(Integer skillId);

}
