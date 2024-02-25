import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <a className="navbar-brand" style={{cursor: 'pointer'}} onClick={handleLogout}>Logout</a>
      </div>
    </nav>
  );
};

export default Header;
