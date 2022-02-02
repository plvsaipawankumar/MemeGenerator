import React from "react";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          <h1 className="is-size-4 is-capitalized is-primary">
            Meme Generator
          </h1>
        </a>

        <a
          href="/"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link to="/" class="navbar-item">
            Use Template
          </Link>

          <Link to="/createyourown" class="navbar-item">
            My Own
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
