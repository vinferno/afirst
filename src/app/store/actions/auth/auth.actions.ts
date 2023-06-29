import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { ValidationUser } from 'src/app/models/valiidation-user.models';

export const loginAuth = createAction(
  '[Auth] Login Auth',
  props<{ data: ValidationUser }>()
);

export const loginAuthSuccess = createAction(
  '[Auth] Login Auth Success',
  props<{ data: User }>()
);

export const loginAuthFailure = createAction(
  '[Auth] Login Auth Failure',
  props<{ error: Error }>()
);
