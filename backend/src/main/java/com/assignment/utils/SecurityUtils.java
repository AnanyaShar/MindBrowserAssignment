package com.assignment.utils;

import java.util.Optional;

import org.springframework.lang.NonNull;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import io.jsonwebtoken.Claims;

public final class SecurityUtils {

	@NonNull
	public static Optional<Long> getCurrentUserId() {
		return Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
				.map(Authentication::getPrincipal).filter(principal -> principal instanceof Claims)
				.map(principal -> (Claims) principal).map(claims -> claims.get("managerId", Long.class));
	}

	public static Optional<String> getCurrentUserEmail() {
		return Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
				.map(Authentication::getPrincipal).filter(principal -> principal instanceof Claims)
				.map(principal -> (Claims) principal).map(Claims::getSubject);
	}

}
