// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import type { Dispatch } from 'redux-thunk';

import Header from 'components/Header';
import { fetchMedia } from 'services/media/actions';
import './styles.css';

import type { State } from '../../store';
import type { MediaState } from 'services/media/reducer';

type StateProps = {
  media: MediaState,
};

type DispatchProps = {
  fetchMedia: () => void,
};

type MediaProps = StateProps & DispatchProps;

class Media extends Component<MediaProps> {
  componentWillMount() {
    this.props.fetchMedia();
  }

  render() {
    const shows = this.props.media.shows.map(s => (
      <li key={s.showId}><Link to={`/s/${s.showId}`}>{s.title}</Link></li>
    ));

    const movies = this.props.media.movies.map(m => (
      <li key={m.ref}><a href={m.ref}>{m.title}</a></li>
    ));

    return (
      <div className="media-home">
        <Header text="Watch" />

        <section className="section">
          <div className="container">
            <h2 className="subtitle is-3" style={{ marginTop: 0 }}>Shows</h2>
            <ul>
              {shows}
            </ul>

            <h2 className="subtitle is-3">Movies</h2>
            <ul>
              {movies}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  media: state.media,
});

const mapDispatchToProps = (dispatch: Dispatch<*>): DispatchProps => ({
  fetchMedia: () => { dispatch(fetchMedia()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Media);
