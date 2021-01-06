package com.assignment.model;

import com.assignment.entity.Employee;

import lombok.Data;

@Data
public class EmployeeModel {
	
	private Long id;

	private String firstName;
	
	private String lastName;

	private String email;

	private String company;

	private String address;

	private String city;

	private String state;

	private String country;

	private String zipCode;

	private String mobile;
 
	private String dob;
	
	public EmployeeModel(Employee employee) {
		setAddress(employee.getAddress());
		setCity(employee.getCity());
		setCompany(employee.getCompany());
		setCountry(employee.getCountry());
		setDob(employee.getDob());
		setEmail(employee.getEmail());
		setFirstName(employee.getFirstName());
		setId(employee.getId());
		setLastName(employee.getLastName());
		setMobile(employee.getMobile());
		setState(employee.getState());
		setZipCode(employee.getZipCode());
	}

}
