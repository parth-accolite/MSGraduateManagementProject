package com.ms.au;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.ms.au.controllers.GraduateController;
import com.ms.au.dao.IGraduateDao;
import com.ms.au.entities.Graduate;

@SpringBootTest(classes = MsauManagementApplication.class)
public class TestGraduateController {
	@Autowired
	private GraduateController graduateController;

	@MockBean
	private IGraduateDao iGraduateDao;

	public Graduate initGraduate(Integer id, String name, Integer age, String gender, String address,
			String phoneNumber, String emailId, String rollNumber, String biography) {
		Graduate graduate = new Graduate();

		graduate.setId(id);
		graduate.setName(name);
		graduate.setAge(age);
		graduate.setGender(gender);
		graduate.setAddress(address);
		graduate.setPhoneNumber(phoneNumber);
		graduate.setEmailId(emailId);
		graduate.setJoiningDate(null);
		graduate.setRollNumber(rollNumber);
		graduate.setBiography(biography);
		graduate.setIsDeleted(false);
		graduate.setInstituteId(1);
		graduate.setLocationId(1);
		graduate.setFeedbacks(null);
		graduate.setSkills(null);
		return graduate;
	}

	public Graduate defaultGraduate() {
		return initGraduate(1, "grad 1", 21, "male", "address 1", "000", "grad1@gmail.com", "001", "bio 1");
	}

	public List<Graduate> initGraduateList() {
		List<Graduate> graduateList = new ArrayList<Graduate>();
		graduateList.add(initGraduate(1, "grad 1", 21, "male", "address 1", "000", "grad1@gmail.com", "001", "bio 1"));
		graduateList
				.add(initGraduate(2, "grad 2", 22, "female", "address 2", "001", "grad2@gmail.com", "002", "bio 2"));
		graduateList.add(initGraduate(3, "grad 3", 23, "male", "address 3", "002", "grad3@gmail.com", "003", "bio 3"));

		return graduateList;
	}

	@Test
	void saveTest() {
		Graduate graduate = defaultGraduate();
		when(iGraduateDao.save(graduate)).thenReturn(graduate);
		assertEquals(1, graduateController.save(graduate).getId());
		assertEquals("grad 1", graduateController.save(graduate).getName());
		assertEquals(21, graduateController.save(graduate).getAge());
		assertEquals("male", graduateController.save(graduate).getGender());
		assertEquals("address 1", graduateController.save(graduate).getAddress());
		assertEquals("000", graduateController.save(graduate).getPhoneNumber());
		assertEquals("grad1@gmail.com", graduateController.save(graduate).getEmailId());
		assertEquals(null, graduateController.save(graduate).getJoiningDate());
		assertEquals("001", graduateController.save(graduate).getRollNumber());
		assertEquals("bio 1", graduateController.save(graduate).getBiography());
		assertEquals(false, graduateController.save(graduate).getIsDeleted());
		assertEquals(1, graduateController.save(graduate).getInstituteId());
		assertEquals(1, graduateController.save(graduate).getLocationId());
		assertEquals(null, graduateController.save(graduate).getFeedbacks());
		assertEquals(null, graduateController.save(graduate).getSkills());
	}

//		@Test
//		void selectGraduateByRoleTest() {
//			List<Graduate> graduateList = new ArrayList<Graduate>();
//			graduateList.add(defaultGraduate());
//			when(iGraduateDao.selectGraduateByRole("test role")).thenReturn(graduateList);
	//
//			assertEquals("graduate1@gmail.com",
//					graduateController.selectGraduateByRole("test role").get(0).getEmailAddress());
//		}
	//
	@Test
	void getAllTest() {
		List<Graduate> graduateList = initGraduateList();
		when(iGraduateDao.findAll()).thenReturn(graduateList);
		assertEquals(1, graduateController.getAll().get(0).getId());
		assertEquals(2, graduateController.getAll().get(1).getId());
		assertEquals(3, graduateController.getAll().get(2).getId());
	}

//	@Test
//	void findByNameTest() {
//		Optional<List<Graduate>> graduateList = Optional.of(defaultGraduate());
//
//		when(iGraduateDao.findByName("grad")).thenReturn(graduateList);
//
//		assertEquals(1, graduateController.findByName("grad").get()[]
//	}
	//
//		@Test
//		void findByEmailIdTest() {
//			Graduate graduate = defaultGraduate();
//			when(iGraduateDao.findByEmailAddress("graduate1@gmail.com")).thenReturn(graduate);
//			assertEquals("graduate1@gmail.com",
//					graduateController.findByEmailAddress("graduate1@gmail.com").getEmailAddress());
//		}

}
