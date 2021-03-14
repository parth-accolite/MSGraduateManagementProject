package com.ms.au.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Location {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private String city;

	@Column
	private String state;

	@OneToMany(mappedBy = "locationId", cascade = CascadeType.ALL)
	private List<Institute> institutes = new ArrayList<>();

	@OneToMany(mappedBy = "locationId", cascade = CascadeType.ALL)
	private List<Graduate> graduates = new ArrayList<>();
}
