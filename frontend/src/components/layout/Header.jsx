import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
const DLink = ({ slug, end, title, children }) => {
  return (
    <NavLink className="dropdown-item" to={slug} end={!!end}>
      {title} {children}
    </NavLink>
  );
};

function Header() {
  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-primary header">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i className="fa-solid fa-basketball"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <DLink title="Home" slug="/" end />
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#content">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#about">
                Content
              </a>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu
              </a>
              <div className="dropdown-menu">
                <DLink title="Joueurs" slug="/players" end />
                <DLink title="Clubs" slug="/clubs" end />
                <DLink title="Sponsors" slug="/sponsors" end />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
