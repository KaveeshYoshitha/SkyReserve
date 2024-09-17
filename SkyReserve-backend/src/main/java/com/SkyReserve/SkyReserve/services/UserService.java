package com.SkyReserve.SkyReserve.services;

import com.SkyReserve.SkyReserve.model.UserModel;
import com.SkyReserve.SkyReserve.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String signUpUser(UserModel userModel) {
        if (userRepository.existsByEmail(userModel.getEmail())) {
            return "User already exists with this email!";
        }

        userRepository.save(userModel);
        return "User signed up successfully!";

    }

    public String loginUser(UserModel loginRequest) {
        Optional<UserModel> user = userRepository.findByEmail(loginRequest.getEmail());
        if (user.isPresent()) {
            // Check if the password matches
            if (user.get().getPassword().equals(loginRequest.getPassword())) {
                return "Login successful";
            } else {
                return "Password not matching";
            }
        } else {
            return "No user found";
        }
    }
}