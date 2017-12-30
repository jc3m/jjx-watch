import React, { Component } from 'react';

import { createShow } from 'services/api/media';

class ShowColumn extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      showId: '',
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(param) {
    return (e) => this.setState({ [param]: e.target.value });
  }

  submit() {
    createShow(this.state.title, this.state.showId)
      .then(() => { this.setState({ title: '', showId: '' }); })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="column">
        <h2 className="title is-3">Shows</h2>
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

        <button className="button is-primary" onClick={this.submit}>Add</button>
      </div>
    );
  }
};

export default ShowColumn;
