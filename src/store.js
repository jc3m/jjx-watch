// @flow
import { combineReducers } from 'redux';

import media from './services/media/reducer';
import type { MediaState } from './services/media/reducer';

const reducer = combineReducers({
  media,
});

export type State = {
  media: MediaState,
};

export default reducer;