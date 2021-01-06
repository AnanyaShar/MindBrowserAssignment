package com.assignment.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * login response send to the client
 *
 * */

@Setter
@Getter
@AllArgsConstructor
@ToString
public class LoginResponse {
	
	/**
	 * jwt token send as the response after successful authentication 
	 * 
	 * */
	private String token;
}
