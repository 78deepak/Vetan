// src/data/attendance.js

// status: "present" | "absent" | "half"
export const attendanceRecords = [
  {
    id: "att_1",
    date: "2025-11-01",
    employeeId: "emp_1",
    status: "present",
    extraHours: 2,
  },
  {
    id: "att_2",
    date: "2025-11-01",
    employeeId: "emp_2",
    status: "half",
    extraHours: 1,
  },
  {
    id: "att_3",
    date: "2025-11-01",
    employeeId: "emp_3",
    status: "absent",
    extraHours: 0,
  },
  {
    id: "att_4",
    date: "2025-11-02",
    employeeId: "emp_1",
    status: "present",
    extraHours: 0,
  },
];
