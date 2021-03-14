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

import com.ms.au.controllers.InstituteController;
import com.ms.au.dao.IInstituteDao;
import com.ms.au.entities.Institute;

@SpringBootTest(classes = MsauManagementApplication.class)
public class TestInstituteController {
	@Autowired
	private InstituteController instituteController;

	@MockBean
	private IInstituteDao iInstituteDao;

	public Institute initInstitute(Integer id, String name, Integer locationId, String shortHand) {
		Institute institute = new Institute();

		institute.setId(id);
		institute.setName(name);
		institute.setLocationId(locationId);
		institute.setShortHand(shortHand);
		institute.setGraduates(null);
		return institute;
	}

	public Institute defaultInstitute() {
		return initInstitute(1, "ABC", 1, "abc");
	}

	public List<Institute> initInstituteList() {
		List<Institute> instituteList = new ArrayList<Institute>();
		instituteList.add(initInstitute(1, "ABC", 1, "abc"));
		instituteList.add(initInstitute(2, "DEF", 2, "def"));
		instituteList.add(initInstitute(3, "GHI", 3, "ghi"));

		return instituteList;
	}

	@Test
	void saveTest() {
		Institute institute = defaultInstitute();
		when(iInstituteDao.save(institute)).thenReturn(institute);

		assertEquals(1, instituteController.save(institute).getId());
		assertEquals("ABC", instituteController.save(institute).getName());
		assertEquals(1, instituteController.save(institute).getLocationId());
		assertEquals("abc", instituteController.save(institute).getShortHand());
		assertEquals(null, instituteController.save(institute).getGraduates());

	}

	@Test
	void getAllTest() {
		List<Institute> instituteList = initInstituteList();
		when(iInstituteDao.findAll()).thenReturn(instituteList);
		assertEquals(1, instituteController.getAll().get(0).getId());
		assertEquals(2, instituteController.getAll().get(1).getId());
		assertEquals(3, instituteController.getAll().get(2).getId());
	}

	@Test
	void findByIdTest() {
		Optional<Institute> institute = Optional.of(defaultInstitute());

		when(iInstituteDao.findById(1)).thenReturn(institute);

		assertEquals(1, instituteController.findById(1).get().getId());
	}

}