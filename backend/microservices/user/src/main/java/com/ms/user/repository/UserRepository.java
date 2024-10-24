package com.ms.user.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ms.user.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, UUID>{

}
