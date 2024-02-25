import Link from "next/link";

const Dashboard = () => {
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
              <p className="card-text">Total number of employees: 100</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Employee List</h5>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Employee ID</th>
                      <th>Employee Full Name</th>
                      <th>Contact No</th>
                      <th>Email Address</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>1234567890</td>
                      <td>johndoe@example.com</td>
                      <td>123 Main St, City, Country</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
