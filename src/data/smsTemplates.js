// src/data/smsTemplates.js

export const smsTemplates = [
  {
    id: "tpl_salary",
    label: "Salary Payment",
    text: "Dear {name}, your salary of Rs {amount} has been processed for {month}.",
  },
  {
    id: "tpl_attendance",
    label: "Attendance Alert",
    text: "Dear {name}, your attendance for today is marked as {status}. Contact admin if any issue.",
  },
  {
    id: "tpl_general",
    label: "General Notice",
    text: "Dear {name}, please report to site at {site} tomorrow at {time}.",
  },
];
