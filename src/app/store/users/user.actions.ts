import { createAction, props } from '@ngrx/store';
import { User } from './user.model';
import {
 
  LOAD_USERS,
  LOAD_USERS_FAILURE,
  LOAD_USERS_SUCCESS,
  LOAD_ONE_USER,
  LOAD_ONE_USER_FAILURE,
  LOAD_ONE_USER_SUCCESS,

} from './user.types';

// Charger tous les utilisateurs
export const loadAllUsers = createAction(LOAD_USERS);

export const loadAllUsersSuccess = createAction(
  LOAD_USERS_SUCCESS,
  props<{ list: User[] }>()
);

export const loadAllUsersFailure = createAction(
  LOAD_USERS_FAILURE,
  props<{ error: string }>()
);


// Charger un utilisateur par son ID
export const loadOneUser = createAction(
  LOAD_ONE_USER,
  props<{ id: number }>()
);

export const loadOneUserSuccess = createAction(
  LOAD_ONE_USER_SUCCESS,
  props<{ user: User }>()
);

export const loadOneUserFailure = createAction(
  LOAD_ONE_USER_FAILURE,
  props<{ error: string }>()
);
