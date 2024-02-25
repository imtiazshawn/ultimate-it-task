import { connectToDB } from "@/utils/database";
import Employee from "@/models/employee";

export const POST = async (req) => {
  const {
    employee_id,
    employee_name,
    employee_contact,
    employee_email,
    employee_address,
    employee_gender,
    employee_birthday,
    employee_joining,
  } = await req.json();

  try {
    await connectToDB();
    const newEmployee = new Employee({
      employee_id,
      employee_name,
      employee_contact,
      employee_email,
      employee_address,
      employee_gender,
      employee_birthday: new Date(employee_birthday),
      employee_joining: new Date(employee_joining),
    });

    await newEmployee.save();

    return new Response(JSON.stringify(newEmployee), { status: 201 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
