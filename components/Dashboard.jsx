"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import EmployeeList from "./EmployeeList";

const Dashboard = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/employee", {
          cash: "no-store" 
        });
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
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <Link
                href="/employee/create"
                className="text-decoration-none text-dark"
              >
                <h5 className="card-title">Create Employee Profile</h5>
                <p className="card-text">
                  Click here to create a new employee profile
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path fill="#198754" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Employee Count</h5>
              <p className="card-text">
                Total number of employees: {totalEmployees}
              </p>
            </div>
          </div>
        </div>
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

export default Dashboard;
