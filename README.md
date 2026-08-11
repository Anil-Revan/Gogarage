# GarageFlow — Vanilla TypeScript Starter

Garage management SaaS built for independent car service garages.

## Stack

Frontend:
- HTML
- CSS
- TypeScript
- Vite
- No React

Backend:
- Java 21
- Spring Boot
- PostgreSQL

## Architecture

Browser
  -> Vanilla TypeScript frontend
  -> REST API
  -> Spring Boot
  -> PostgreSQL

## MVP workflow

Customer
-> Vehicle
-> Job Card
-> Labour + Parts
-> Invoice
-> Payment
-> Service History
-> Reminder

## Run frontend

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## Run backend

```bash
cd backend
mvn spring-boot:run
```

Windows:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

The starter backend runs on port 8080.

## PostgreSQL

```bash
docker compose up -d postgres
```

## Project structure

```text
garageflow/
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── src/
│       ├── main.ts
│       ├── api.ts
│       ├── types.ts
│       ├── pages/
│       └── styles/
│
├── backend/
│   ├── pom.xml
│   └── src/
│
├── docs/
│   ├── PRODUCT_BLUEPRINT.md
│   ├── DATABASE.md
│   └── API.md
│
└── docker-compose.yml
```

## Important decision

This project intentionally does not use React.

When the application becomes large, the same REST APIs can later be consumed by React without changing the backend architecture.
