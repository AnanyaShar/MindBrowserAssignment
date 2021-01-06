package com.assignment.service;

import javax.transaction.Transactional;

import com.assignment.exception.AssignmentException;
import com.assignment.model.LoginRequest;
import com.assignment.model.LoginResponse;

@Transactional
public interface AuthService {
	
	/* 
	 * handles login requests 
	 * @param request- request with email and password
	 * */
	LoginResponse login(LoginRequest request) throws AssignmentException;

}
