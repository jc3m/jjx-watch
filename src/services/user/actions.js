// @flow
export const SET_USERNAME: 'SET_USERNAME' = 'SET_USERNAME';
export const SET_PASSWORD: 'SET_PASSWORD' = 'SET_PASSWORD';

type SetUsernameAction = {
  type: 'SET_USERNAME',
  username: string,
};

type SetPasswordAction = {
  type: 'SET_PASSWORD',
  password: string,
}

export type UserAction =
  | SetUsernameAction
  | SetPasswordAction;

export function setUsername(username: string): SetUsernameAction {
  return {
    type: SET_USERNAME,
    username,
  };
}

export function setPassword(password: string): SetPasswordAction {
  return {
    type: SET_PASSWORD,
    password,
  };
}
