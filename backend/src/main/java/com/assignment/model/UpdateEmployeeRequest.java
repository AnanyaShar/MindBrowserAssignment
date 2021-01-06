package com.assignment.model;

import javax.validation.constraints.Pattern;

import lombok.Data;

@Data
public class UpdateEmployeeRequest {

	@Pattern(regexp = ".*\\S.*")
	private String firstName;
	
	@Pattern(regexp = ".*\\S.*")
	private String lastName;
	
	@Pattern(regexp = ".*\\S.*")
	private String password;

	@Pattern(regexp = ".*\\S.*")
	private String email;

	@Pattern(regexp = ".*\\S.*")
	private String company;

	@Pattern(regexp = ".*\\S.*")
	private String address;

	@Pattern(regexp = ".*\\S.*")
	private String city;

	@Pattern(regexp = ".*\\S.*")
	private String state;

	@Pattern(regexp = ".*\\S.*")
	private String country;

	@Pattern(regexp = ".*\\S.*")
	private String zipCode;

	@Pattern(regexp = ".*\\S.*")
	private String mobile;
 
	@Pattern(regexp = ".*\\S.*")
	private String dob;

}
