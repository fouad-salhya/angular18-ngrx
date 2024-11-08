import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.model';
import * as UserActions from './user.actions';

export const initialState: UserState = {
  list: [],
  selectedUser: null,
  errorMessage: ''
};

const userReducer = createReducer(
  initialState,

  on(UserActions.loadAllUsersSuccess, (state, { list }) => ({
    ...state,
    list
  })),

  on(UserActions.loadAllUsersFailure, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),

  on(UserActions.addUserSuccess, (state, { user }) => ({
    ...state,
    list: [...state.list, user]
  })),

  on(UserActions.addUserFailure, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),

  on(UserActions.deleteUserSuccess, (state, { id }) => ({
    ...state,
    list: state.list.filter(user => user.id !== id)
  })),

  on(UserActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),

  on(UserActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    list: state.list.map(u => (u.id === user.id ? user : u))
  })),

  on(UserActions.updateUserFailure, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),

  on(UserActions.loadOneUserSuccess, (state, { user }) => ({
    ...state,
    selectedUser: user
  })),

  on(UserActions.loadOneUserFailure, (state, { error }) => ({
    ...state,
    errorMessage: error
  }))
);

export const userSlice = {
  name: 'user',
  reducer: userReducer,
};
