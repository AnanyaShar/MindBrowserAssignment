package com.assignment.model;

import java.util.List;

import lombok.Data;

@Data
public class GetAllEmployee<T> {
	
	private List<T> employee;

}
