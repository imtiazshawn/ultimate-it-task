import Link from "next/link";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const handleLinkClick = () => {
    if (isCollapsed) {
      toggleSidebar();
    }
  };

  return (
    <div id="sidebar" className={isCollapsed ? "active" : ""}>
      <div className='d-none d-md-block'>
        <div className="sidebar-arrow">
          <button className="btn btn-success" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="#ffffff" d="m9 6l-6 6l6 6zm6 12l6-6l-6-6z" />
            </svg>
          </button>
        </div>
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div id="sidebar-content" className={isCollapsed ? "active" : ""}>
            <div className="list-group list-group-flush mx-3 mt-4">
              <Link
                href="/"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Dashboard</span>
              </Link>
              <Link
                href="/employee"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-chart-area fa-fw me-3"></i>
                <span>Employee List</span>
              </Link>
              <Link
                href="/employee/create"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-chart-area fa-fw me-3"></i>
                <span>New Employee</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
