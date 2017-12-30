// @flow
import { SET_BREADCRUMBS } from './actions';
import type { UIAction } from './actions';

export type BreadcrumbLink = {
  text: string,
  ref: string,
};

export type UIState = {
  breadcrumbs: BreadcrumbLink[],
};

const initialState: UIState = {
  breadcrumbs: [{ text: 'Home', ref: '/' }],
};

function uiReducer(state: UIState = initialState, action: UIAction): UIState {
  switch (action.type) {
    case SET_BREADCRUMBS:
      return Object.assign({}, state, { breadcrumbs: action.breadcrumbs });
    default:
      return state;
  }
}

export default uiReducer;
