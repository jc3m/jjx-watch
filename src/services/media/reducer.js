// @flow
import {
  REQUEST_MEDIA,
  RECEIVE_MEDIA_FAILURE,
  RECEIVE_MEDIA_SUCCESS,
} from './actions';

import type { MediaAction } from './actions';

export type MediaStatus = 'STALE' | 'FETCHING' | 'RECEIVED' | 'ERROR';

export type Media = {
  title: string,
  ref: string,
};

export type ShowData = {
  title: string,
  showId: string,
};

export type MediaState = {
  status: MediaStatus,
  errorMessage: ?string,
  movies: Media[],
  shows: ShowData[],
};

const initialState: MediaState = {
  status: 'STALE',
  errorMessage: null,
  movies: [],
  shows: [],
};

function media(state: MediaState = initialState, action: MediaAction): MediaState {
  switch (action.type) {
    case REQUEST_MEDIA:
      return Object.assign({}, state, { status: 'FETCHING' });
    case RECEIVE_MEDIA_SUCCESS:
      return Object.assign({}, state, {
        status: 'RECEIVED',
        movies: action.data.movies,
        shows: action.data.shows,
      });
    case RECEIVE_MEDIA_FAILURE:
      return Object.assign({}, state, { status: 'ERROR', errorMessage: action.reason });
    default:
      return state;
  }
}

export default media;
