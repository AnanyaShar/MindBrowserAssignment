package com.assignment.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.assignment.entity.User;
import com.assignment.entity.UserRole;
import com.assignment.exception.AssignmentException;
import com.assignment.model.LoginRequest;
import com.assignment.model.LoginResponse;
import com.assignment.repository.UserRepository;
import com.assignment.security.JwtTokenProvider;
import com.assignment.service.AuthService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

	private static final String AUTH_ERROR = "Authentication Failed!! Either email or password is invalid.";

	/**
	 * Manager Repository
	 */
	@Autowired
	private UserRepository userRepository;

	/**
	 * get password encoder to match the password provided with the provided
	 * password
	 **/
	@Autowired
	private PasswordEncoder passwordEncoder;

	/**
	 * generate jwt token
	 **/
	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@Override
	public LoginResponse login(LoginRequest request) throws AssignmentException {
		Optional<User> manager = userRepository.findByEmail(request.getEmail());
		if (manager.isPresent() && manager.get().getRole().equals(UserRole.MANAGER)
				&& passwordEncoder.matches(request.getPassword(), manager.get().getPasswordHash())) {
			return new LoginResponse(jwtTokenProvider.generateToken(manager.get()));
		}
		throw new AssignmentException(HttpStatus.UNAUTHORIZED, AUTH_ERROR);
	}

}
