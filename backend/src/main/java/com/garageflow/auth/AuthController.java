package com.garageflow.auth;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse<RegisterResponse> register(
            @Valid @RequestBody RegisterRequest request) {
        return ApiResponse.success(authService.register(request));
    }

    public record ApiResponse<T>(boolean success, T data) {
        public static <T> ApiResponse<T> success(T data) {
            return new ApiResponse<>(true, data);
        }
    }
}
