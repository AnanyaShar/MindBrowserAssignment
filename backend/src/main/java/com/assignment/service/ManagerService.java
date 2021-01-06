package com.assignment.service;

import javax.transaction.Transactional;

import com.assignment.exception.AssignmentException;
import com.assignment.model.EmployeeModel;
import com.assignment.model.GetAllEmployee;
import com.assignment.model.RegisterUser;
import com.assignment.model.UpdateEmployeeRequest;

@Transactional
public interface ManagerService {
	
	public String registerManager(RegisterUser user) throws AssignmentException;
	
	public String deleteEmployee(Long employeeId) throws AssignmentException;
	
	public String createEmployee(RegisterUser user) throws AssignmentException;
	
	public GetAllEmployee<EmployeeModel> getAllEmployee() throws AssignmentException;
	
	public String updateEmployee(Long employeeId, UpdateEmployeeRequest updateEmployeeRequest) throws AssignmentException;

}
