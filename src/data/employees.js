// src/data/employees.js

export const EMPLOYEE_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
};

export const employees = [
  {
    id: "emp_1",
    name: "Ramesh Patel",
    phone: "9876543210",
    address: "Indore, MP",
    dailyRate: 800,
    hourlyRate: 120,
    status: EMPLOYEE_STATUS.ACTIVE,
    photoUrl: null,
  },
  {
    id: "emp_2",
    name: "Suresh Yadav",
    phone: "9876500123",
    address: "Pithampur, MP",
    dailyRate: 900,
    hourlyRate: 130,
    status: EMPLOYEE_STATUS.ACTIVE,
    photoUrl: null,
  },
  {
    id: "emp_3",
    name: "Mahesh Verma",
    phone: "9998877665",
    address: "Dewas, MP",
    dailyRate: 750,
    hourlyRate: 110,
    status: EMPLOYEE_STATUS.INACTIVE,
    photoUrl: null,
  },
];
