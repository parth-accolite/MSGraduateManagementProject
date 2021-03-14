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

import com.ms.au.controllers.UserController;
import com.ms.au.dao.IUserDao;
import com.ms.au.entities.User;

@SpringBootTest(classes = MsauManagementApplication.class)
public class TestUserController {
	@Autowired
	private UserController userController;

	@MockBean
	private IUserDao iUserDao;

	public User initUser(Integer id, String name, String emailId, String designation, String authCode,
			String photoUrl) {
		User user = new User();

		user.setId(id);
		user.setName(name);
		user.setEmailId(emailId);
		user.setDesignation(designation);
		user.setAuthCode(authCode);
		user.setPhotoUrl(photoUrl);
		return user;
	}

	public User defaultUser() {
		return initUser(1, "user 1", "email 1", "designation 1", "auth code 1", "photo url 1");
	}

	public List<User> initUserList() {
		List<User> userList = new ArrayList<User>();
		userList.add(initUser(1, "user 1", "email 1", "designation 1", "auth code 1", "photo url 1"));
		userList.add(initUser(2, "user 2", "email 2", "designation 2", "auth code 2", "photo url 2"));
		userList.add(initUser(3, "user 3", "email 3", "designation 3", "auth code 3", "photo url 3"));

		return userList;
	}

	@Test
	void saveTest() {
		User user = defaultUser();
		when(iUserDao.save(user)).thenReturn(user);

		assertEquals(1, userController.save(user).getId());
		assertEquals("user 1", userController.save(user).getName());
		assertEquals("email 1", userController.save(user).getEmailId());
		assertEquals("designation 1", userController.save(user).getDesignation());
		assertEquals("auth code 1", userController.save(user).getAuthCode());
		assertEquals("photo url 1", userController.save(user).getPhotoUrl());

	}

	@Test
	void getAllTest() {
		List<User> userList = initUserList();
		when(iUserDao.findAll()).thenReturn(userList);
		assertEquals(1, userController.getAll().get(0).getId());
		assertEquals(2, userController.getAll().get(1).getId());
		assertEquals(3, userController.getAll().get(2).getId());
	}

	@Test
	void findByEmailIdTest() {
		Optional<User> user = Optional.of(defaultUser());
		when(iUserDao.findByEmailId("email 1")).thenReturn(user);
		assertEquals("email 1", userController.findByEmailId("email 1").get().getEmailId());
	}

}
