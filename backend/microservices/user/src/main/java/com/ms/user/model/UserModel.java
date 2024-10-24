package com.ms.user.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class UserModel {
	@Id
	private String user_id;
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
