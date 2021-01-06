package com.assignment.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.assignment.entity.ManagerEntity;

@Repository
@Transactional
public interface ManagerRepository extends CrudRepository<ManagerEntity, Long>{
	
	Optional<ManagerEntity> findByEmail(String email);

}
