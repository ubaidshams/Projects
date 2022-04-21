import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <section className="navbarBlock">
      <article>
        <div className="logoBlock">
          <Link to="/">ToDo</Link>
        </div>
        <div className="menuBlock">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
          <Link to="/view">View</Link>
        </div>
      </article>
    </section>
  );
};

export default Navbar;
