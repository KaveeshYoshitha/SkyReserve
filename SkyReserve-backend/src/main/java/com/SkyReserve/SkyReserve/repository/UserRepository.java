package com.SkyReserve.SkyReserve.repository;

import com.SkyReserve.SkyReserve.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserModel, String> {
    boolean existsByEmail(String email);  // Custom method to check if a user already exists

    Optional<UserModel> findByEmail(String email);


}
