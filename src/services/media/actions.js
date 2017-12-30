// @flow
import type { Dispatch } from 'redux';

import { getMedia } from '../api/media';

import type { Media, ShowData } from './reducer';

export const REQUEST_MEDIA: 'REQUEST_MEDIA' = 'REQUEST_MEDIA';
export const RECEIVE_MEDIA_SUCCESS: 'RECEIVE_MEDIA_SUCCESS' = 'RECEIVE_MEDIA_SUCCESS';
export const RECEIVE_MEDIA_FAILURE: 'RECEIVE_MEDIA_FAILURE' = 'RECEIVE_MEDIA_FAILURE';

type RequestMediaAction = {
  type: 'REQUEST_MEDIA',
};

export type MediaData = {
  movies: Media[],
  shows: ShowData[],
}
type ReceiveMediaSuccessAction = {
  type: 'RECEIVE_MEDIA_SUCCESS',
  data: MediaData,
};

type ReceiveMediaFailureAction = {
  type: 'RECEIVE_MEDIA_FAILURE',
  reason: string,
};

export type MediaAction =
  | RequestMediaAction
  | ReceiveMediaSuccessAction
  | ReceiveMediaFailureAction;

function requestMedia(): RequestMediaAction {
  return {
    type: REQUEST_MEDIA,
  };
}

function receiveMediaSuccess(json: MediaData): ReceiveMediaSuccessAction {
  return {
    type: RECEIVE_MEDIA_SUCCESS,
    data: json,
  };
}

function receiveMediaFailure(reason: string): ReceiveMediaFailureAction {
  return {
    type: RECEIVE_MEDIA_FAILURE,
    reason,
  };
}

export function fetchMedia() {
  return (dispatch: Dispatch<MediaAction>) => {
    dispatch(requestMedia());
    getMedia()
      .then((json: MediaData) => {
        dispatch(receiveMediaSuccess(json));
      }).catch((reason: Error) => {
        dispatch(receiveMediaFailure(reason.message));
      });
  }
}