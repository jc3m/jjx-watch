import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

type Props = {
  match: Match,
};

class Show extends Component<Props> {
  render() {
    console.log(this.props.match);

    return (
      <div>
        <p>Show</p>
      </div>
    );
  }
}

export default withRouter(Show);
