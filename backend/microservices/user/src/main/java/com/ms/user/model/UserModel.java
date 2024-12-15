package com.ms.user.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

import com.ms.user.model.dto.UserDTO;

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
	private UUID userId;
	private String name;
	private String lastname;
	private String email;
	private String password;
	private String phone;
	private LocalDate dateOfBirth;
	private String cpf;
	private String gender;
	private String urlProfilePicture;
	private UserRole role;
	private LocalDateTime createdAt;
	
	public UserModel(UserDTO userDTO) {
		this.name = userDTO.name();
		this.lastname = userDTO.lastname();
		this.email = userDTO.email();
		this.password = userDTO.password();
		this.phone = userDTO.phone();
		this.dateOfBirth = userDTO.dateOfBirth();
		this.cpf = userDTO.cpf();
		this.gender = userDTO.gender();
		this.urlProfilePicture = userDTO.urlProfilePicture();
		this.role = UserRole.USER;
		this.createdAt = LocalDateTime.now();
	}
}
