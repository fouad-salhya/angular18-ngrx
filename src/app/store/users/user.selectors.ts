import { pick } from 'lodash';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.model';
// Sélecteur principal pour accéder à l'état UserState dans le store
const getUserState = createFeatureSelector<UserState>('user');

// Sélecteur pour obtenir la liste des utilisateurs et le message d'erreur
export const getUsers = createSelector(getUserState, (state) =>
  pick(state, ['list', 'errorMessage'])
);

// Sélecteur pour obtenir un utilisateur spécifique (selectedUser)
export const getSelectedUser = createSelector(
  getUserState,
  (state) => state.selectedUser
);

// Sélecteur pour vérifier la présence d'une erreur
export const getUserError = createSelector(
  getUserState,
  (state) => state.errorMessage
);
