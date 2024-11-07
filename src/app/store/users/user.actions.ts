import { createAction, props } from '@ngrx/store';
import { User } from './user.model';
import {
  ADD_USER,
  ADD_USER_FAILURE,
  ADD_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  LOAD_USERS,
  LOAD_USERS_FAILURE,
  LOAD_USERS_SUCCESS,
  LOAD_ONE_USER,
  LOAD_ONE_USER_FAILURE,
  LOAD_ONE_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
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

// Ajouter un utilisateur
export const addUser = createAction(ADD_USER, props<{ user: User }>());

export const addUserSuccess = createAction(
  ADD_USER_SUCCESS,
  props<{ user: User }>()
);

export const addUserFailure = createAction(
  ADD_USER_FAILURE,
  props<{ error: string }>()
);

// Mettre à jour un utilisateur
export const updateUser = createAction(
  UPDATE_USER,
  props<{ user: User }>()
);

export const updateUserSuccess = createAction(
  UPDATE_USER_SUCCESS,
  props<{ user: User }>()
);

export const updateUserFailure = createAction(
  UPDATE_USER_FAILURE,
  props<{ error: string }>()
);

// Supprimer un utilisateur
export const deleteUser = createAction(
  DELETE_USER,
  props<{ id: number }>()
);

export const deleteUserSuccess = createAction(
  DELETE_USER_SUCCESS,
  props<{ id: number }>()
);

export const deleteUserFailure = createAction(
  DELETE_USER_FAILURE,
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
