import { createReducer, on } from '@ngrx/store';
import { initUserState } from './user.model';
import * as UserActions from './user.actions';


const userReducer = createReducer(
  initUserState,
  on(UserActions.loadAllUsersSuccess, (state, { list }) => ({
    ...state,
    list
  })),

  on(UserActions.loadAllUsersFailure, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),
);

export const userSlice = {
  name: 'user',
  reducer: userReducer,
};
