import React, { Component } from 'react';

import { createEpisode } from 'services/api/media';

class EpisodeColumn extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      showId: '',
      season: '',
      episode: '',
      title: '',
      url: ''
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(param) {
    return (e) => this.setState({ [param]: e.target.value });
  }

  submit() {
    const { showId, season, episode, title, url } = this.state;
    createEpisode(showId, season, episode, title, url)
      .then(() => { this.setState({ showId: '', season: '', episode: '', title: '', url: '' }); })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="column">
        <h2 className="title is-3">Episode</h2>
        <div className="field">
          <label className="label">Show ID</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              value={this.state.showId}
              onChange={this.onChange('showId')}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-link"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Season</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              value={this.state.season}
              onChange={this.onChange('season')}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-link"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Episode</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              value={this.state.episode}
              onChange={this.onChange('episode')}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-link"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Title</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              value={this.state.title}
              onChange={this.onChange('title')}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-link"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">URL</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              value={this.state.url}
              onChange={this.onChange('url')}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-link"></i>
            </span>
          </div>
        </div>

        <button className="button is-primary" onClick={this.submit}>Add</button>
      </div>
    );
  }
};

export default EpisodeColumn;
