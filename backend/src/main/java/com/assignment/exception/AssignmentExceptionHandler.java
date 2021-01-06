package com.assignment.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AssignmentExceptionHandler {

	@ExceptionHandler(value = AssignmentException.class)
	public ResponseEntity<Error> apiException(AssignmentException e) {
		return new ResponseEntity<Error>(e.toError(), e.getHttpStatus());
	}
	
	@ExceptionHandler(value = HttpMessageNotReadableException.class)
    public ResponseEntity<Error> missingHttpBody(HttpMessageNotReadableException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Error(e.getMessage()));
    }
	
	@ExceptionHandler(value = MethodArgumentNotValidException.class)
    public ResponseEntity<Error> invalidRequest(MethodArgumentNotValidException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Error(e.getMessage()));
    }
	
	@ExceptionHandler(value = Exception.class)
    public ResponseEntity<Error> exception(Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new Error(e.getMessage()));
    }

}
