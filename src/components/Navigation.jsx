import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/images/logo.png";

function Navigation() {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 transition-colors ${isActive ? "text-primary" : "hover:text-primary"}`;

  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow">
      <nav className="navbar mx-auto max-w-6xl px-4">
        <div className="navbar-start gap-3">
          <Link to="/" className="btn btn-ghost px-1 normal-case">
            <img src={logo} alt="Satelliting logo" className="h-10 w-10" />
          </Link>
          <span className="hidden text-lg font-semibold sm:inline-flex">
            Satelliting LLC
          </span>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal gap-4 px-1 text-lg font-medium">
            <li>
              <NavLink to="/" end className={navLinkClass}>
                <FontAwesomeIcon icon={faHouse} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                <FontAwesomeIcon icon={faInfoCircle} />
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                <FontAwesomeIcon icon={faEnvelope} />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end" />
      </nav>
    </header>
  );
}

export default Navigation;
