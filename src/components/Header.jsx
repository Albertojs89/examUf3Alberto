
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-primary text-white mb-4">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <span className="navbar-brand">Alberto</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/usuarios" className="nav-link">Usuarios</Link>
            </li>
            <li className="nav-item">
              <Link to="/camareros" className="nav-link">Camareros</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
