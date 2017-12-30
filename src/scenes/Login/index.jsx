// @flow
import React  from 'react';
import { connect } from 'react-redux';

import type { Dispatch } from 'redux';

import { setUsername, setPassword } from 'services/user/actions';
import './styles.css';

import type { State } from 'store';

type StateProps = {
  username: string,
  password: string,
};

type DispatchProps = {
  setUsername: string => void,
  setPassword: string => void,
};

type Props = StateProps & DispatchProps;

const Login = (props: Props) => (
  <section className="section">
    <div className="container">
      <div class="columns">
        <div className="column" />
        <div className="column is-third card login">
          <h1 className="title">Login</h1>

          <div className="field">
            <label className="label">Username</label>
            <div>
              <input
                className="input"
                type="text"
                placeholder="Username"
                value={props.username}
                onChange={(e: SyntheticInputEvent<HTMLInputElement>) => {
                  props.setUsername(e.currentTarget.value);
                }}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div>
              <input
                className="input"
                type="password"
                placehold="Password"
                value={props.password}
                onChange={(e: SyntheticInputEvent<HTMLInputElement>) => {
                  props.setPassword(e.currentTarget.value);
                }}
              />
            </div>
          </div>

          <button class="button is-primary">Log In</button>
        </div>

        <div className="column" />
      </div>
    </div>
  </section>
);

const mapStateToProps = (state: State): StateProps => ({
  username: state.user.username,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch: Dispatch<*>): DispatchProps => ({
  setUsername: (username: string) => { dispatch(setUsername(username)); },
  setPassword: (password: string) => { dispatch(setPassword(password)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
