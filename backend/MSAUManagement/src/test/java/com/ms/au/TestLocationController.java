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

import com.ms.au.controllers.LocationController;
import com.ms.au.dao.ILocationDao;
import com.ms.au.entities.Location;

@SpringBootTest(classes = MsauManagementApplication.class)
public class TestLocationController {
	@Autowired
	private LocationController locationController;

	@MockBean
	private ILocationDao iLocationDao;

	public Location initLocation(Integer id, String city, String state) {
		Location location = new Location();

		location.setId(id);
		location.setCity(city);
		location.setState(state);
		location.setInstitutes(null);
		location.setGraduates(null);
		return location;
	}

	public Location defaultLocation() {
		return initLocation(1, "city 1", "state 1");
	}

	public List<Location> initLocationList() {
		List<Location> locationList = new ArrayList<Location>();
		locationList.add(initLocation(1, "city 1", "state 1"));
		locationList.add(initLocation(2, "city 2", "state 2"));
		locationList.add(initLocation(3, "city 3", "state 3"));

		return locationList;
	}

	@Test
	void saveTest() {
		Location location = defaultLocation();
		when(iLocationDao.save(location)).thenReturn(location);
		assertEquals(1, locationController.save(location).getId());
		assertEquals("city 1", locationController.save(location).getCity());
		assertEquals("state 1", locationController.save(location).getState());
		assertEquals(null, locationController.save(location).getInstitutes());
		assertEquals(null, locationController.save(location).getGraduates());
	}

	@Test
	void getAllTest() {
		List<Location> locationList = initLocationList();
		when(iLocationDao.findAll()).thenReturn(locationList);
		assertEquals(1, locationController.getAll().get(0).getId());
		assertEquals(2, locationController.getAll().get(1).getId());
		assertEquals(3, locationController.getAll().get(2).getId());
	}

	@Test
	void findByEmailIdTest() {
		Optional<Location> location = Optional.of(defaultLocation());
		when(iLocationDao.findById(1)).thenReturn(location);
		assertEquals(1, locationController.findById(1).get().getId());
	}

}
