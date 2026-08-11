# GarageFlow Backend

Java 21 + Spring Boot backend.

Current endpoints:
- GET `/api/v1/health`
- POST `/api/v1/auth/register`

## Local database

Set your local PostgreSQL credentials as environment variables when possible:

```powershell
$env:DB_URL="jdbc:postgresql://localhost:5432/garageflow"
$env:DB_USERNAME="postgres"
$env:DB_PASSWORD="YOUR_PASSWORD"
```

Then:

```powershell
mvn spring-boot:run
```

Passwords are stored using BCrypt. Never commit database passwords or application secrets.
