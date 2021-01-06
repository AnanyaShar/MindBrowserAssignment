package com.assignment.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.assignment.entity.Employee;
import com.assignment.entity.ManagerEntity;
import com.assignment.exception.AssignmentException;
import com.assignment.model.EmployeeModel;
import com.assignment.model.GetAllEmployee;
import com.assignment.model.RegisterUser;
import com.assignment.model.UpdateEmployeeRequest;
import com.assignment.repository.EmployeeRepository;
import com.assignment.repository.ManagerRepository;
import com.assignment.security.PasswordValidationPolicy;
import com.assignment.service.ManagerService;
import com.assignment.utils.SecurityUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ManagerServiceImpl implements ManagerService {
	
	@Autowired
	private ManagerRepository managerReporsitory;
	
	@Autowired
	private PasswordValidationPolicy passwordValidationPolicy;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public String registerManager(RegisterUser user) throws AssignmentException {
		ManagerEntity manager;
		
		Optional<ManagerEntity> managerRetrived = managerReporsitory.findByEmail(user.getEmail());
		if(managerRetrived.isPresent()) {
			throw new AssignmentException(HttpStatus.CONFLICT, "Email already register");
		} else {
			manager = new ManagerEntity();
			manager.setAddress(user.getAddress());
			manager.setCity(user.getCity());
			manager.setCompany(user.getCompany());
			manager.setCountry(user.getCountry());
			manager.setDob(user.getDob());
			manager.setEmail(user.getEmail());
			manager.setFirstName(user.getFirstName());
			manager.setLastName(user.getLastName());
			manager.setMobile(user.getMobile());
			manager.setPasswordHash(validatePassword(user.getEmail(), user.getPassword()));
			manager.setState(user.getState());
			manager.setZipCode(user.getZipCode());
			try {
				managerReporsitory.save(manager);
				return "User Registered Successfully";
			} catch(ConstraintViolationException e) {
				throw new AssignmentException(HttpStatus.CONFLICT, "Could not register user: " + manager.getEmail());
			}	
		}
		
	}

	private String validatePassword(String email, String password) throws AssignmentException {
		if(!passwordValidationPolicy.validatePassword(email, password)) {
			throw new AssignmentException(HttpStatus.BAD_REQUEST, "Password Validation Failed");
		}
		return passwordEncoder.encode(password);
	}

	@Override
	public String deleteEmployee(Long employeeId) throws AssignmentException {
		Optional<Employee> employee = employeeRepository.findById(employeeId) ;
		if(employee.isPresent()) {
			employeeRepository.delete(employee.get());
			return "Employee deleted Successfully";
		} else {
			throw new AssignmentException(HttpStatus.BAD_REQUEST, "Employee doesn't exists");
		}
	}

	@Override
	public String createEmployee(RegisterUser user) throws AssignmentException {
		Optional<Employee> employeeRetrieved = employeeRepository.findByEmail(user.getEmail());
		
		Employee employee;
		
		if(employeeRetrieved.isPresent()) {
			throw new AssignmentException(HttpStatus.BAD_REQUEST, "Employee with given email already exists");
		} else {
			employee = new Employee();
			employee.setAddress(user.getAddress());
			employee.setCity(user.getCity());
			employee.setCompany(user.getCompany());
			employee.setCountry(user.getCountry());
			employee.setCreatedAt(new Date());
			employee.setCreatedBy(SecurityUtils.getCurrentUserId().orElse(null));
			employee.setDob(user.getDob());
			employee.setEmail(user.getEmail());
			employee.setFirstName(user.getFirstName());
			employee.setLastName(user.getLastName());
			employee.setMobile(user.getMobile());
			employee.setPasswordHash(validatePassword(user.getEmail(), user.getPassword()));
			employee.setState(user.getState());
			employee.setZipCode(user.getZipCode());
			
			try {
				employeeRepository.save(employee);
				return "Employee created Successfully";
			} catch(ConstraintViolationException e) {
				throw new AssignmentException(HttpStatus.CONFLICT, "Could not register employee: " + employee.getEmail());
			}	
		}
	}

	@Override
	public GetAllEmployee<EmployeeModel> getAllEmployee() throws AssignmentException {
		
		try {
			List<Employee> employee = (List<Employee>) employeeRepository.findAll(Sort.by("firstName", "lastName"));
			GetAllEmployee<EmployeeModel> getAllEmployee =  new GetAllEmployee<>();
			getAllEmployee.setEmployee(employee.stream().map(EmployeeModel::new).collect(Collectors.toList()));
			return getAllEmployee;
		} catch (Exception ex) {
			throw new AssignmentException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to fetch employee list");
		}
		
	}

	@Override
	public String updateEmployee(Long employeeId, UpdateEmployeeRequest updateEmployeeRequest)
			throws AssignmentException {
		Optional<Employee> employeeRetrieved = employeeRepository.findById(employeeId);
		if(!employeeRetrieved.isPresent()) {
			throw new AssignmentException(HttpStatus.NOT_FOUND, "Employee Not Found");
		} else {
			Employee employee = employeeRetrieved.get();
			
			employee.setUpdatedAt(new Date());
			employee.setUpdatedBy(SecurityUtils.getCurrentUserId().orElse(null));
			
			if(updateEmployeeRequest.getAddress() != null) {
				employee.setAddress(updateEmployeeRequest.getAddress());
			}
			
			if(updateEmployeeRequest.getCity() != null) {
				employee.setCity(updateEmployeeRequest.getCity());
			}
			
			if(updateEmployeeRequest.getCountry() != null) {
				employee.setCountry(updateEmployeeRequest.getCountry());
			}
			
			if(updateEmployeeRequest.getCompany() != null) {
				employee.setCompany(updateEmployeeRequest.getCompany());
			}
			
			if(updateEmployeeRequest.getDob() != null) {
				employee.setDob(updateEmployeeRequest.getDob());
			}
			
			if(updateEmployeeRequest.getEmail() != null) {
				employee.setEmail(updateEmployeeRequest.getEmail());
			}
			
			if(updateEmployeeRequest.getFirstName() != null) {
				employee.setFirstName(updateEmployeeRequest.getFirstName());
			}
			
			if(updateEmployeeRequest.getLastName() != null) {
				employee.setLastName(updateEmployeeRequest.getLastName());
			}
			
			if(updateEmployeeRequest.getMobile() != null) {
				employee.setMobile(updateEmployeeRequest.getMobile());
			}
			
			if(updateEmployeeRequest.getPassword() != null) {
				employee.setPasswordHash(validatePassword(updateEmployeeRequest.getEmail(), updateEmployeeRequest.getPassword()));
			}
			
			if(updateEmployeeRequest.getState() != null) {
				employee.setState(updateEmployeeRequest.getState());
			}
			
			if(updateEmployeeRequest.getZipCode() != null) {
				employee.setZipCode(updateEmployeeRequest.getZipCode());
			}
			
			employeeRepository.save(employee);
			return "Employee Updated Successfully";
		}
		
	}

}
