package com.assignment.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
public class RegisterUser {
	
	@NotBlank(message = "First Name is required")
	private String firstName;

	@NotBlank(message = "Last Name is required")
	private String lastName;

	@NotBlank(message = "Email Name is required")
    @Email
	private String email;

	@NotBlank(message = "Password Name is required")
	private String password;

	@NotBlank(message = "Company is required")
	private String company;

	@NotBlank(message = "Address is required")
	private String address;

	@NotBlank(message = "City is required")
	private String city;

	@NotBlank(message = "State is required")
	private String state;

	@NotBlank(message = "Countryis required")
	private String country;

	@NotBlank(message = "ZipCode is required")
	private String zipCode;

	@NotBlank(message = "Mobile Number is required")
	@Size(min=10, max=10, message="Phone Number Invalid")
	private String mobile;
	
	@NotBlank(message = "Date of Birth is required")
	private String dob;

}
