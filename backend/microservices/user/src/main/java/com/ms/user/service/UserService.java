package com.ms.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ms.user.model.UserModel;
import com.ms.user.model.dto.UserDTO;
import com.ms.user.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public UserModel insertUser(UserDTO userDto) {
		var UserModel = new UserModel(userDto);
		return this.userRepository.save(UserModel);
	}
}
