"use client";

import { useState, useEffect } from "react";

import EmployeeList from "@/components/EmployeeList";

const page = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/employee");
        if (!response.ok) {
          throw new Error("Failed to fetch employee data");
        }
        const data = await response.json();
        const total = data.length;
        setTotalEmployees(total);
        setEmployeeData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching employee data:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {totalEmployees == 0 ? (
              <p>No Employees Available</p>
            ) : (
              <>
                <EmployeeList employeeData={employeeData} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
