# API Blueprint

Base path: `/api/v1`

## Health
GET `/health`

## Authentication

### Register garage
POST `/auth/register`

```json
{
  "garageName": "ABC Auto Garage",
  "ownerName": "Rajesh Kumar",
  "password": "StrongPassword123",
  "phone": "9876543210",
  "email": "rajesh@example.com"
}
```

The password is stored as a BCrypt hash and is never returned.

## Customers
GET `/customers`
POST `/customers`
GET `/customers/{id}`
PUT `/customers/{id}`

## Vehicles
GET `/vehicles`
POST `/vehicles`
GET `/vehicles/{id}`
PUT `/vehicles/{id}`
GET `/vehicles/{id}/service-history`

## Job cards
GET `/job-cards`
POST `/job-cards`
GET `/job-cards/{id}`
PUT `/job-cards/{id}`

## Invoices
POST `/invoices`
GET `/invoices/{id}`
POST `/invoices/{id}/payments`

## Reminders
GET `/reminders/due`
POST `/reminders`
PUT `/reminders/{id}`
