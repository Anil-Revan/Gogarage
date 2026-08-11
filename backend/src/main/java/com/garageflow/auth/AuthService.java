package com.garageflow.auth;

import com.garageflow.garage.Garage;
import com.garageflow.garage.GarageRepository;
import com.garageflow.user.User;
import com.garageflow.user.UserRepository;
import com.garageflow.user.UserRole;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {
    private final GarageRepository garageRepository;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(GarageRepository garageRepository,
                       UserRepository userRepository,
                       BCryptPasswordEncoder passwordEncoder) {
        this.garageRepository = garageRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public RegisterResponse register(RegisterRequest request) {
        String phone = request.phone().trim();
        String email = request.email() == null ? null : request.email().trim().toLowerCase();

        if (garageRepository.existsByPhone(phone)) {
            throw new IllegalArgumentException(
                    "A garage is already registered with this phone number.");
        }

        Garage garage = new Garage();
        garage.setName(request.garageName().trim());
        garage.setPhone(phone);
        garage.setEmail(email);

        try {
            garage = garageRepository.save(garage);

            User owner = new User();
            owner.setGarage(garage);
            owner.setName(request.ownerName().trim());
            owner.setPhone(phone);
            owner.setEmail(email);
            owner.setPasswordHash(passwordEncoder.encode(request.password()));
            owner.setRole(UserRole.OWNER);
            owner.setActive(true);

            owner = userRepository.save(owner);

            return new RegisterResponse(
                    garage.getId(),
                    garage.getName(),
                    owner.getId(),
                    owner.getName(),
                    owner.getRole().name(),
                    "Garage registered successfully."
            );
        } catch (DataIntegrityViolationException ex) {
            throw new IllegalArgumentException(
                    "A garage or owner with the supplied details already exists.");
        }
    }
}
