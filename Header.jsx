import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-indigo-600">MyLogo</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-indigo-600">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-indigo-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;