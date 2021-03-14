package com.ms.au.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Graduate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private String name;

	@Column
	private Integer age;

	@Column
	private String gender;

	@Column
	private String address;

	@Column(name = "phone_number")
	private String phoneNumber;

	@Column(name = "email_id")
	private String emailId;

	@Column(name = "joining_date")
	private Date joiningDate;

	@Column(name = "roll_number")
	private String rollNumber;

	@Column
	private String biography;

	@Column(name = "is_deleted")
	private Boolean isDeleted;

	@JoinColumn(name = "institute_id")
	private Integer instituteId;

	@JoinColumn(name = "location_id")
	private Integer locationId;

	@OneToMany(mappedBy = "graduateId", cascade = CascadeType.ALL)
	private List<Feedback> feedbacks = new ArrayList<>();

	@ManyToMany
	@JoinTable(name = "graduate_skill", joinColumns = @JoinColumn(name = "graduate_id"), inverseJoinColumns = @JoinColumn(name = "skill_id"))
	private List<Skill> skills = new ArrayList<>();

}
