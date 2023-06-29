import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionType } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { ValidationUser } from 'src/app/models/valiidation-user.models';
import { AuthService } from 'src/app/services/auth.service';
import { loginAuth, loginAuthFailure, loginAuthSuccess } from '../../actions/auth/auth.actions';



@Injectable()
export class AuthEffects {


  loginAuth$ = createEffect(() => this.actions$.pipe(
    ofType(loginAuth as ActionType<ValidationUser>),
    mergeMap((action: ValidationUser) => {
      return this.auth.login(action)
        .pipe(
          map(data => {
            return (loginAuthSuccess({ data }));
          }),
          catchError((error) => {
            return of(loginAuthFailure({ error }));
          })
        )})
    )
  );


  constructor(
    private actions$: Actions,
    private auth: AuthService
    ) {}

}
