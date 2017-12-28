// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1"><Link to="/">Watch</Link></h1>
      </div>
    </div>
  </section>
);

export default Header;
