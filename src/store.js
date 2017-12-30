// @flow
import { combineReducers } from 'redux';

import user from './services/user/reducer';
import type { UserState } from './services/user/reducer';
import media from './services/media/reducer';
import type { MediaState } from './services/media/reducer';

const reducer = combineReducers({
  user,
  media,
});

export type State = {
  user: UserState,
  media: MediaState,
};

export default reducer;