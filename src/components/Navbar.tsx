import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar text-bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand fw-semibold" href="#">
          <img
            src="https://cdn.gogocdn.net/files/gogo/img/favicon.ico"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top me-2"
          />
          PocoAnime
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
