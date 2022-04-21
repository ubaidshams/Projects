import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navbarBlock">
      <article>
        <div className="logoBlock">
          <Link to="/">TODO</Link>
        </div>
        <div className="menuBlock">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/view">View Todo</Link>
            </li>
            <li>
              <Link to="/add">Add Todo</Link>
            </li>
            <li>
              <a href="#">Signup</a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar;
