// @flow
import type { Dispatch } from 'redux';

import { getEpisodes } from '../api/media';
import type { EpisodeData } from "./reducer";

export const REQUEST_SHOW: 'REQUEST_SHOW' = 'REQUEST_SHOW';
export const RECEIVE_SHOW_SUCCESS: 'RECEIVE_SHOW_SUCCESS' = 'RECEIVE_SHOW_SUCCESS';
export const RECEIVE_SHOW_FAILURE: 'RECEIVE_SHOW_FAILURE' = 'RECEIVE_SHOW_FAILURE';

type RequestShowAction = {
  type: 'REQUEST_SHOW',
  showId: string,
};

type ReceiveShowSuccessAction = {
  type: 'RECEIVE_SHOW_SUCCESS',
  showId: string,
  title: string,
  episodes: EpisodeData[],
};

type ReceiveShowFailureAction = {
  type: 'RECEIVE_SHOW_FAILURE',
  showId: string,
  reason: string,
};

export type ShowAction =
  | RequestShowAction
  | ReceiveShowSuccessAction
  | ReceiveShowFailureAction;

function requestShow(showId: string): RequestShowAction {
  return ({
    type: REQUEST_SHOW,
    showId
  });
}

function receiveShowSuccess(showId: string, title: string, episodes: EpisodeData[]): ReceiveShowSuccessAction {
  return ({
    type: RECEIVE_SHOW_SUCCESS,
    showId,
    title,
    episodes,
  });
}

function receiveShowFailure(showId: string, reason: string): ReceiveShowFailureAction {
  return ({
    type: RECEIVE_SHOW_FAILURE,
    showId,
    reason,
  });
}

export function fetchShow(showId: string) {
  return (dispatch: Dispatch<ShowAction>) => {
    dispatch(requestShow(showId));
    getEpisodes(showId)
      .then((json) => { dispatch(receiveShowSuccess(showId, json.title, json.episodes)) })
      .catch((reason: Error) => { dispatch(receiveShowFailure(showId, reason.message)) });
  }
};
