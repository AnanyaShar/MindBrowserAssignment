package com.assignment.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.assignment.entity.Employee;

@Repository
@Transactional
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long>{
	
	Optional<Employee> findById(String employeeId);
	
	Optional<Employee> findByEmail(String email);

}
