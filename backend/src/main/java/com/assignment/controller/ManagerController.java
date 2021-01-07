package com.assignment.controller;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.exception.AssignmentException;
import com.assignment.model.EmployeeModel;
import com.assignment.model.GetAllEmployee;
import com.assignment.model.RegisterUser;
import com.assignment.model.UpdateEmployeeRequest;
import com.assignment.service.ManagerService;

import lombok.RequiredArgsConstructor;

@CrossOrigin
@RestController
@RequiredArgsConstructor
public class ManagerController {

	@Autowired
	private ManagerService managerService;

	@PostMapping("/register/registerManager")
	public String registerManager(@RequestBody @Valid RegisterUser user) throws AssignmentException {
		return managerService.registerManager(user);
	}

	@DeleteMapping("/deleteEmployee/{id}")
	public String deleteEmployee(@PathVariable("id") @NotNull Long employeeId) throws AssignmentException {
		return managerService.deleteEmployee(employeeId);
	}

	@PostMapping("/register/createEmployee")
	public String createEmployee(@RequestBody @Valid RegisterUser user) throws AssignmentException {
		return managerService.createEmployee(user);
	}

	@GetMapping("/getEmployee")
	public GetAllEmployee<EmployeeModel> getAllEmployee() throws AssignmentException {
		return managerService.getAllEmployee();
	}

	@PutMapping("/updateEmployee/{id}")
	public String updateEmployee(@PathVariable("id") @NotNull Long employeeId,
			@RequestBody @Valid UpdateEmployeeRequest updateRequest) throws AssignmentException {
		return managerService.updateEmployee(employeeId, updateRequest);
	}

}
