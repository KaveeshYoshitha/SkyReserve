package com.SkyReserve.SkyReserve.controller;

import com.SkyReserve.SkyReserve.model.UserModel;
import com.SkyReserve.SkyReserve.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> signUpUser(@RequestBody UserModel userModel) {
        String response = userService.signUpUser(userModel);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody UserModel loginRequest) {
        String response = userService.loginUser(loginRequest);
        Map<String, String> responseBody = new HashMap<>();

        if (response.equals("Login successful")) {
            responseBody.put("token", "some-generated-token");  // Replace with actual token generation logic
            return ResponseEntity.ok(responseBody);
        } else if (response.equals("Password not matching")) {
            responseBody.put("message", "Password not matching");
            return ResponseEntity.status(401).body(responseBody);
        } else {
            responseBody.put("message", "No user found");
            return ResponseEntity.status(404).body(responseBody);
        }
    }

}