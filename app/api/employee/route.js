import { connectToDB } from "@/utils/database";
import Employee from "@/models/employee";

export const GET = async (req) => {
  try {
    await connectToDB();

    const employees = await Employee.find({})
    return new Response(JSON.stringify(employees), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all prompts:', error, { status: 500 });   
  }
};
