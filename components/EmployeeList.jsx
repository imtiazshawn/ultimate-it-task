const EmployeeList = ({ employeeData }) => {
  const sortedEmployeeData = [...employeeData].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Employee List</h5>
          <div className="table-responsive">
            <div className="overflow-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Employee Full Name</th>
                    <th>Contact No</th>
                    <th>Email Address</th>
                    <th>Address</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedEmployeeData.map((employee) => (
                    <tr key={employee._id}>
                      <td>{employee.employee_id}</td>
                      <td>{employee.employee_name}</td>
                      <td>{employee.employee_contact}</td>
                      <td>{employee.employee_email}</td>
                      <td>{employee.employee_address}</td>
                      <td>{employee.employee_gender}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
