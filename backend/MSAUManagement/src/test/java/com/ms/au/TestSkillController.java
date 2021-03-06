package com.ms.au;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.ms.au.controllers.SkillController;
import com.ms.au.dao.ISkillDao;
import com.ms.au.entities.Skill;

@SpringBootTest(classes = MsauManagementApplication.class)
public class TestSkillController {
	@Autowired
	private SkillController skillController;

	@MockBean
	private ISkillDao iSkillDao;

	public Skill initSkill(Integer id, String name, String category) {
		Skill skill = new Skill();

		skill.setId(id);
		skill.setName(name);
		skill.setCategory(category);
		skill.setGraduates(null);
		return skill;
	}

	public Skill defaultSkill() {
		return initSkill(1, "skill 1", "category 1");
	}

	public List<Skill> initSkillList() {
		List<Skill> skillList = new ArrayList<Skill>();
		skillList.add(initSkill(1, "skill 1", "category 1"));
		skillList.add(initSkill(2, "skill 2", "category 2"));
		skillList.add(initSkill(3, "skill 3", "category 3"));

		return skillList;
	}

	@Test
	void saveTest() {
		Skill skill = defaultSkill();
		when(iSkillDao.save(skill)).thenReturn(skill);
		assertEquals(1, skillController.save(skill).getId());
		assertEquals("skill 1", skillController.save(skill).getName());
		assertEquals("category 1", skillController.save(skill).getCategory());
		assertEquals(null, skillController.save(skill).getGraduates());

	}

	@Test
	void getAllTest() {
		List<Skill> skillList = initSkillList();
		when(iSkillDao.findAll()).thenReturn(skillList);
		assertEquals(1, skillController.getAll().get(0).getId());
		assertEquals(2, skillController.getAll().get(1).getId());
		assertEquals(3, skillController.getAll().get(2).getId());
	}

	@Test
	void findByEmailIdTest() {
		Optional<Skill> skill = Optional.of(defaultSkill());
		when(iSkillDao.findById(1)).thenReturn(skill);
		assertEquals(false, skillController.findById(1).contains(1));
	}

}
