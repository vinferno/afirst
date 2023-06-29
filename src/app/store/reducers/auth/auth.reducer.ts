import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { loginAuthFailure, loginAuthSuccess } from '../../actions/auth/auth.actions';


export const authFeatureKey = 'auth';

export interface State {
  loggedInUser: User | null;
  errorMessage: string;
}

export const initialState: State = {
  loggedInUser: null,
  errorMessage: '',
};


export const reducer = createReducer<State>(
  initialState,
  on(loginAuthSuccess, (state, action): State => {
    return {...state,loggedInUser: action.data}
  }),
  on(loginAuthFailure, (state, action): State => {
    return {...state, errorMessage: action.error.message}
  })

);

