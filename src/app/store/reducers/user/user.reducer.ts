import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { loadUsers, loadUsersFailure, loadUsersSuccess, selectUser } from '../../actions/user/user.actions';


export const userFeatureKey = 'user';

export interface State {
  users: User[];
  selectedUser: null| User;
  someNumber: null| number;
  loadingUsers: boolean;
  errorMessage: string
};

export const initialState: State = {
  users:[],
  selectedUser: null,
  someNumber: null,
  loadingUsers: true,
  errorMessage: '',
};


export const reducer = createReducer<State>(
  initialState,
  on(loadUsers, (state, action) => {
    return {...state, loadingUsers: true}
  }),
  on(loadUsersSuccess, (state, action) => {
    return {...state, users: action.data, loadingUsers: false}
  }),
  on(loadUsersFailure, (state, action) => {
    console.log('user load fail')
    return {...state, errorMessage: action.error.message, loadingUsers: false}
  }),

  on(selectUser, (state,action) => {
     return {...state, selectedUser: action.data}
   }),


  // on(favoriteNumber,(state,action)=> {
  //   return {...state, someNumber: action.data}
  // })
);



