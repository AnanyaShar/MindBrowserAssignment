package com.assignment.exception;

import org.springframework.http.HttpStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class AssignmentException extends Exception{
	
	/**
     * The corresponding HTTP status code.
     */
    private HttpStatus httpStatus;

	
	public AssignmentException(HttpStatus httpStatus, String message) {
		  super(message);
	      this.httpStatus = httpStatus;
	}
	
	public Error toError() {
		return new Error(getMessage());
	}

}
