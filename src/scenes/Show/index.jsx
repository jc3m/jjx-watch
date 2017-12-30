// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import type { Dispatch } from 'redux-thunk';
import type { Match } from 'react-router-dom';

import Header from 'components/Header';
import { fetchShow } from 'services/show/actions';
import type { State } from 'store';
import type { ShowData, EpisodeData } from 'services/show/reducer';

type SeasonProps = {
  season: number,
  episodes: EpisodeData[]
}
const Season = (props: SeasonProps) => {
  const episodes = props.episodes.map(e => (
    <li key={e.url}>
      <p style={{ display: 'inline' }}>{`S${e.season}:E${e.episode} `}</p>
      <a href={e.url}>{e.title}</a>
    </li>
  ));

  return (
    <div>
      <h3 className="title is-5" style={{ margin: '1rem 0 0 0' }}>{`Season ${props.season}`}</h3>
      <ul>
        { episodes }
      </ul>
    </div>
  );
};

type StateProps = {
  shows: Map<string, ShowData>,
}

type DispatchProps = {
  fetchShow: (string) => void,
}

type Props = {
  match: Match,
};

type P = Props & StateProps & DispatchProps;

class Show extends Component<P> {
  componentWillMount() {
    const showId: string = this.props.match.params.show || '';
    if (!this.props.shows.has(showId)) {
      this.props.fetchShow(showId);
    }
  }

  render() {
    const showId: string = this.props.match.params.show || '';
    const show = this.props.shows.get(showId);

    if (show && show.status === 'RECEIVED') {
      const { title, episodes } = show;

      episodes.sort((a, b) => {
        if (a.season < b.season) {
          return -1;
        } else if (a.season > b.season) {
          return 1;
        } else {
          return a.episode - b.episode;
        }
      });

      const reducer = (acc, cur) => {
        if (acc.length === 0) {
          return [{ season: cur.season, episodes: [cur] }];
        } else {
          const prevSeason = acc[acc.length - 1].season;
          if (prevSeason === cur.season) {
            acc[acc.length - 1].episodes.push(cur);
            return acc;
          } else {
            acc.push({ season: cur.season, episodes: [cur] });
            return acc;
          }
        }
      }
      const grouped = episodes.reduce(reducer, []);
      const eps = grouped.map(g => <Season key={g.season} season={g.season} episodes={g.episodes} />);

      return (
        <div className="show">
          <Header text={title} />
          <section className="section" style={{ paddingTop: "1.5rem" }}>
            <div className="container">
              { eps }
            </div>
          </section>
        </div>
      );
    } else {
      return (
        <section className="section">
          <div className="container">
            <h1 className="title">Loading</h1>
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = (state: State) => ({
  shows: state.show.shows,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchShow: (showId: string) => { dispatch(fetchShow(showId)); },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show));
