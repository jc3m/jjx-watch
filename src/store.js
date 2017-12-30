// @flow
import { combineReducers } from 'redux';

import user from './services/user/reducer';
import type { UserState } from './services/user/reducer';
import media from './services/media/reducer';
import type { MediaState } from './services/media/reducer';
import show from './services/show/reducer';
import type { ShowState } from './services/show/reducer';
import ui from './services/ui/reducer';
import type { UIState } from './services/ui/reducer';

const reducer = combineReducers({
  user,
  media,
  show,
  ui,
});

export type State = {
  user: UserState,
  media: MediaState,
  show: ShowState,
  ui: UIState,
};

export default reducer;