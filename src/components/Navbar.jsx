import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="mb-6 flex justify-center space-x-4 font-sans">
    <Link to="/" className="text-blue-600 hover:underline">Feedback Form</Link>
    <Link to="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
  </nav>
);

export default Navbar;
