# GarageFlow Product Blueprint

## Product promise

GarageFlow helps a garage manage the complete lifecycle of every vehicle.

Customer -> Vehicle -> Service -> Parts -> Invoice -> Payment -> Reminder

## MVP screens

1. Login
2. Dashboard
3. Customers
4. Customer details
5. Vehicles
6. Vehicle service history
7. New job card
8. Job card details
9. Invoice
10. Reminders
11. Parts/inventory

## Dashboard

Show:

- Vehicles currently in workshop
- Ready for delivery
- Today's revenue
- Pending estimates
- Pending payments
- Reminders due
- Low-stock parts

## Customer search

Search using:

- Mobile
- Registration number
- Customer name
- VIN

Registration-number and mobile search should be fast.

## Vehicle record

Fields:

- Registration number
- VIN/chassis
- Make
- Model
- Variant
- Manufacturing year
- Fuel
- Transmission
- Current odometer

## Job card

Fields:

- Job card number
- Customer
- Vehicle
- Odometer
- Complaint
- Inspection notes
- Labour
- Parts
- Photos
- Estimate
- Approval
- Status

Status flow:

OPEN
-> INSPECTION
-> ESTIMATE_SENT
-> APPROVED
-> IN_PROGRESS
-> READY
-> DELIVERED
-> CLOSED

## Reminder engine

Support:

- Date based
- Odometer based
- Date OR odometer
- Recurring intervals

Examples:

Engine oil:
10,000 km OR 6 months

General service:
10,000 km OR 6 months

Insurance:
1 year

Brake inspection:
10,000 km

## Future modules

- WhatsApp
- SMS
- Email
- Pickup/drop
- Appointment booking
- Customer portal
- Mechanic mobile app
- Multi-branch
- Supplier management
- Purchase orders
- GST-ready invoices
- UPI payments
- SaaS subscription billing
