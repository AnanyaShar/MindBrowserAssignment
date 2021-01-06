package com.assignment.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.exception.AssignmentException;
import com.assignment.model.LoginRequest;
import com.assignment.model.LoginResponse;
import com.assignment.service.AuthService;

import lombok.RequiredArgsConstructor;

/**
 * The authentication endpoint.
 * <p>
 * POST /auth/login - user login.
 * </p>
 */
@RestController
@RequiredArgsConstructor
public class AuthenticationController {
	
	 /**
     * Authentication service.
     */
	@Autowired
	private AuthService authService;
	
	@PostMapping(value = "/auth/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public LoginResponse login(@Valid @RequestBody LoginRequest request) throws AssignmentException {
        return authService.login(request);
    }
}
