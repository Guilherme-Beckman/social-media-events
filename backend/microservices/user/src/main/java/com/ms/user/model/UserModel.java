package com.ms.user.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Entity
@Table(name = "users")
@Data
public class UserModel {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID user_id;
	private String name;
	private String lastname;
	private String email;
	private String password;
	private String phone;
	private LocalDate date_of_birth;
	private String cpf;
	private String gender;
	private String url_profile_picture;
	private UserRole role;
	private LocalDateTime created_at;

}
