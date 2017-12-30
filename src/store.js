// @flow
import { combineReducers } from 'redux';

import user from './services/user/reducer';
import type { UserState } from './services/user/reducer';
import media from './services/media/reducer';
import type { MediaState } from './services/media/reducer';
import show from './services/show/reducer';
import type { ShowState } from './services/show/reducer';

const reducer = combineReducers({
  user,
  media,
  show,
});

export type State = {
  user: UserState,
  media: MediaState,
  show: ShowState,
};

export default reducer;