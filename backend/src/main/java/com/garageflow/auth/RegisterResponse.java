package com.garageflow.auth;

import java.util.UUID;

public record RegisterResponse(
        UUID garageId,
        String garageName,
        UUID ownerUserId,
        String ownerName,
        String role,
        String message
) {}
