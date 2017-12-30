import React, { Component } from 'react';

import Header from 'components/Header';
import MovieColumn from './components/MovieColumn';
import ShowColumn from './components/ShowColumn';
import EpisodeColumn from './components/EpisodeColumn';

class Admin extends Component {
  render() {
    return (
      <div>
        <Header text="Admin Panel" />
        <section className="section">
          <div className="container">
            <div className="columns">
              <MovieColumn />              
              <ShowColumn />
              <EpisodeColumn />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Admin;
