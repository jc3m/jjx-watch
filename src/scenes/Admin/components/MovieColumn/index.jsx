import React, { Component } from 'react';

import { createMovie } from 'services/api/media';

class MovieColumn extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      url: '',
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(param) {
    return (e) => this.setState({ [param]: e.target.value });
  }

  submit() {
    createMovie(this.state.title, this.state.url)
      .then(() => { this.setState({ title: '', url: '' }); })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="column">
        <h2 className="title is-3">Movies</h2>
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
              <i className="fa fa-film"></i>
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

export default MovieColumn;
