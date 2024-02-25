import { Schema, model, models } from "mongoose";

const EmployeeSchema = new Schema({
  employee_id: {
    type: String,
    required: [true, "Employee Id is Required."],
    // unique: [true, "Employee ID already Exists"]
  },
  employee_name: {
    type: String,
    required: [true, "Employee Name is Required."],
  },
  employee_contact: {
    type: Number,
    required: [true, "Employee Contact is Required."],
  },
  employee_email: {
    type: String,
    required: [true, "Employee Email is Required."],
  },
  employee_address: {
    type: String,
    required: [true, "Employee Address is Required."],
  },
  employee_gender: {
    type: String,
    required: [true, "Gender is Required."],
  },
  employee_birthday: {
    type: Date,
    required: [true, "Birthday is Required."],
  },
  employee_joining: {
    type: Date,
    required: [true, "Joining Date is Required."],
  }
}, {
  timestamps: true
});

const Employee = models.Employee || model("Employee", EmployeeSchema);

export default Employee;
