package com.ms.user.model.dto;

import java.time.LocalDate;

public record UserDTO(
		 String name,
		 String lastname,
		 String email,
		 String password,
		 String phone,
		 LocalDate date_of_birth,
		 String cpf,
		 String gender,
		 String url_profile_picture
		) {

}
