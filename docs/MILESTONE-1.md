# Milestone 1 — Garage Registration

## Goal

Create a garage and its owner user in one transaction.

## API

POST `http://localhost:8080/api/v1/auth/register`

Example body:

```json
{
  "garageName": "ABC Auto Garage",
  "ownerName": "Rajesh Kumar",
  "password": "StrongPassword123",
  "phone": "9876543210",
  "email": "rajesh@example.com"
}
```

## PowerShell test

```powershell
$body = @{
  garageName = "ABC Auto Garage"
  ownerName = "Rajesh Kumar"
  password = "StrongPassword123"
  phone = "9876543210"
  email = "rajesh@example.com"
} | ConvertTo-Json

Invoke-RestMethod `
  -Uri "http://localhost:8080/api/v1/auth/register" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body
```

Expected: HTTP 201 and a response containing `garageId`, `ownerUserId`, and role `OWNER`.

## Verify in PostgreSQL

```sql
SELECT id, name, phone, email FROM garages;
SELECT id, name, email, role, garage_id FROM users;
```

The user's `password_hash` should be a BCrypt hash, not the original password.
