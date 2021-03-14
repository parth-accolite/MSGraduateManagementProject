package com.ms.au;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.ms.au.controllers.FeedbackController;
import com.ms.au.dao.IFeedbackDao;
import com.ms.au.entities.Feedback;

@SpringBootTest(classes = MsauManagementApplication.class)
public class TestFeedbackController {
	@Autowired
	private FeedbackController feedbackController;

	@MockBean
	private IFeedbackDao iFeedbackDao;

	public Feedback initFeedback(Integer id, String title, Integer graduateId, String desc) {
		Feedback feedback = new Feedback();

		feedback.setId(id);
		feedback.setTitle(title);
		feedback.setGraduateId(graduateId);
		feedback.setDescription(desc);
		feedback.setCreatedAt(null);
		return feedback;
	}

	public Feedback defaultFeedback() {
		return initFeedback(1, "ABC", 1, "abc");
	}

	public List<Feedback> initFeedbackList() {
		List<Feedback> feedbackList = new ArrayList<Feedback>();
		feedbackList.add(initFeedback(1, "ABC", 1, "abc"));
		feedbackList.add(initFeedback(2, "DEF", 2, "def"));
		feedbackList.add(initFeedback(3, "GHI", 3, "ghi"));

		return feedbackList;
	}

	@Test
	void saveTest() {
		Feedback feedback = defaultFeedback();
		when(iFeedbackDao.save(feedback)).thenReturn(feedback);

		assertEquals(1, feedbackController.save(feedback).getId());
		assertEquals("ABC", feedbackController.save(feedback).getTitle());
		assertEquals(1, feedbackController.save(feedback).getGraduateId());
		assertEquals("abc", feedbackController.save(feedback).getDescription());
		assertEquals(null, feedbackController.save(feedback).getCreatedAt());

	}

	@Test
	void getAllTest() {
		List<Feedback> feedbackList = initFeedbackList();
		when(iFeedbackDao.findAll()).thenReturn(feedbackList);
		assertEquals(1, feedbackController.getAll().get(0).getId());
		assertEquals(2, feedbackController.getAll().get(1).getId());
		assertEquals(3, feedbackController.getAll().get(2).getId());
	}

}
