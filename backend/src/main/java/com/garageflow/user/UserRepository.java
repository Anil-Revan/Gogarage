package com.garageflow.user;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    boolean existsByGarageIdAndEmail(UUID garageId, String email);
}
