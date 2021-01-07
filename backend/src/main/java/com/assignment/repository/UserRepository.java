package com.assignment.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.assignment.entity.User;
import com.assignment.entity.UserRole;

@Repository
@Transactional
public interface UserRepository extends PagingAndSortingRepository<User, Long>{
	
	Optional<User> findById(Long employeeId);
	
	Optional<User> findByEmail(String email);
	
	@Query("select userEntity from User userEntity where userEntity.role=:role and userEntity.createdBy=:createdBy")
	List<User> findAll(UserRole role, Long createdBy, Sort sort);

}
