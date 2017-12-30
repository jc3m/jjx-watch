// @flow
import React from 'react';

type Props = {
  text: string,
};

const Header = (props: Props) => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1">{ props.text }</h1>
      </div>
    </div>
  </section>
);

export default Header;
