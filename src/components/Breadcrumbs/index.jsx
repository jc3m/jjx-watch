// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import type { State } from 'store';
import type { BreadcrumbLink } from 'services/ui/reducer';

type StateProps = {
  breadcrumbs: BreadcrumbLink[],
}

const Breadcrumbs = (props: StateProps) => {
  const links = props.breadcrumbs.map((b, i) => {
    let classes = '';
    if (i === props.breadcrumbs.length - 1) {
      classes = 'is-active';
    }
    return <li key={b.ref} className={classes}><Link to={b.ref}>{b.text}</Link></li>;
  });

  return (
    <section className="section" style={{ paddingTop: '0rem', paddingBottom: '0rem' }}>
      <div className="container">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            { links }
          </ul>
        </nav>
      </div>
    </section>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  breadcrumbs: state.ui.breadcrumbs,
});

export default connect(mapStateToProps, {})(Breadcrumbs);
