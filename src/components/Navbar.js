import React, { Component } from 'react';


const Navigation = (props) => {
    return (
      <nav
      className="navbar is-dark is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item has-text-grey-light" href="/">
          Home
        </a>
      </div>

      <div className="navbar-menu has-dropdown is-active">
        <a className="navbar-item has-text-grey-light" href="/works">
          Works
        </a>
        <a className="navbar-item has-text-grey-light" href="/bio">
          Bio
        </a>
        <a className="navbar-item has-text-grey-light" href="/contact">
          Contact
        </a>
      </div>

      <div className="navbar-title has-text-grey-light">
          The Artwork of <br/> Vern Planck
      </div>
    </nav>
    )
  }
  
  export default Navigation