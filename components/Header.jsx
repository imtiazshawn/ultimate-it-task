import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link href='/' className="navbar-brand" style={{fontWeight: 'bold'}}>MY<span className='text-success'>TASK</span></Link>
        <a className="navbar-brand" style={{cursor: 'pointer'}} onClick={handleLogout}>Logout</a>
      </div>
    </nav>
  );
};

export default Header;
