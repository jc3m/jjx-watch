// @flow
import {
  REQUEST_SHOW,
  RECEIVE_SHOW_SUCCESS,
  RECEIVE_SHOW_FAILURE,
} from './actions';
import type { ShowAction } from './actions';

export type EpisodeData = {
  title: string,
  url: string,
  season: number,
  episode: number,
};

export type ShowStatus = 'FETCHING' | 'RECEIVED' | 'ERROR';
export type ShowData = {
  status: ShowStatus,
  errorMessage: ?string,
  title: string,
  episodes: EpisodeData[],
};

export type ShowState = {
  shows: Map<string, ShowData>,
};

const initialState: ShowState = {
  shows: new Map(),
};

function showReducer(state: ShowState = initialState, action: ShowAction): ShowState {
  const shows = new Map(state.shows);
  switch (action.type) {
    case REQUEST_SHOW:
      shows.set(action.showId, {
        status: 'FETCHING',
        errorMessage: null,
        title: '',
        episodes: []
      });
      return Object.assign({}, { shows });
    case RECEIVE_SHOW_SUCCESS:
      shows.set(action.showId, {
        status: 'RECEIVED',
        errorMessage: null,
        title: action.title,
        episodes: action.episodes,
      });
      return Object.assign({}, { shows });
    case RECEIVE_SHOW_FAILURE:
      shows.set(action.showId, {
        status: 'ERROR',
        errorMessage: action.reason,
        title: '',
        episodes: [],
      });
      return Object.assign({}, { shows });
    default:
      return state;
  }
}

export default showReducer;
