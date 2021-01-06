package com.assignment.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Error {
	/**
     * Error message.
     */
    private String message;
}
