# Database Blueprint

Core tables:

tenants
users
roles

customers
vehicles
vehicle_service_history

service_catalog

job_cards
job_card_items

parts
inventory_transactions

estimates

invoices
invoice_items
payments

reminders
notification_logs

audit_logs
subscriptions

## Multi-tenancy

Every business-owned table should contain tenant_id.

Example:

customers
- id
- tenant_id
- name
- phone

Never trust tenant_id from the browser. Resolve it from the authenticated user/session.

## Vehicle relationship

tenant
  |
  +-- customer
        |
        +-- vehicle
              |
              +-- job_card
              +-- service_history
              +-- reminder

## Important indexes

customers:
tenant_id + phone

vehicles:
tenant_id + registration_number

job_cards:
tenant_id + job_card_number

reminders:
tenant_id + status + due_date
