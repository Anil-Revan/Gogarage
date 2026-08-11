export interface DashboardStats {
  vehiclesInWorkshop: number;
  readyForDelivery: number;
  todaysRevenue: number;
  remindersDue: number;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
}

export interface Vehicle {
  id: string;
  registrationNumber: string;
  make: string;
  model: string;
  currentOdometer: number;
  customerId: string;
}

export interface JobCard {
  id: string;
  number: string;
  registrationNumber: string;
  vehicle: string;
  complaint: string;
  status: string;
}

export interface Reminder {
  id: string;
  registrationNumber: string;
  type: string;
  dueText: string;
}
