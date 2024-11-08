import { UserState } from './users/user.model';

import { userSlice } from './users/user.reducer';

export interface AppStore {
  counter: UserState;
}

export const store = {
  user: userSlice,
};