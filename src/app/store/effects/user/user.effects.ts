import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { AppState } from '../..';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from '../../actions/user/user.actions';



@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    mergeMap(() => this.usersService.getAllUsers()
      .pipe(
        tap((data) => console.log(data)),
        map(users => {
          return (loadUsersSuccess({data: users}))
        }),
        catchError((error) => {
          return of(loadUsersFailure({error }))})
      ))
    )
  );


  constructor(private actions$: Actions,
    private usersService: UsersService,
    ) {}

}

