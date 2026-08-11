package com.garageflow.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterRequest(
        @NotBlank @Size(max = 150) String garageName,
        @NotBlank @Size(max = 120) String ownerName,
        @NotBlank @Size(min = 8, max = 100) String password,
        @NotBlank @Size(max = 30) String phone,
        @Email @Size(max = 255) String email
) {}
