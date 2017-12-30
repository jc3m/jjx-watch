// @flow
import {
  SET_USERNAME,
  SET_PASSWORD,
} from './actions';
import type { UserAction } from './actions';

export type UserStatus = 'UNAUTHENTICATED' | 'LOADING' | 'AUTHENTICATED';
export type UserState = {
  status: UserStatus,
  username: string,
  password: string,
};

const initialState: UserState = {
  status: 'UNAUTHENTICATED',
  username: '',
  password: '',
};

function user(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case SET_USERNAME:
      return Object.assign({}, state, { username: action.username });
    case SET_PASSWORD:
      return Object.assign({}, state, { password: action.password });
    default:
      return state;
  }
}

export default user;
