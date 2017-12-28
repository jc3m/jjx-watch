// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMedia } from 'services/media/actions';
import './styles.css';

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
    console.log(this.props.media);

    return (
      <div className="media-home">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title"> Watch </h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1>Media</h1>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state): StateProps => ({
  media: state.media,
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
  fetchMedia: () => { dispatch(fetchMedia()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Media);
