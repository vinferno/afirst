import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ValidationUser } from 'src/app/models/valiidation-user.models';
import { AppState } from 'src/app/store';
// import { loginAuth } from 'src/app/store/actions/auth/auth.actions';
import * as authActions from 'src/app/store/actions/auth/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    })
   }

  ngOnInit(): void {

  }

  login() {
    const value = this.loginForm.value as ValidationUser;
    this.store.dispatch(authActions.loginAuth({data: value} ))
  }

}
