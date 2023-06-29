import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersService } from 'src/app/services/users.service';
import {AppState} from '../..';
import * as userFeature from '../../reducers/user/user.reducer';

export const userFeatureSelector = createFeatureSelector<AppState, userFeature.State>(userFeature.userFeatureKey);

export const usersSelector = createSelector(
  userFeatureSelector,
  (userState) => userState.users
);

export const loadingUsersSelector = createSelector(
  userFeatureSelector,
  (state) => state.loadingUsers
);
export const userErrorMessageSelector = createSelector(
  userFeatureSelector,
  (state) => state.errorMessage
);

export const firstUserSelector = createSelector(
  usersSelector,
  (state) => state[0]
);

const appState = {
  user: {
    users: [],
    selectedUser: null,
    errorMessage: '',
    loadingUsers: false
  },
  post : {

  }
}
