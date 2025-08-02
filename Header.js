import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Group Links Admin</Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/links">Links</Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-light">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
