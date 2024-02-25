"use client";

import { useState } from "react";

const EmployeeCreate = () => {
  const [employee, setEmployee] = useState({
    employeeId: "",
    fullName: "",
    contactNo: "",
    email: "",
    address: "",
    gender: "",
    dob: "",
    joiningDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", employee);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                Create Employee Profile
              </h3>
              <form className='mt-8' onSubmit={handleSubmit}>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                  <div className="col">
                    <label htmlFor="employeeId" className="form-label">
                      Employee ID *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="employeeId"
                      name="employeeId"
                      value={employee.employeeId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="fullName" className="form-label">
                      Employee Full Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="fullName"
                      value={employee.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="contactNo" className="form-label">
                      Contact No *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactNo"
                      name="contactNo"
                      value={employee.contactNo}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="email" className="form-label">
                      Email address *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={employee.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="address" className="form-label">
                      Address *
                    </label>
                    <input
                      className="form-control"
                      id="address"
                      name="address"
                      value={employee.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select
                      className="form-select"
                      id="gender"
                      name="gender"
                      value={employee.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="dob" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      name="dob"
                      value={employee.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="joiningDate" className="form-label">
                      Joining Date *
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="joiningDate"
                      name="joiningDate"
                      value={employee.joiningDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mt-4 d-flex justify-content-end">
                  <button type="submit" className="btn btn-success">
                    Create New Employee
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCreate;
