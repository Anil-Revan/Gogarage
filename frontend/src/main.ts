import { getJson } from "./api";
import type { DashboardStats, JobCard, Reminder } from "./types";
import "./styles/main.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found");
}

const stats: DashboardStats = {
  vehiclesInWorkshop: 12,
  readyForDelivery: 5,
  todaysRevenue: 42800,
  remindersDue: 18
};

const jobs: JobCard[] = [
  {
    id: "1",
    number: "JC-10245",
    registrationNumber: "KA 01 AB 1234",
    vehicle: "Hyundai Creta",
    complaint: "General service",
    status: "IN PROGRESS"
  },
  {
    id: "2",
    number: "JC-10246",
    registrationNumber: "KA 13 MN 7821",
    vehicle: "Maruti Swift",
    complaint: "Brake service",
    status: "READY"
  }
];

const reminders: Reminder[] = [
  {
    id: "1",
    registrationNumber: "KA 05 XY 4488",
    type: "Service due",
    dueText: "2 days"
  },
  {
    id: "2",
    registrationNumber: "KA 03 CD 9122",
    type: "Engine oil",
    dueText: "850 km remaining"
  }
];

function renderDashboard() {
  app.innerHTML = `
    <div class="layout">
      <aside class="sidebar">
        <div class="logo">GarageFlow</div>
        <nav>
          <button class="nav-item active" data-page="dashboard">Dashboard</button>
          <button class="nav-item" data-page="customers">Customers</button>
          <button class="nav-item" data-page="vehicles">Vehicles</button>
          <button class="nav-item" data-page="job-cards">Job Cards</button>
          <button class="nav-item" data-page="inventory">Inventory</button>
          <button class="nav-item" data-page="invoices">Invoices</button>
          <button class="nav-item" data-page="reminders">Reminders</button>
          <button class="nav-item" data-page="reports">Reports</button>
          <button class="nav-item" data-page="settings">Settings</button>
        </nav>
      </aside>

      <main class="main">
        <header class="topbar">
          <div>
            <p class="muted">ABC Auto Garage</p>
            <h1>Dashboard</h1>
          </div>
          <button id="new-job" class="primary">+ New Job Card</button>
        </header>

        <section class="stats">
          ${statCard("Vehicles in workshop", stats.vehiclesInWorkshop)}
          ${statCard("Ready for delivery", stats.readyForDelivery)}
          ${statCard("Today's revenue", `₹${stats.todaysRevenue.toLocaleString("en-IN")}`)}
          ${statCard("Reminders due", stats.remindersDue)}
        </section>

        <section class="content-grid">
          <div class="panel">
            <div class="panel-header">
              <h2>Today's workshop</h2>
              <span class="muted">5 active</span>
            </div>
            ${jobs.map(jobTemplate).join("")}
          </div>

          <div class="panel">
            <div class="panel-header">
              <h2>Upcoming reminders</h2>
              <span class="muted">18 due</span>
            </div>
            ${reminders.map(reminderTemplate).join("")}
          </div>
        </section>

        <p id="backend-status" class="muted status">Checking backend...</p>
      </main>
    </div>
  `;

  document.querySelectorAll<HTMLButtonElement>(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.page !== "dashboard") {
        alert(`${button.textContent} page will be implemented next.`);
      }
    });
  });

  document.querySelector("#new-job")?.addEventListener("click", () => {
    alert("Next step: build the New Job Card screen.");
  });

  checkBackend();
}

function statCard(label: string, value: string | number): string {
  return `
    <div class="stat-card">
      <span class="muted">${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function jobTemplate(job: JobCard): string {
  return `
    <div class="list-row">
      <div>
        <strong>${job.registrationNumber}</strong>
        <p>${job.vehicle} · ${job.complaint}</p>
      </div>
      <span class="badge">${job.status}</span>
    </div>
  `;
}

function reminderTemplate(reminder: Reminder): string {
  return `
    <div class="list-row">
      <div>
        <strong>${reminder.type}</strong>
        <p>${reminder.registrationNumber}</p>
      </div>
      <span class="muted">${reminder.dueText}</span>
    </div>
  `;
}

async function checkBackend() {
  const status = document.querySelector<HTMLParagraphElement>("#backend-status");

  if (!status) return;

  try {
    const response = await getJson<{
      success: boolean;
      data: { status: string };
    }>("/api/v1/health");

    status.textContent = `Backend: ${response.data.status}`;
  } catch {
    status.textContent = "Backend: not connected";
  }
}

renderDashboard();
