package com.garageflow.garage;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface GarageRepository extends JpaRepository<Garage, UUID> {
    boolean existsByPhone(String phone);
}
