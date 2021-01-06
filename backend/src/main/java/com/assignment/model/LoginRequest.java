package com.assignment.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


/**
 *  class used to map login request params
 * */
@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class LoginRequest {

	@NotBlank(message = "Email Required")
	@Email
	private String email;

	@NotBlank(message = "Password Required ")
	private String password;

}
